import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  firtName: String,
  lastName: String,
  email: String,
  phone: Number,
  message: String,
});

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
