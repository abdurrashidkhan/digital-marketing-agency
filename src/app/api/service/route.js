import connectMongodb from "@/lib/mongodb";
import service from "@/models/serviceSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name,title,categories,price,serviceDiscount,date,facture,img,description } = await request.json();
  const data = { name,title,categories,price,serviceDiscount,date,facture,img,description }
  await connectMongodb();
  await service.create(data);
  return NextResponse.json({ message: "service upload" , status: true , status: 200 });
}