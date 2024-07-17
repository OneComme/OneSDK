import './lib/_common'
import { DEFAULT_CONFIG, OneSDK } from '../src/OneSDK'

test('defined', () => {
  expect(OneSDK).toBeDefined()
})
test('ready', async() => {
  const sdk = new OneSDK()
  await expect(sdk.ready()).resolves.toBeUndefined()
})
describe('initialize', () => {
  test('default value', async() => {
    const sdk = new OneSDK()
    expect(sdk.config).toEqual(DEFAULT_CONFIG)
  })
  test('absolute hostname', async() => {
    location.href = 'http://absolute/templates/basic/'
    location.hostname = 'absolute'
    const sdk = new OneSDK()
    expect(sdk.config.host).toBe('localhost')
  })
  test('ip hostname', async() => {
    location.href = 'http://127.0.0.1/templates/basic/'
    location.hostname = '127.0.0.1'
    const sdk = new OneSDK()
    expect(sdk.config.host).toBe('127.0.0.1')
  })
})
