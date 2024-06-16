import connectMongodb from "@/lib/mongodb";
import project from "@/models/projectSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title,description,projectDuration,projectBeget,clientLocation,image } = await request.json();
  const data = {title,description,projectDuration,projectBeget,clientLocation,image }
  await connectMongodb();
  await project.create(data);
  return NextResponse.json({ message: "project upload" , status: true , status: 200 });
}