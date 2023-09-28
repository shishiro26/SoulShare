import mongoose from "mongoose";
import validator from "validator";

const emailSchema = mongoose.Schema({   
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        validate: [validator.isEmail, "please provide a valid email"],
        max: 50,
    }
})

const Email = mongoose.model("Email", emailSchema)
export default Email;