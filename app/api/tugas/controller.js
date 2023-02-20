const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../../services/task');

const getAllTasksHandler = async (req, res) => {
  const tasks = await getAllTasks();
  res.json(tasks);
};

const createTaskHandler = async (req, res) => {
  const { judul, deskripsi, selesai = false } = req.body;

  if (!judul) {
    res.status(400).json({ error: 'Judul is required' });
    return;
  }

  const task = await createTask({ judul, deskripsi, selesai });
  res.json(task);
};

const getTaskByIdHandler = async (req, res) => {
  const { id } = req.params;
  const task = await getTaskById(id);

  if (!task) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }

  res.json(task);
};

const updateTaskHandler = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const updatedTask = await updateTask(id, updates);

  if (!updatedTask) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }

  res.json(updatedTask);
};

const deleteTaskHandler = async (req, res) => {
  const { id } = req.params;
  const deletedTask = await deleteTask(id);

  if (!deletedTask) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }

  res.json(deletedTask);
};

module.exports = {
  getAllTasksHandler,
  createTaskHandler,
  getTaskByIdHandler,
  updateTaskHandler,
  deleteTaskHandler,
};
