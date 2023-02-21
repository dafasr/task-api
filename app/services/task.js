const Task = require('../api/tugas/model');

async function getAllTasks() {
  const tasks = await Task.find({});
  return tasks;
}

async function getTaskById(id) {
  const task = await Task.findById(id);
  return task;
}

async function createTask(task) {
  const createdTask = await Task.create(task);
  return createdTask;
}

async function updateTask(id, update) {
  const updatedTask = await Task.findByIdAndUpdate(id, update, { new: true });
  return updatedTask;
}

async function deleteTask(id) {
  const deletedTask = await Task.findByIdAndDelete(id);
  return deletedTask;
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
