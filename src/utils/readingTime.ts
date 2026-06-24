/**
 * Calculate reading time for Chinese text.
 * Chinese reading speed: ~400 characters per minute.
 * Falls back to ~200 words per minute for English/latin text.
 */
export function readingTime(text: string): number {
  // Count Chinese characters
  const chineseChars = (text.match(/[一-鿿㐀-䶿]/g) || []).length;
  // Count English/other words
  const englishWords = text
    .replace(/[一-鿿㐀-䶿]/g, '')
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.ceil(chineseChars / 400 + englishWords / 200);
  return Math.max(1, minutes);
}

/** Count total Chinese characters in a string. */
export function charCount(text: string): number {
  return (text.match(/[一-鿿㐀-䶿]/g) || []).length;
}
