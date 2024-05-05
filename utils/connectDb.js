import mongoose from 'mongoose';

const uri = process.env.MONGO_URI;

async function connectDb() {
  try {
    if (mongoose.connections[0].readyState) {
      console.log('data base has been connected');
      return;
    } else {
      await mongoose.connect(uri);
      console.log('connected to database');
    }
  } catch (err) {
    console.log(err);
  }
}

export default connectDb;
