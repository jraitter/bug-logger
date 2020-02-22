import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Note = new Schema(
  {
    content: { type: String, required: false },
    reportedBy: { type: String, required: false },
    bug: { type: ObjectId, ref: "Bug" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Note;