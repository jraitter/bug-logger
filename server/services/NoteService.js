import mongoose from "mongoose";
import Note from "../models/Note.js";

//NOTE the repository is the connection to your DB at that collection
const _repository = mongoose.model("Note", Note);
class NoteService {
  async getAll() {
    // let data = await _repository.find({});
    // return data
    return await _repository.find({})
      .populate("bug", "title");
  }

  async findById(id) {
    return await _repository.findById(id);
  }
  async getByBugId(id) {
    return await _repository.find({ bug: id });
  }

  // create, from create in controller is a post
  async create(rawData) {
    return await _repository.create(rawData);
  }

  // update, from edit in controller is a put
  async update(id, update) {
    //NOTE {new: true} insures I get the object back after the change
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
  async deleteNoteById(params) {
    return await _repository.findByIdAndDelete(params.id)
  }

  async delete(id) {
    await _repository.findByIdAndDelete(id);
  }
}

const noteService = new NoteService();
export default noteService;

