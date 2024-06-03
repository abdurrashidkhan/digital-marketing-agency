import connectMongodb from "@/lib/mongodb";
import users from "@/models/usersSchema";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const { displayName, email, uid, emailVerified, photoURL, accessToken } =
    await request.json();
  const filter = { uid: uid };
  const options = { upsert: true };
  const updateDoc = {
    displayName,
    email,
    uid,
    emailVerified,
    photoURL,
    accessToken,
  };
  await connectMongodb();
  await users.findOneAndUpdate(updateDoc, filter, options, {
    new: true,
  });
  return NextResponse.json(
    { message: "User Registered", status: true },
    { status: 201 }
  );
}
