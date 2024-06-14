import users from "@/models/usersSchema";
import { NextResponse } from "next/server";

// one user find
export async function GET(request, { params }) {
  const { email } = params;
  const user = await users.findOne({ email: email });
  const isAdmin = await user?.role === "admin";
  console.log(isAdmin)
  return NextResponse.json({ admin:isAdmin },
    { status: 200 },
    { message: "Get Info" });
}