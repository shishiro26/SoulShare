import bcrypt from "bcrypt";
import User from "../models/users.js";
import generateToken from "../utils/generateToken.js";
import otpgenerator from "otp-generator";
import { sendMailer } from "../utils/sendMail.js";

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
    const otp = await otpgenerator.generate(4, {
      digits: true,
      specialChars: false,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
    });

    /* Creating the user */
    const user = await User.create({
      firstName,
      lastName,
      Number,
      email,
      password: hashedPwd,
      location,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
      otp,
    });
   /* Sending an email to the user */
    sendMailer(email, otp, user.firstName, user.lastName);

    /* if the user is created than we are generating an token for the user */
    if (user) {
      generateToken(res, user._id);
      res
        .status(201)
        .json({ message: `Newuser ${firstName} created , otp: ${otp}` });
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

/* Logout the user */
export const logout = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "user logged out successfully" });
};
