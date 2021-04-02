import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'

function isPreset(key: string) {
  const { fontSizes } = styli.getTheme()
  const keys = Object.keys(fontSizes) || []
  const reg = new RegExp(`^text(${keys.join('|')})$`, 'i')
  return reg.test(key)
}
export function isMatch(key: string) {
  return /^text(-.+)?$/.test(key) || isPreset(key)
}

export function textSizePropToStyle(key: string, propValue: any) {
  if (isPreset(key)) {
    const fontSizes: any = styli.getTheme().fontSizes
    const fontSizeKey = key.replace(/^text/, '').toLowerCase()
    return { fontSize: fontSizes[fontSizeKey] }
  }

  return { fontSize: propValue }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = textSizePropToStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
