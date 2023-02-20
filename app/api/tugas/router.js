const express = require('express');
const router = express.Router();
const {
  getAllTasksHandler,
  createTaskHandler,
  getTaskByIdHandler,
  updateTaskHandler,
  deleteTaskHandler,
} = require('./controller');

router.get('/tugas', getAllTasksHandler);
router.post('/tugas', createTaskHandler);
router.get('/tugas/:id', getTaskByIdHandler);
router.patch('/tugas/:id', updateTaskHandler);
router.delete('/tuags/:id', deleteTaskHandler);

module.exports = router;
