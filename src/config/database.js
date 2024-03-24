import mongoose from "mongoose";
let conntected = false;
const connectDb = async () => {
  mongoose.set("strictQuery", true);
  if (conntected) {
    console.log("Database already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    conntected = true;
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

export default connectDb;
