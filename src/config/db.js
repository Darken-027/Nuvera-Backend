import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error conectando a la base de datos:", error.message);
    process.exit(1);
  }
};
