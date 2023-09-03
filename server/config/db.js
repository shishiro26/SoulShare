import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongoDB connected`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
