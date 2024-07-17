import './lib/_common'
import { OneSDK } from '../src/OneSDK'

describe('usePermissions', () => {
  test('use template', () => {
    const sdk = new OneSDK()
    sdk.setup({
      permissions: sdk.usePermission([sdk.PERM.COMMENT])
    })
    expect(sdk.config.permissions).toEqual(['comments', 'deleted', 'clear', 'pinned', 'bookmarked'])
  })
  test('use multiple template', () => {
    const sdk = new OneSDK()
    sdk.setup({
      permissions: sdk.usePermission([sdk.PERM.COMMENT, sdk.PERM.META])
    })
    expect(sdk.config.permissions).toEqual(['comments', 'deleted', 'clear', 'pinned', 'bookmarked', 'meta', 'meta.clear'])
  })
  test('use template and base type', () => {
    const sdk = new OneSDK()
    sdk.setup({
      permissions: sdk.usePermission([sdk.PERM.COMMENT], ['config'])
    })
    expect(sdk.config.permissions).toEqual(['config', 'comments', 'deleted', 'clear', 'pinned', 'bookmarked'])
  })
})