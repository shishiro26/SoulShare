import OTP from "../models/OTP.js";
import User from "../models/Users.js";
import otpGenerator from "otp-generator";
import { sendMailer } from "../utils/sendMail.js";

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

/* Verifying the otp sent for the deletion of the email */
export const sendDeleteOtp = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    const user = await User.findById(id);

    console.log(user.email);
    if (user.email === email) {
      /* Generating an OTP */
      const otp = await otpGenerator.generate(6, {
        digits: true,
        specialChars: false,
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
      });

      await OTP.create({ otp, email });
      sendMailer(email, otp, user.firstName, user.lastName, "deleteAccount");
      return res.status(200).json({ message: "OTP sent successfully", otp });
    } else {
      res.status(404).json({ message: "Email not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
