const express = require('express');
const { body, param, validationResult } = require('express-validator');
const taskController = require('./controller');

const router = express.Router();

// Middleware untuk validasi ID
const validateId = (req, res, next) => {
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }
  next();
};

// Route untuk membuat tugas baru
router.post(
  '/tugas',
  body('judul')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Judul tugas harus diisi.'),
  body('deskripsi').optional({ nullable: true, checkFalsy: true }).trim(),
  body('selesai')
    .isBoolean()
    .withMessage('Status selesai harus berupa boolean.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'fail',
        message: 'Validasi gagal',
        errors: errors.array(),
      });
    }
    taskController.createTask(req, res, next);
  }
);

// Route untuk mengambil semua tugas
router.get('/tugas', taskController.getAllTasks);

// Route untuk mengambil satu tugas
router.get('/tugas/:id', validateId, taskController.getTaskById);

// Route untuk memperbarui tugas
router.patch(
  '/tugas/:id',
  validateId,
  body('judul')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Judul tugas harus diisi.'),
  body('deskripsi').optional({ nullable: true, checkFalsy: true }).trim(),
  body('selesai')
    .isBoolean()
    .withMessage('Status selesai harus berupa boolean.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'fail',
        message: 'Validasi gagal',
        errors: errors.array(),
      });
    }
    taskController.updateTask(req, res, next);
  }
);

// Route untuk menghapus tugas
router.delete('/tugas/:id', validateId, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'fail',
      message: 'Validasi gagal',
      errors: errors.array(),
    });
  }
  taskController.deleteTask(req, res, next);
});

module.exports = router;
