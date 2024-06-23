import connectMongodb from "@/lib/mongodb";
import service from "@/models/serviceSchema";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { id } = params
  console.log(id);
  await connectMongodb();
  const services = await service.deleteOne({ _id: id }).exec();
  return NextResponse.json({status:true,message:'service deleted'});
}
