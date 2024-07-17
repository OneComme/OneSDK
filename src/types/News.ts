export interface NewsResponse {
  id: string
  createAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
}
export interface NewsData {
  isNew: boolean
  contents: NewsResponse | null
}
