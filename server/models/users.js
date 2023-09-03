import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: [true, "First name is required"],
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      require: true,
      min: 1,
      max: 30,
    },
    email: {
      type: String,
      require: [true, "email is required"],
      unique: true,
      validate: [validator.isEmail, "please provide a valid email"],
      max: 50,
    },
    Number: {
      type: Number,
      require: [true, "Number is required"],
    },
    password: {
      type: String,
      min: 8,
      require: [true, "Password is required"],
    },
    location: String,
    image: String,
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
