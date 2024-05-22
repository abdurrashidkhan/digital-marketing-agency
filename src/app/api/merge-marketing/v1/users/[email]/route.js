
import connectMongodb from "@/lib/mongodb";
import usersModels from "@/models/users.schema";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { email } = params;
  console.log(email)
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongodb();
  await usersModels.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

