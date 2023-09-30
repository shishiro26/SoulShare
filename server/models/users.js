import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema(
  {
    id: String,
    UserName: {
      type: String,
      required: [true, "Username is required"],
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "please provide a valid email"],
      max: 50,
    },
    Number: {
      type: Number,
      required: [true, "Number is required"],
    },
    password: {
      type: String,
      min: 8,
      required: [true, "Password is required"],
    },
    latitude: String,
    longitude: String,
    college: String,
    //storing the image in the base64 format,
    image: {
      data: String,
    },
    isVerified: { type: Boolean, default: false, required: true },
    markedForDeletion: { type: Boolean, default: false, required: true },
    expiresIn: {
      type: Date,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
