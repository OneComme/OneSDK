import './lib/_common'
import { OneSDK } from '../src/OneSDK'
import { Subscriber } from '../src/types/OneSDK'
import { createYouTubeComment } from './lib/_util'

describe('subscribe / unsubscribe', () => {
  test('subscribe', () => {
    const sdk = new OneSDK()
    sdk.setup()
    const callback = jest.fn()
    const subscriber: Subscriber = {
      action: 'comments',
      callback
    }
    const id = sdk.subscribe(subscriber)
    expect(id).toBe(1)
    expect((sdk as any)._subscribers.size).toBe(1)
    expect((sdk as any)._subscribers.get(id)).toBe(subscriber)
  })
  test('unsubscribe', () => {
    const sdk = new OneSDK()
    sdk.setup()
    const callback = jest.fn()
    const subscriber: Subscriber = {
      action: 'comments',
      callback
    }
    const id = sdk.subscribe(subscriber)
    sdk.unsubscribe(id)
    expect((sdk as any)._subscribers.size).toBe(0)
  })
  test('publish', () => {
    const sdk = new OneSDK()
    sdk.setup()
    const responseData = [createYouTubeComment()]
    const callback = jest.fn((data: any) => {
      expect(data).toEqual(responseData)
    })
    const subscriber: Subscriber = {
      action: 'comments',
      callback
    }
    sdk.subscribe(subscriber)
    ;(sdk as any)._publish('comments', responseData)
    ;(sdk as any)._publish('config', {})
    ;(sdk as any)._publish('comments', responseData)
    expect(callback).toHaveBeenCalledTimes(2)
  })
})
describe('filter', () => {
  test('includes filter', () => {
    const sdk = new OneSDK()
    sdk.setup()
    expect(sdk.config.includes).toBe(null)
    const comment = createYouTubeComment()
    const comments = (sdk as any)._filterComment([comment])
    expect(comments.length).toBe(1)
  })
})