const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  judul: { type: String, required: true },
  deskripsi: { type: String, default: '' },
  selesai: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
