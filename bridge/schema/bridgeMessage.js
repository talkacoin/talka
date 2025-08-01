// bridge/schema/bridgeMessage.js

/**
 * BridgeMessage schema definition.
 * Use this to validate and serialize messages between chains.
 */
module.exports = {
  type: 'object',
  required: ['txHash', 'fromChain', 'toChain', 'token', 'amount', 'recipient'],
  properties: {
    txHash: { type: 'string' },
    fromChain: { type: 'string', enum: ['TON', 'ETH', 'BSC'] },
    toChain: { type: 'string', enum: ['TON', 'ETH', 'BSC'] },
    token: { type: 'string' },
    amount: { type: 'string' },
    recipient: { type: 'string' },
    timestamp: { type: 'number' },
    signature: { type: 'string' },
  },
};
