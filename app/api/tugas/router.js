const express = require('express');
const router = express.Router();
const taskController = require('./controller');
const { body } = require('express-validator');

const validateId = (req, res, next) => {
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: 'ID Tidak Ada' });
  }
  next();
};

router.get('/tugas', taskController.getAllTasks);
router.get('/tugas/:id', validateId, taskController.getTaskById);
router.post(
  '/tugas',
  [
    body('judul').notEmpty().trim().escape(),
    body('deskripsi').notEmpty().trim().escape(),
    body('selesai')
      .isBoolean()
      .withMessage('Selesai harus bernilai true atau false'),
  ],
  taskController.createTask
);
router.patch(
  '/tugas/:id',
  validateId,
  [
    body('judul').notEmpty().trim().escape(),
    body('deskripsi').notEmpty().trim().escape(),
    body('selesai').isBoolean().toBoolean(),
  ],
  taskController.updateTask
);
router.delete('/tugas/:id', validateId, taskController.deleteTask);

module.exports = router;
