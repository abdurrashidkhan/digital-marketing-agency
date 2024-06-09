import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
  {
    name: { type: String, require: true },
    title: { type: String, require: true },
    categories: { type: String, require: true },
    price: { type: Number , require: true },
    serviceDiscount: { type: Number, require: true },
    date: { type: Date, require: true },
    facture: { type: String, require: true },
    img: { type: String, require: true },
    description: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
const service = mongoose.models.service || mongoose.model("service", serviceSchema);
export default service;