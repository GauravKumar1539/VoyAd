import { isAdmin } from "@/app/api/auth/[...nextauth]/route";
import { UserInfo } from "../models/UserInfo";
import mongoose from "mongoose";

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  if (await isAdmin()) {
    const users = await UserInfo.find();
    return Response.json(users);
  } else {
    return Response.json([]);
  }
}
