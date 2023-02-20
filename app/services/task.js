const Task = require('../api/tugas/model');

const getAllTasks = async () => {
  const tasks = await Task.find({});
  return tasks;
};

const createTask = async (task) => {
  const newTask = new Task(task);
  await newTask.save();
  return newTask;
};

const getTaskById = async (id) => {
  const task = await Task.findById(id);
  return task;
};

const updateTask = async (id, updates) => {
  const task = await Task.findByIdAndUpdate(id, updates, { new: true });
  return task;
};

const deleteTask = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  return task;
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
