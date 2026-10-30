const WORDS_PER_MINUTE = 200
const CHARACTERS_PER_MINUTE = 1200

export function getReadingTime(content) {
  const words = content.match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu) ?? []
  const characters = content.replace(/\s/g, '').length
  const minutes = Math.max(
    words.length / WORDS_PER_MINUTE,
    characters / CHARACTERS_PER_MINUTE,
  )

  return `${Math.max(1, Math.ceil(minutes))} min read`
}
