import connectMongodb from "@/lib/mongodb";
import service from "@/models/serviceSchema";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = params;
  console.log(id);
  await connectMongodb();
  const services = await service.findOne({ _id: id }).exec();
  // const isAdmin = await user?.role === "admin";
  return NextResponse.json({ services});
}
