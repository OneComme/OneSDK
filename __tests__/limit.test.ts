import './lib/_common'
import { DEFAULT_CONFIG, OneSDK } from '../src/OneSDK'
import { OneSDKConfig } from '../src/types/OneSDK'
let index = 0
function createDummy() {
  const id = String(Date.now()) + String(Math.floor(Math.random() * 1000))
  index++
  return {
    "id": "xxxxxxxxxxxxxxxxxxx",
    "service": "youtube",
    "name": "#",
    "url": "",
    "color": {
      "r": 61,
      "g": 16,
      "b": 255
    },
    "data": {
      "id": id,
      "userId": id,
      "screenName": id,
      "liveId": "aaaaaa",
      "name": id,
      "isOwner": false,
      "isSupporter": false,
      "hasGift": false,
      "profileImage": "",
      "badges": [
        {
          "label": "P",
          "url": ""
        }
      ],
      "timestamp": new Date().toISOString(),
      "anonymity": false,
      "comment": id,
      "no": index,
      "premium": true,
      "origin": {},
      "displayName": id,
      "originalProfileImage": "",
      "meta": {},
      "isFirstTime": true,
      "isRepeater": true
    },
    "meta": {
      "no": index,
      "tc": index,
      "lc": index,
      "interval": 82737829
    }
  }
}
describe('limit', () => {
  test('stock', async() => {
    const sdk: any = new OneSDK()
    sdk.setup({
      commentLimit: 3
    })
    sdk._saveComment(createDummy())
    sdk._saveComment(createDummy())
    sdk._saveComment(createDummy())
    expect(sdk._commentMap.size).toEqual(3)
    sdk._saveComment(createDummy())
    sdk._saveComment(createDummy())
    expect(sdk._commentMap.size).toEqual(5)
    sdk._saveComment(createDummy())
    expect(sdk._commentMap.size).toEqual(6)
  })
  test('stock', async() => {
    const sdk: any = new OneSDK()
    sdk.setup({
      commentLimit: 3
    })
    const comments = [
      createDummy(),
      createDummy(),
      createDummy(),
      createDummy(),
      createDummy()
    ]
    let step = 0
    sdk._publish = jest.fn((_, cmts) => {
      expect(cmts.length).toEqual(3)
      if (step === 0) {
        expect(cmts[0]).toEqual(comments[0])
        expect(cmts[1]).toEqual(comments[1])
        expect(cmts[2]).toEqual(comments[2])
      } else if (step === 1) {
        expect(cmts[0]).toEqual(comments[2])
        expect(cmts[1]).toEqual(comments[3])
        expect(cmts[2]).toEqual(comments[4])
      }
      step++
    })
    expect(sdk._commentMap.size).toEqual(0)
    
    sdk._saveComment(comments[0])
    sdk._saveComment(comments[1])
    sdk._saveComment(comments[2])
    sdk._sendComments()
    expect(sdk._commentMap.size).toEqual(3)
    sdk._saveComment(comments[3])
    sdk._saveComment(comments[4])
    sdk._sendComments()
    expect(sdk._commentMap.size).toEqual(3)

    const list = Array.from(sdk._commentMap.values())
    expect(list[0]).toEqual(comments[2])
    expect(list[1]).toEqual(comments[3])
    expect(list[2]).toEqual(comments[4])
  })
})