export type CloudDictionaryData = [string, string]
export type CloudDictionaryMatcher = [RegExp, (match: string) => string]
export type PatternLikeString = string // RegExp string(non-escaped) or string
export type InternalDictionaryData = [string, PatternLikeString]
