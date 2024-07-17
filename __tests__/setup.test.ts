import './lib/_common'
import { DEFAULT_CONFIG, OneSDK } from '../src/OneSDK'
import { OneSDKConfig } from '../src/types/OneSDK'

describe('setup', () => {
  test('default config', async() => {
    const sdk = new OneSDK()
    sdk.setup()
    expect(sdk.config).toEqual(DEFAULT_CONFIG)
  })
  test('overwrite config by params', async() => {
    const sdk = new OneSDK()
    const overwriteConf: OneSDKConfig = {
      protocol: 'ws',
      port: 11181,
      host: '127.0.0.1',
      pathname: '/templates/chat/',
      mode: 'all',
      disabledDelay: false,
      intervalTime: 5000,
      maxQueueInterval: 150,
      reconnectInterval: 5000,
      commentLimit: 100,
      requestInterval: 1500,
      includes: ['youtube', 'twicas'],
      excludes: ['bilibili', 'niconama'],
      includeIds: ['1234', '5678'],
      excludeIds: ['abcd', 'efgh'],
      includeNames: ['あああ', 'いいい'],
      excludeNames: ['ううう', 'えええ'],
      lifeTime: 20000,
      permissions: null
    }
    sdk.setup(overwriteConf)
    expect(sdk.config).toEqual(overwriteConf)
  })
  test('overwrite config by css variables', async() => {
    const sdk = new OneSDK()
    const style = window.document.createElement('style')
    style.innerHTML = `
      :root{
        --one-sdk-protocol: ws;
        --one-sdk-host: 127.0.0.1;
        --one-sdk-pathname: /templates/chat/;
        --one-sdk-port: 11181;
        --one-sdk-includes: "youtube", "twicas";
        --one-sdk-excludes: "bilibili", "niconama";
        --one-sdk-include-ids: "1234", "5678";
        --one-sdk-exclude-ids: "abcd", "efgh";
        --one-sdk-include-names: "あああ", "いいい";
        --one-sdk-exclude-names: "ううう", "えええ";
        --one-sdk-life-time: 20000;
        --one-sdk-permissions: "comments", "reactions";
      }
    `
    window.document.head.appendChild(style)
    sdk.setup()
    expect(sdk.config).toEqual({
      protocol: 'ws',
      port: 11181,
      host: '127.0.0.1',
      pathname: '/templates/chat/',
      /* not supported */
      mode: 'all',
      disabledDelay: false,
      intervalTime: 5000,
      maxQueueInterval: 150,
      reconnectInterval: 5000,
      commentLimit: 100,
      requestInterval: 1500,
      /* /not supported */
      includes: ['youtube', 'twicas'],
      excludes: ['bilibili', 'niconama'],
      includeIds: ['1234', '5678'],
      excludeIds: ['abcd', 'efgh'],
      includeNames: ['あああ', 'いいい'],
      excludeNames: ['ううう', 'えええ'],
      lifeTime: 20000,
      permissions: ['comments', 'reactions'],
    })
  })
  test('overwrite config by searchParams', async() => {
    const searchParams = new URLSearchParams([
      ['protocol', 'ws'],
      ['host', '127.0.0.1'],
      ['pathname', '/templates/chat/'],
      ['port', '11181'],
      ['includes', 'youtube'],
      ['includes', 'twicas'],
      ['excludes', 'bilibili'],
      ['excludes', 'niconama'],
      ['includeIds', '1234'],
      ['includeIds', '5678'],
      ['excludeIds', 'abcd'],
      ['excludeIds', 'efgh'],
      ['includeNames', 'あああ'],
      ['includeNames', 'いいい'],
      ['excludeNames', 'ううう'],
      ['excludeNames', 'えええ'],
      ['lifeTime', '20000'],
      ['permissions', 'comments'],
      ['permissions', 'reactions'],
    ])
    location.href = `http://localhost:11180/templates/basic/?${searchParams.toString()}`
    const sdk = new OneSDK()
    sdk.setup()
    expect(sdk.config).toEqual({
      protocol: 'ws',
      port: 11181,
      host: '127.0.0.1',
      pathname: '/templates/chat/',
      /* not supported */
      mode: 'all',
      disabledDelay: false,
      intervalTime: 5000,
      maxQueueInterval: 150,
      reconnectInterval: 5000,
      commentLimit: 100,
      requestInterval: 1500,
      /* /not supported */
      includes: ['youtube', 'twicas'],
      excludes: ['bilibili', 'niconama'],
      includeIds: ['1234', '5678'],
      excludeIds: ['abcd', 'efgh'],
      includeNames: ['あああ', 'いいい'],
      excludeNames: ['ううう', 'えええ'],
      lifeTime: 20000,
      permissions: ['comments', 'reactions'],
    })
  })
  test('insert css link', async() => {
    const cssUrl = 'http://localhost/test.css'
    const searchParams = new URLSearchParams([
      ['css', encodeURIComponent(cssUrl)],
    ])
    location.href = `http://localhost:11180/templates/basic/?${searchParams.toString()}`
    const sdk = new OneSDK()
    sdk.setup()
    expect(document.head.querySelector(`link[href="${cssUrl}"`)).toBeDefined()
  })
  test('insert css strings', async() => {
    const css = `:root {--one-sdk-protocol: local;}`
    const searchParams = new URLSearchParams([
      ['style', css],
    ])
    location.href = `http://localhost:11180/templates/basic/?${searchParams.toString()}`
    const sdk = new OneSDK()
    sdk.setup()
    expect(sdk.config.protocol).toBe('local')
  })
})