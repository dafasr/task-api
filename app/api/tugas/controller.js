const taskService = require('../../services/task');

async function getAllTasks(req, res) {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
}

async function getTaskById(req, res) {
  const task = await taskService.getTaskById(req.params.id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
}

async function createTask(req, res) {
  const task = await taskService.createTask(req.body);
  res.status(201).json(task);
}

async function updateTask(req, res) {
  const updatedTask = await taskService.updateTask(req.params.id, req.body);
  if (!updatedTask) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(updatedTask);
}

async function deleteTask(req, res) {
  const deletedTask = await taskService.deleteTask(req.params.id);
  if (!deletedTask) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(deletedTask);
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
