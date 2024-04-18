import './lib/_common'
import { OneSDK } from '../src/OneSDK'

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
    expect(sdk.config).toEqual({
      protocol: 'local',
      port: 11180,
      host: 'localhost',
      pathname: '',
      mode: 'all',
      disabledDelay: false,
      intervalTime: 5000,
      maxQueueInterval: 150,
      reconnectInterval: 5000,
      commentLimit: 100,
      requestInterval: 1500,
      includes: null,
      excludes: null,
      includeIds: null,
      excludeIds: null,
      includeNames: null,
      excludeNames: null,
      lifeTime: Infinity,
    })
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
