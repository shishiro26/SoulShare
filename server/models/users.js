import mongoose from "npm:mongoose@^7.5.0";
import validator from "npm:validator@^13.11.0";

const userSchema = mongoose.Schema(
  {
    id: String,
    firstName: {
      type: String,
      required: [true, "First name is required"],
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 1,
      max: 30,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
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
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
