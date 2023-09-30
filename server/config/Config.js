import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    if (mongoose.connection.readyState === 1) {
      console.log(`🫂  Successfully connected to ${mongoose.connection.db.databaseName}`);
    } else {
      console.log(`👎 Mongodb error: Unable to retrieve database name. Connection state: ${mongoose.connection.readyState}`);
    }
  } catch (err) {
    console.log(`👎 Mongodb error:`, err.message);
  }
};

mongoose.connection.on('connected', () => {
  console.log(`🔃 Mongoose connected to db`);
});

mongoose.connection.on('error', (error) => {
  console.log(`${error.message}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose disconnected 😥`);
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});

export default connectDB;
