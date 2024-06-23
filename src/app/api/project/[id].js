import connectMongodb from "@/lib/mongodb";
import project from "@/models/projectSchema";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = params;
  console.log(id);
  await connectMongodb();
  const projects = await project.findOne({ _id: id }).exec();
  // const isAdmin = await user?.role === "admin";
  return NextResponse.json({ projects});
}
