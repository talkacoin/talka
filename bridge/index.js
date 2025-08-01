// bridge/index.js

const WebSocket = require('ws');
const Ajv = require('ajv');
const bridgeSchema = require('./schema/bridgeMessage');
const queue = require('./queue/taskQueue');

const ajv = new Ajv();
const validate = ajv.compile(bridgeSchema);

const ws = new WebSocket('wss://bridge.example.com/events');

ws.on('open', () => {
  console.log('[Bridge] Connected to event source');
});

ws.on('message', (data) => {
  try {
    const message = JSON.parse(data);
    if (validate(message)) {
      queue.addTask(message);
    } else {
      console.error('[Bridge] Invalid message:', validate.errors);
    }
  } catch (err) {
    console.error('[Bridge] JSON parse error:', err.message);
  }
});
