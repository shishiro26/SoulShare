import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema(
  {
    UserName: {
      type: String,
      required: [true, "Username is required"],
      validate: {
        validator: (value) => {
          return value.length >= 2 && value.length <= 50;
        },
        message: "Username must be between 2 and 50 characters",
      },
    },
    firstName: {
      type: String,
      required: [true, "First name is required"],
      validate: {
        validator: (value) => {
          return value.length >= 2 && value.length <= 50;
        },
        message: "First name must be between 2 and 50 characters",
      },
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      validate: {
        validator: (value) => {
          return value.length >= 2 && value.length <= 50;
        },
        message: "Last name must be between 2 and 50 characters",
      },
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
      type: String,
    },
    role: {
      type: String
    },
    description: {
      type: String
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
