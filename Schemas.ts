import mongoose, { Schema, Document, Model } from "mongoose";

export interface User extends Document {
  _id: string;
  username: string;
  password: string;
}

export const UserSchema: Schema<User> = new Schema<User>(
  {
    _id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserModel: Model<User> = mongoose.model<User>("user", UserSchema);
