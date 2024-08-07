import connectMongodb from "@/lib/mongodb";
import project from "@/models/projectSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title,image,description,projectDuration,projectBeget,clientLocation,projectDiscount,categories,projectBenefit } = await request.json();
  const data = {title,image,description,projectDuration,projectBeget,clientLocation,projectDiscount,categories,projectBenefit}
  await connectMongodb();
  await project.create(data);
  return NextResponse.json({ message: "project upload" , status: true , status: 200 });
}


export async function GET(request) {
  await connectMongodb();
  const allProjects = await project.find({}).catch();
  // console.log(allUser)
  return NextResponse.json({allProjects});
}

