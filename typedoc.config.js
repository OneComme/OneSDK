module.exports = {
  entryPoints: ['./src/OneSDK.ts', './src/types'],
  out: 'doc',
  entryPointStrategy: 'expand',
  // readme: "./README.md",
  name: "OneSDK",
  // excludeNotDocumented: true,
  excludePrivate: true,
  disableSources: true,
  hideGenerator: true,
  cleanOutputDir: true,
  visibilityFilters: {}
}