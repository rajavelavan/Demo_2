import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connect = async () => {
  const uri= process.env.MONGO_URI;
  try {
    console.log('connecting to MongoDB...'); // Debug log
    await mongoose.connect(uri);
    return console.log('DB connection successful');
  } catch (error) {
    console.log('Error in connecting to DB', error.message);
    process.exit(1);
  }
};

export default connect;