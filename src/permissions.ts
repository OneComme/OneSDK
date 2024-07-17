import { SendType } from "./types/Api";

export const PERMISSION_TEMPLETE_TYPE = {
  COMMENT: 'COMMENT',
  META: 'META',
  ORDER: 'ORDER',
  REACTION: 'REACTION',
  SETLIST: 'SETLIST',
  WORDPAETY: 'WORDPAETY',
  YT_SURVEY: 'YT_SURVEY',
  CONFIG: 'CONFIG',
  SERVICE: 'SERVICE',
  USER: 'USER',
  NOTIFICATION: 'NOTIFICATION'
} as const
export type PermissionTemplateType = keyof typeof PERMISSION_TEMPLETE_TYPE
export const PERMISSIONS: {[key in  PermissionTemplateType]: SendType[]} = {
  COMMENT: ['comments', 'deleted', 'clear', 'pinned', 'bookmarked'],
  META: ['meta', 'meta.clear'],
  ORDER: ['waitingList'],
  REACTION: ['reactions'],
  SETLIST: ['setList', 'setList.request'],
  WORDPAETY: ['wp.update', 'wp.exec'],
  YT_SURVEY: ['yt.survey.start', 'yt.survey.update', 'yt.survey.finish'],
  CONFIG: ['config'],
  SERVICE: ['services'],
  USER: ['userDatas'],
  NOTIFICATION: ['notification']
} as const

export function usePermission(templateNames: PermissionTemplateType[], base: SendType[] = []): SendType[] {
  const baseSet = new Set(base)
  templateNames.forEach((name) => {
    const tmpl = PERMISSIONS[name]
    if (tmpl) {
      tmpl.forEach(type => baseSet.add(type))
    }
  }, baseSet)
  return Array.from(baseSet.values())
}