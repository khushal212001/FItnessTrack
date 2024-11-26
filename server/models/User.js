import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
    },
    weight: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
