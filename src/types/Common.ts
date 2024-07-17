export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>
}
export type valueOf<T> = T[keyof T]
