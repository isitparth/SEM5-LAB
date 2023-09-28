// CURD :-
// GET(read)  POST(create)  PUT(update)  DELETE(delete)

const express = require("express");
const router = express.Router();

const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");

router.get('/', getToDo);

router.post('/save', saveToDo);

router.post("/update", updateToDo);

router.post("/delete", deleteToDo);

module.exports = router;