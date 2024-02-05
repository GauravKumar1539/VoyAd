import mongoose from "mongoose";
import { User } from "../models/User";
import { UserInfo } from "../models/UserInfo";

export async function POST(req) {
  const body = await req.json();
  const pass = body.password;
  if (!pass?.length || pass.length < 5) {
    new Error("password must have atleast 5 characters");
    return false;
  }

  const unhashedPass = pass;
  const salt = genSaltSync(10);
  const hashed = hashSync(unhashedPass, salt);
  body.password = hashed;
  mongoose.connect(process.env.MONGO_URL);

  const userCreated = await User.create(body);
  await UserInfo.create(body.email);
  return Response.json(userCreated);
}
