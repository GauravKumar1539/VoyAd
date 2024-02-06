import { model, models, Schema } from "mongoose";

const UserInfoSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    accountNo: { type: String },
    ifscCode : {type:String},
    admin: { type: Boolean, default: 0},
    vehicle: {type:String},
    userType: {type: Number, default: 2, required:true},
  },
  { timestamps: true }
);

export const UserInfo = models?.UserInfo || model("UserInfo", UserInfoSchema);
