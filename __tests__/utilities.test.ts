import './lib/_common'
import { OneSDK } from '../src/OneSDK'
import { createYouTubeComment } from './lib/_util'
describe('utility', () => {
  test('getStyleVariable', async() => {
    const style = window.document.createElement('style')
    style.innerHTML = `:root {--one-test-value: hoge; --one-test-number: 5; --one-test-boolean: true; --one-test-boolean-false: false;}`
    window.document.head.appendChild(style)
    const sdk = new OneSDK()
    sdk.setup()
    expect(sdk.getStyleVariable('--one-test-value', 'none')).toBe('hoge')
    expect(sdk.getStyleVariable('--one-test-value2', 'none')).toBe('none')
    expect(sdk.getStyleVariable('--one-test-number', '0')).toBe('5')
    expect(sdk.getStyleVariable('--one-test-number', 0, parseInt)).toBe(5)
    expect(sdk.getStyleVariable('--one-test-number2', 0, parseInt)).toBe(0)
    expect(sdk.getStyleVariable('--one-test-boolean', false, (val: string) => val === 'true')).toBe(true)
    expect(sdk.getStyleVariable('--one-test-boolean-false', false, (val: string) => val === 'true')).toBe(false)
    window.document.head.removeChild(style)
  })

  test('getCommentStyle', async() => {
    
    const sdk = new OneSDK()
    sdk.setup()
    let comment = createYouTubeComment()    
    expect(sdk.getCommentStyle(comment)).toEqual({})

    comment = createYouTubeComment()  
    comment.data.isMember = true
    expect(sdk.getCommentStyle(comment)).toEqual({
      '--lcv-membership-color': '#2ba640'
    })
    
    comment = createYouTubeComment()
    comment.data.colors = {
      headerBackgroundColor: '#000',
      headerTextColor: '#001',
      bodyBackgroundColor: '#002',
      bodyTextColor: '#003',
      authorNameTextColor: '#004',
      timestampColor: '#005',
    }
    expect(sdk.getCommentStyle(comment)).toEqual({
      '--lcv-background-color': '#002',
      '--lcv-text-color': '#003',
      '--lcv-comment-shadow': 'none'
    })
    comment.data.isMember = true
    expect(sdk.getCommentStyle(comment)).toEqual({
      '--lcv-background-color': '#002',
      '--lcv-text-color': '#003',
      '--lcv-comment-shadow': 'none',
      '--lcv-membership-color': '#2ba640'
    })
  })
})
