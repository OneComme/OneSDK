export interface UpdateYaml {
  version: string
  path: string
  sha512: string
  releaseDate: string
  files: [
    {
      url: string
      sha512: string
      size: number
    }
  ]
}
export interface UpdateCheckResult {
  hasUpdate: boolean
  data: UpdateYaml | null
}