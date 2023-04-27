const noteshtml = require('express').Router();
const {
  readFromFile,
  readAndAppend,
} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

noteshtml.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

noteshtml.post('/', (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
  
  
      res.json(`New note added successfully 🚀`);
    } else {
      res.json('Error in posting note');
    }
  });
  
  module.exports = noteshtml;
