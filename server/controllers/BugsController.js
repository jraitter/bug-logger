import express from "express";
import BugService from "../services/BugService.js";
import NoteService from "../services/NoteService.js";

export default class BugsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/Notes", this.getNoteByBugId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id/notes/:id", this.deleteNote)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await BugService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  // getById is a get
  async getById(req, res, next) {
    try {
      let data = await BugService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getNoteByBugId(req, res, next) {
    try {
      let data = await NoteService.getByBugId(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  // create is a post
  async create(req, res, next) {
    try {
      let data = await BugService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  // edit is a put
  async edit(req, res, next) {
    try {
      let data = await BugService.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  // deleteNote is a delete
  async deleteNote(req, res, next) {
    try {
      // await BugService.delete(req.params.id);
      let data = await NoteService.deleteNoteById(req.params);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let data = await BugService.delete(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
