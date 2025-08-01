// bridge/queue/taskQueue.js

const queue = [];

module.exports = {
  addTask: (task) => {
    queue.push(task);
    console.log('Task added to queue:', task.id || task.txHash);
  },
  getNextTask: () => queue.shift(),
  hasTasks: () => queue.length > 0,
  clear: () => queue.length = 0,
};
