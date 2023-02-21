const express = require('express');
const router = express.Router();
const taskController = require('./controller');

// Middleware untuk validasi ID
const validateId = (req, res, next) => {
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: 'ID Tidak Ada' });
  }
  next();
};

router.get('/tugas', taskController.getAllTasks);
router.get('/tugas/:id', validateId, taskController.getTaskById);
router.post('/tugas', taskController.createTask);
router.patch('/tugas/:id', validateId, taskController.updateTask);
router.delete('/tugas/:id', validateId, taskController.deleteTask);

module.exports = router;
