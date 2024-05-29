import connectMongodb from "@/lib/mongodb";
import usersModels from "@/models/usersSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { displayName, email } = await request.json();
  await connectMongodb();
  await usersModels.create({ displayName, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}