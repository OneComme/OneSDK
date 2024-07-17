export interface BackupTarget {
  type: string
  name: string
  path: string
}
export interface BackupFile {
  path: string
  name: string
  mtime: number
}
