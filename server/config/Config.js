import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(`🔃 Connecting to DB...`);
    await mongoose.connect(process.env.MONGO_URL);

    if (mongoose.connection.readyState === 1) {
      console.log(
        `🫂  Successfully connected to ${mongoose.connection.db.databaseName}`
      );
    } else {
      console.log(
        `👎 Mongodb error: Unable to retrieve database name. Connection state: ${mongoose.connection.readyState}`
      );
    }
  } catch (err) {
    console.log(`👎 Mongodb error:`, err.message);
  }
};

export default connectDB;
