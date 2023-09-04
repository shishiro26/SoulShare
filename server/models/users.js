import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema(
  {
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
    location: String,
    image: String,
    verified: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
