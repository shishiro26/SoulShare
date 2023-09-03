import bcrypt from "bcrypt";
import User from "../models/users.js";

/* Register User */

export const register = async (req, res) => {
  try {
    //Destructuring the req.body
    const {
      firstName,
      lastName,
      Number,
      email,
      password,
      location,
      confirmPassword,
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: `password do not match` });
    }

    //checking is the user exists
    const duplicate = await User.findOne({ email }).lean().exec();
    if (duplicate) {
      return res
        .json(409)
        .json({ message: "user already exists !! Try signing up " });
    }

    const salt = await bcrypt.genSalt();
    const hashedPwd = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      Number,
      email,
      password: hashedPwd,
      location,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });
    if (user) {
      res.status(201).json({ message: `New user ${firstName} created` });
    } else {
      res.status(400).json({ message: "Invalid user data received" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
