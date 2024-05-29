import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema(
  {
    displayName:{type:String, require:true},
    email: { type: String, require: true }
  },
  {
    timestamps: true,
  }
);
const usersModels =
  mongoose.models.usersModels || mongoose.model("usersModels", usersSchema);
export default usersModels;