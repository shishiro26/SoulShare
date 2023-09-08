import bcrypt from "bcrypt";
import User from "../models/users.js";
import generateToken from "../utils/generateToken.js";
import otpGenerator from "otp-generator";
import { sendMailer } from "../utils/sendMail.js";
import OTP from "../models/OTP.js";

/* Register User */
export const register = async (req, res) => {
  try {
    //Destructuring the req.body
    const {
      firstName,
      lastName,
      Number,
      email,
      password,
      location,
      confirmPassword,
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: `password do not match` });
    }

    //checking is the user exists
    const duplicate = await User.findOne({ email }).lean().exec();
    if (duplicate) {
      return res
        .status(409)
        .json({ message: "user already exists !! Try signing up " });
    }

    /* Hashing the password */
    const salt = await bcrypt.genSalt();
    const hashedPwd = await bcrypt.hash(password, salt);

    /* Generating an OTP */
    const otp = await otpGenerator.generate(6, {
      digits: true,
      specialChars: false,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
    });

    await OTP.create({ email, otp });

    /* Creating the user */
    const user = await User.create({
      firstName,
      lastName,
      Number,
      email,
      password: hashedPwd,
      location,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
      isVerified: false,
    });
    /* Sending an email to the user */
    sendMailer(email, otp, user.firstName, user.lastName);

    /* if the user is created than we are generating an token for the user */
    if (user) {
      generateToken(res, user._id);
      res
        .status(201)
        .json({ message: `New User ${firstName} created , otp: ${otp}` });
    } else {
      res.status(400).json({ message: "Invalid user data received" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* logging in the user */
export const login = async (req, res) => {
  try {
    //Destructuring the req.body
    const { email, password } = req.body;
    //find the user with the email in the mongoDB
    const user = await User.findOne({ email });
    // comparing the user password and the password in the mongoDB
    if (user && (await bcrypt.compare(password, user.password))) {
      generateToken(res, user._id);

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Resetting the password */
export const updatePassword = async (req, res) => {
  try {
    //destructuring the id from the params
    const { id } = req.params;
    // destructuring the req.body

    //getting the user Details
    const userDetails = await User.findById(id);

    if (userDetails.isVerified) {
      
      const { oldPassword, newPassword, confirmNewPassword } = req.body;

      //validating the oldPassword
      const isPasswordMatch = await bcrypt.compare(
        oldPassword,
        userDetails.password
      );
      //matching the new password
      if (newPassword !== confirmNewPassword) {
        return res.status(400).json({ message: `password do not match` });
      }

      if (!isPasswordMatch) {
        return res.status(401).json({
          message: "old Password do not match!!",
        });
      }

      const salt = await bcrypt.genSalt();
      const hashedPwd = await bcrypt.hash(newPassword, salt);

      await User.findByIdAndUpdate(id, {
        password: hashedPwd,
      });
      return res.status(201).json({ message: "Password Updated Successfully" });
    } else {
      res.status().json({ message: "User needs to be verified !!!" });
    }
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
};

/* Logout the user */
export const logout = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "user logged out successfully" });
};

/* Verify OTP */
export const verifyOtp = async (req, res) => {
  try {
    const { otp, email } = req.body;

    const verifyOTP = await OTP.findOne({ email, otp });
    if (!verifyOTP) {
      return res.status(401).json({ message: "Invalid OTP" });
    }

    const user = await User.findOneAndUpdate({ email }, { isVerified: true });
    if (user) {
      res.status(201).json({ message: `User verified successfully` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
