import mongoose from "mongoose";
import validator from "validator";

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
    markedForDeletion: { type: Boolean, default: false, required: true },
    expiresIn: {
      type: Date,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  console.log(this.markedForDeletion);
  console.log("😵", this.expiresIn);
  if (this.markedForDeletion && !this.expiresIn) {
    const oneMinuteFromNow = new Date();
    oneMinuteFromNow.setMinutes(oneMinuteFromNow.getMinutes() + 1);
    this.deletionTimer = oneMinuteFromNow;
    console.log(oneMinuteFromNow);
  }
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
