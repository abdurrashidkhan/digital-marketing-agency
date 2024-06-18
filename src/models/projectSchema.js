import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  title: { type: String, require: true },
  image: { type: String, require: true },
  description: { type: String, require: true },
  projectDuration:{type:String,require:true},
  projectBeget: {type:String,require:true},
  clientLocation:{type:String , require:true},
  projectDiscount:{type:String , require:true},
  categories: { type: String, require: true },
  projectBenefit: { type: String, require: true },
  
},{
  timestamps: true,
});
const project = mongoose.models.project || mongoose.model("project", projectSchema);
export default project;