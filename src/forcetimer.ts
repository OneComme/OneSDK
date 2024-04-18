const raf = window.requestAnimationFrame
const caf = window.cancelAnimationFrame
let index = 0
const timerMap = new Map<number, { type: 'raf' | 'timeout', id: number, callback: () => void}>()
function visibilityChanged(e: Event | CustomEvent) {
  const visible = (e instanceof CustomEvent && e.detail.visible) || document.visibilityState === 'visible'
  if (!visible) {
    const timers = Array.from(timerMap.values())
    timerMap.clear()
    timers.forEach(t => {
      if (t.type === 'raf') {
        caf(t.id)
      } else {
        clearTimeout(t.id)
      }
      t.callback()
    })
  }
}
document.addEventListener('visibilitychange', visibilityChanged)
window.addEventListener('obsstudio:visibilityChange', visibilityChanged)
window.addEventListener('obsSourceVisibleChanged', visibilityChanged)
window.requestAnimationFrame = (callback: (t: number) => void) => {
  ++index
  const i = index
  if (document.visibilityState === 'visible') {
    const id = raf((t) => {
      timerMap.delete(i)
      callback(t)
    })
    timerMap.set(index, {
      type: 'raf',
      id,
      callback: () => callback(performance.now()),
    })
  } else {
    const id =  window.setTimeout(() => {
      timerMap.delete(i)
      callback(performance.now())
    }, 16)
    timerMap.set(index, {
      type: 'timeout',
      id,
      callback: () => callback(performance.now()),
    })
  }
  return i
}
window.cancelAnimationFrame = (id: number) => {
  const t = timerMap.get(id)
  if (!t) return
  if (t.type === 'raf') {
    caf(t.id)
  } else {
    window.clearTimeout(t.id)
  }
}