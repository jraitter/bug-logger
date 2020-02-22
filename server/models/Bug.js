import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Bug = new Schema(
  {
    closed: { type: Boolean, required: false },
    closedDate: { type: Date, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    reportedBy: { type: String, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Bug;