import mongoose from "mongoose";

const otpSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  otp: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const OTP = mongoose.model("OTP", otpSchema);
export default OTP;
