import mongoose from "npm:mongoose@^7.5.0";
import { load } from "https://deno.land/std/dotenv/mod.ts";
const env = await load();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env["MONGO_URL"]);
    console.log(`mongoDB connected`);
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;
