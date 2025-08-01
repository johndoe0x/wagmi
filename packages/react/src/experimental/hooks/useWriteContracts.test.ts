import { connect, disconnect } from '@wagmi/core'
import { abi, address, config } from '@wagmi/test'
import { renderHook } from '@wagmi/test/react'
import { expect, test, vi } from 'vitest'

import { useWriteContracts } from './useWriteContracts.js'

const connector = config.connectors[0]!

test('default', async () => {
  await connect(config, { connector })

  const { result } = await renderHook(() => useWriteContracts())

  result.current.writeContracts({
    contracts: [
      {
        abi: abi.wagmiMintExample,
        address: address.wagmiMintExample,
        functionName: 'mint',
      },
      {
        abi: abi.wagmiMintExample,
        address: address.wagmiMintExample,
        functionName: 'mint',
      },
      {
        abi: abi.wagmiMintExample,
        address: address.wagmiMintExample,
        functionName: 'mint',
      },
    ],
  })
  await vi.waitUntil(() => result.current.isSuccess, 5_000)

  expect(result.current.data).toMatchInlineSnapshot(
    `
    {
      "id": "0x8913636bd97cf4bcc0a6343c730905a27ead0f7480ff82190072e916439eb212",
    }
  `,
  )

  await disconnect(config, { connector })
})
