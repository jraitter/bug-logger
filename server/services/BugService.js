import mongoose from "mongoose";
import Bug from "../models/Bug.js";

//NOTE the repository is the connection to your DB at that collection
const _repository = mongoose.model("Bug", Bug);
class BugService {
  async getAll() {
    // let data = await _repository.find({});
    // return data
    return await _repository.find({});
  }

  async findById(id) {
    return await _repository.findById(id);
  }

  // create, from create in controller is a post
  async create(rawData) {
    return await _repository.create(rawData);
  }

  // update, from edit in controller is a put
  async update(id, update) {
    let data = await _repository.findById(id)
    if (data.closed) {
      return ("This bug has already been closed")
    }
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }

  async delete(id) {
    let data = await _repository.findById(id)
    if (data.closed) {
      return ("This bug has been archived!")
    }
    let update = {
      closed: true,
      closedDate: new Date()
    }
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
}

const bugService = new BugService();
export default bugService;

