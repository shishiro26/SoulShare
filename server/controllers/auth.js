import bcrypt from "bcrypt";
import User from "../models/Users.js";
import otpGenerator from "otp-generator";
import { sendMailer } from "../utils/sendMail.js";
import Email from "../models/Email.js";
import OTP from "../models/OTP.js";
import { AccessToken, RefreshToken, verifyRefreshToken } from "../utils/generateToken.js";
/* Registering the user */
export const register = async (req, res) => {
  try {
    //Destructuring the req.body
    const {
      firstName,
      lastName,
      UserName,
      Number,
      email,
      password,
      latitude,
      longitude,
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
      UserName,
      firstName,
      lastName,
      Number,
      email,
      password: hashedPwd,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${UserName}`,
      latitude,
      longitude,
      isVerified: false,
    });

    const savedUser = await user.save()

    /* if the user is created than we are generating an token for the user */
    if (savedUser) {
      /* Sending an email to the user */
      sendMailer(email, otp, savedUser.UserName, "registration");
      const accessToken = await AccessToken(savedUser._id)
      const refreshToken = await RefreshToken(savedUser._id)
      res.cookie('AccessToken', accessToken, {
        secure: true,
        sameSite: "strict",
        maxAge: 20 * 60 * 1000,
      })
      res.cookie('RefreshToken', refreshToken, {
        secure: true,
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000
      })

      res.status(201).json({
        acccessToken: accessToken,
        refreshToken: refreshToken,
        userId: user._id,
        email: user.email
      });


    } else {
      res.status(400).json({ message: "Invalid user data received" });
    }
  } catch (err) {
    res.status(500).json({ message: "this is the error", error: err });
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
      const accessToken = await AccessToken(user._id)
      const refreshToken = await RefreshToken(user._id)

      res.cookie('AccessToken', accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 20 * 60 * 1000,
      });
      res.cookie('RefreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000

      })

      res.json({
        acccessToken: accessToken,
        refreshToken: refreshToken,
        userId: user._id,
        email: user.email
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

    if (!userDetails) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

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
      res.status(401).json({ message: "User needs to be verified !!!" });
    }
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
};

/*Updating the image*/
export const updateImage = async (req, res) => {
  try {

    const { id } = req.params;
    const userDetails = await User.findById(id);
    // if(req.payload.aud===id)

    if (!userDetails) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    if (userDetails.isVerified) {
      const { image } = req.body;
      const base64Image = req?.file?.buffer.toString("base64");

      await User.findByIdAndUpdate(id, {
        image: base64Image,
      });

      return res.status(200).json({ message: "Image updated successfully" });
    } else {
      return res.status(401).json({ error: "Verify your email" });
    }
  } catch (err) {
    return res.status(500).json({ message: `${err.message}` });
  }
};

/* Logout the user */
export const logout = (req, res) => {
  res.cookie("AccessToken", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.cookie("RefreshToken", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "user logged out successfully" });
};

/* Get the user Info */
export const userInfo = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.payload.aud === id) {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User doesn't exist" });
      }
      if (user.isVerified) {
        if (!user) {
          return res.status(403).send("Not authorized");
        } else {
          return res.status(200).json({ data: user });
        }
      } else {
        return res.status(401).json("Verify your email");
      }
    } else {
      res.status().json(`The id doesn't match with issued accesstoken`)
    }
  } catch (error) {
    res.status(500).json(`Error in getting info ${error.message}`);
  }
};

/* Delete the user with the delayed deletion  */
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const userDetails = await User.findOne({ _id: id })
      .select("-password")
      .exec();

    if (!userDetails) {
      return res.status(409).json("No such user found");
    }

    if (userDetails.isVerified) {
      const { otp } = req.body;
      const foundOTP = await OTP.findOne({ email, otp }).exec();

      if (foundOTP) {
        await User.findOneAndUpdate({ _id: id }, { markedForDeletion: true });

        sendMailer(
          email,
          otp,
          userDetails.UserName,
          "accountDeleted"
        );
        if (userDetails.markedForDeletion === true) {
          setTimeout(async () => {
            try {
              await User.deleteOne({ _id: id });
              const likedEmail = await Email.deleteOne({ email: userDetails.email })
              if (!likedEmail) {
                console.log(`${userDetails.email} do not exist!! `)
              }
              res.cookie("AccessToken", "", {
                httpOnly: true,
                expires: new Date(0),
              });
              res.cookie("RefreshToken", "", {
                httpOnly: true,
                expires: new Date(0),
              });
              res.status(200).json({ message: "user logged out successfully" });
              console.log("User and email is deleted and loggedout successfully")
            } catch (err) {
              console.log(`Error in the setTimeout${err.message}`)
            }
          }, 1000 * 60 * 60)
        }
        return res.status(200).json("User Deleted Successfully");
      } else {
        return res.status(400).json("OTP doesn't match");
      }
    } else {
      return res.status(401).json("Verify Your Email");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const refreshroute = async (req, res) => {
  try {
    const refreshToken = req.cookies.RefreshToken;
    console.table(req.cookies.RefreshToken)
    if (!refreshToken) {
      return res.status(401).json({ error: 'Refresh token missing' });
    }
    const userId = await verifyRefreshToken(refreshToken);
    const accessToken = await AccessToken(userId);
    const refToken = await RefreshToken(userId);

    res.cookie('AccessToken', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 20 * 60 * 1000,
    });
    res.cookie('RefreshToken', refToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000

    })

    res.json({ AccessToken: accessToken, refreshToken: refToken });
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid refresh token' });
    } else if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Refresh token expired' });
    } else {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

