import { expect, test } from 'vitest'

import * as actions from './actions.js'

test('exports', () => {
  expect(Object.keys(actions)).toMatchInlineSnapshot(`
    [
      "call",
      "connect",
      "deployContract",
      "disconnect",
      "estimateFeesPerGas",
      "estimateGas",
      "estimateMaxPriorityFeePerGas",
      "getAccount",
      "getBalance",
      "fetchBalance",
      "getBlock",
      "getBlockNumber",
      "fetchBlockNumber",
      "getBlockTransactionCount",
      "getBytecode",
      "getCallsStatus",
      "getCapabilities",
      "getChainId",
      "getChains",
      "getClient",
      "getConnections",
      "getConnectorClient",
      "getConnectors",
      "getEnsAddress",
      "fetchEnsAddress",
      "getEnsAvatar",
      "fetchEnsAvatar",
      "getEnsName",
      "fetchEnsName",
      "getEnsResolver",
      "fetchEnsResolver",
      "getEnsText",
      "getFeeHistory",
      "getGasPrice",
      "getProof",
      "getPublicClient",
      "getStorageAt",
      "getToken",
      "fetchToken",
      "getTransaction",
      "fetchTransaction",
      "getTransactionConfirmations",
      "getTransactionCount",
      "getTransactionReceipt",
      "getWalletClient",
      "multicall",
      "prepareTransactionRequest",
      "readContract",
      "readContracts",
      "reconnect",
      "sendCalls",
      "sendTransaction",
      "showCallsStatus",
      "signMessage",
      "signTypedData",
      "simulateContract",
      "switchAccount",
      "switchChain",
      "switchNetwork",
      "verifyMessage",
      "verifyTypedData",
      "waitForCallsStatus",
      "waitForTransactionReceipt",
      "waitForTransaction",
      "watchAccount",
      "watchAsset",
      "watchBlockNumber",
      "watchBlocks",
      "watchChainId",
      "watchClient",
      "watchConnections",
      "watchConnectors",
      "watchContractEvent",
      "watchPendingTransactions",
      "watchPublicClient",
      "writeContract",
    ]
  `)
})
