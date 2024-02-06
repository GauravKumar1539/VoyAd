import {model, models, Schema} from "mongoose";

const OrderSchema = new Schema({
  userEmail: String,
  phone: String,
  postalCode: String,
  city: String,
  products: Object,
}, {timestamps: true});

export const Order = models?.Order || model('Order', OrderSchema);