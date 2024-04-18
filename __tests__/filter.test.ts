import './lib/_common'
import { OneSDK } from '../src/OneSDK'
import { createTwitchComment, createYouTubeComment } from './lib/_util'

describe('filter', () => {
  test('no filter', () => {
    const sdk = new OneSDK()
    sdk.setup()
    const comments = [createTwitchComment(), createYouTubeComment()]
    const filtered = (sdk as any)._filterComment(comments)
    expect(filtered.length).toBe(2)
  })
  test('includes filter', () => {
    const sdk = new OneSDK()
    sdk.setup({
      includes: ['youtube']
    })
    const comments = [createTwitchComment(), createYouTubeComment()]
    const filtered = (sdk as any)._filterComment(comments)
    expect(filtered.length).toBe(1)
    expect(filtered[0].service).toBe('youtube')
  })
  test('excludes filter', () => {
    const sdk = new OneSDK()
    sdk.setup({
      excludes: ['youtube']
    })
    const comments = [createTwitchComment(), createYouTubeComment()]
    const filtered = (sdk as any)._filterComment(comments)
    expect(filtered.length).toBe(1)
    expect(filtered[0].service).toBe('twitch')
  })
  test('includeNames filter', () => {
    const sdk = new OneSDK()
    sdk.setup({
      includeNames: ['hoge']
    })
    const comments = [createTwitchComment(), createYouTubeComment()]
    comments[0].name = 'hoge'
    comments[1].name = 'fuga'
    const filtered = (sdk as any)._filterComment(comments)
    expect(filtered.length).toBe(1)
    expect(filtered[0].name).toBe('hoge')
  })
  test('excludeNames filter', () => {
    const sdk = new OneSDK()
    sdk.setup({
      excludeNames: ['hoge']
    })
    const comments = [createTwitchComment(), createYouTubeComment()]
    comments[0].name = 'hoge'
    comments[1].name = 'fuga'
    const filtered = (sdk as any)._filterComment(comments)
    expect(filtered.length).toBe(1)
    expect(filtered[0].name).toBe('fuga')
  })
  test('includeIds filter', () => {
    const sdk = new OneSDK()
    sdk.setup({
      includeIds: ['hoge']
    })
    const comments = [createTwitchComment(), createYouTubeComment()]
    comments[0].id = 'hoge'
    comments[1].id = 'fuga'
    const filtered = (sdk as any)._filterComment(comments)
    expect(filtered.length).toBe(1)
    expect(filtered[0].id).toBe('hoge')
  })
  test('excludeIds filter', () => {
    const sdk = new OneSDK()
    sdk.setup({
      excludeIds: ['hoge']
    })
    const comments = [createTwitchComment(), createYouTubeComment()]
    comments[0].id = 'hoge'
    comments[1].id = 'fuga'
    const filtered = (sdk as any)._filterComment(comments)
    expect(filtered.length).toBe(1)
    expect(filtered[0].id).toBe('fuga')
  })
})