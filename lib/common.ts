export type Bot = (event: MessageEvent) => void

export function decipherString (str: string) {
  return [...str]
    .map(char => CIPHER_TABLE[char] || char)
    .join('')
}

export function sendMessage (message: string) {
  window.MPP.chat.send(message)
}

export async function sleep (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function trimDoubleSpace (str: string) {
  return str.replace(/\s+/g, ' ')
}

export function trimWhitespace (str: string) {
  return str.replace(/\u034F/gu, '')
}

const CIPHER_TABLE : {[specialChar: string]: string} = {
  '\u237A': 'a',
  ａ: 'a',
  ɑ: 'a',
  α: 'a',
  а: 'a',
  Ƅ: 'b',
  Ь: 'b',
  Ꮟ: 'b',
  ᑲ: 'b',
  ᖯ: 'b',
  ｃ: 'c',
  ⅽ: 'c',
  ᴄ: 'c',
  ϲ: 'c',
  ⲥ: 'c',
  с: 'c',
  ꮯ: 'c',
  ⅾ: 'd',
  ⅆ: 'd',
  ԁ: 'd',
  Ꮷ: 'd',
  ᑯ: 'd',
  ꓒ: 'd',
  ℮: 'e',
  ｅ: 'e',
  ℯ: 'e',
  ⅇ: 'e',
  ꬲ: 'e',
  е: 'e',
  ҽ: 'e',
  ꬵ: 'f',
  ꞙ: 'f',
  ſ: 'f',
  ẝ: 'f',
  ք: 'f',
  ｇ: 'g',
  ℊ: 'g',
  ɡ: 'g',
  ᶃ: 'g',
  ƍ: 'g',
  ց: 'g',
  ｈ: 'h',
  ℎ: 'h',
  һ: 'h',
  հ: 'h',
  Ꮒ: 'h',
  '\u02DB': 'i',
  '\u2373': 'i',
  ｉ: 'i',
  ⅰ: 'i',
  ℹ: 'i',
  ⅈ: 'i',
  ı: 'i',
  ɪ: 'i',
  ɩ: 'i',
  ι: 'i',
  ι: 'i',
  ͺ: 'i',
  і: 'i',
  ꙇ: 'i',
  ӏ: 'i',
  ꭵ: 'i',
  Ꭵ: 'i',
  ｊ: 'j',
  ⅉ: 'j',
  ϳ: 'j',
  ј: 'j',
  '\u05C0': 'l',
  '\u007C': 'l',
  '\u2223': 'l',
  '\u23FD': 'l',
  '\uFFE8': 'l',
  1: 'l',
  '\u0661': 'l',
  '\u06F1': 'l',
  I: 'l',
  Ｉ: 'l',
  Ⅰ: 'l',
  ℐ: 'l',
  ℑ: 'l',
  Ɩ: 'l',
  ｌ: 'l',
  ⅼ: 'l',
  ℓ: 'l',
  ǀ: 'l',
  Ι: 'l',
  Ⲓ: 'l',
  І: 'l',
  Ӏ: 'l',
  ו: 'l',
  ן: 'l',
  ا: 'l',
  ﺎ: 'l',
  ﺍ: 'l',
  ߊ: 'l',
  ⵏ: 'l',
  ᛁ: 'l',
  ꓲ: 'l',
  ո: 'n',
  ռ: 'n',
  '\u0C02': 'o',
  '\u0C82': 'o',
  '\u0D02': 'o',
  '\u0D82': 'o',
  '\u0966': 'o',
  '\u0A66': 'o',
  '\u0AE6': 'o',
  '\u0BE6': 'o',
  '\u0C66': 'o',
  '\u0CE6': 'o',
  '\u0D66': 'o',
  '\u0E50': 'o',
  '\u0ED0': 'o',
  '\u1040': 'o',
  '\u0665': 'o',
  '\u06F5': 'o',
  ｏ: 'o',
  ℴ: 'o',
  ᴏ: 'o',
  ᴑ: 'o',
  ꬽ: 'o',
  ο: 'o',
  σ: 'o',
  ⲟ: 'o',
  о: 'o',
  ჿ: 'o',
  օ: 'o',
  ס: 'o',
  ه: 'o',
  ﻫ: 'o',
  ﻬ: 'o',
  ﻪ: 'o',
  ﻩ: 'o',
  ھ: 'o',
  ﮬ: 'o',
  ﮭ: 'o',
  ﮫ: 'o',
  ﮪ: 'o',
  ہ: 'o',
  ﮨ: 'o',
  ﮩ: 'o',
  ﮧ: 'o',
  ﮦ: 'o',
  ە: 'o',
  ഠ: 'o',
  ဝ: 'o',
  '\u2374': 'p',
  ｐ: 'p',
  ρ: 'p',
  ϱ: 'p',
  ⲣ: 'p',
  р: 'p',
  ԛ: 'q',
  գ: 'q',
  զ: 'q',
  ꭇ: 'r',
  ꭈ: 'r',
  ᴦ: 'r',
  ⲅ: 'r',
  г: 'r',
  ꮁ: 'r',
  ｓ: 's',
  ꜱ: 's',
  ƽ: 's',
  ѕ: 's',
  ꮪ: 's',
  ꞟ: 'u',
  ᴜ: 'u',
  ꭎ: 'u',
  ꭒ: 'u',
  ʋ: 'u',
  υ: 'u',
  ս: 'u',
  '\u2228': 'v',
  '\u22C1': 'v',
  ｖ: 'v',
  ⅴ: 'v',
  ᴠ: 'v',
  ν: 'v',
  ѵ: 'v',
  ט: 'v',
  ꮩ: 'v',
  ɯ: 'w',
  ᴡ: 'w',
  ѡ: 'w',
  ԝ: 'w',
  ա: 'w',
  ꮃ: 'w',
  '\u166E': 'x',
  '\u00D7': 'x',
  '\u292B': 'x',
  '\u292C': 'x',
  '\u2A2F': 'x',
  ｘ: 'x',
  ⅹ: 'x',
  х: 'x',
  ᕁ: 'x',
  ᕽ: 'x',
  ɣ: 'y',
  ᶌ: 'y',
  ｙ: 'y',
  ʏ: 'y',
  ỿ: 'y',
  ꭚ: 'y',
  γ: 'y',
  ℽ: 'y',
  у: 'y',
  ү: 'y',
  ყ: 'y',
  ᴢ: 'z',
  ꮓ: 'z',
  Ａ: 'A',
  Α: 'A',
  А: 'A',
  Ꭺ: 'A',
  ᗅ: 'A',
  ꓮ: 'A',
  Ｂ: 'B',
  ℬ: 'B',
  Ꞵ: 'B',
  Β: 'B',
  В: 'B',
  Ᏼ: 'B',
  ᗷ: 'B',
  ꓐ: 'B',
  Ｃ: 'C',
  Ⅽ: 'C',
  ℂ: 'C',
  ℭ: 'C',
  Ϲ: 'C',
  Ⲥ: 'C',
  С: 'C',
  Ꮯ: 'C',
  ꓚ: 'C',
  Ⅾ: 'D',
  ⅅ: 'D',
  Ꭰ: 'D',
  ᗞ: 'D',
  ᗪ: 'D',
  ꓓ: 'D',
  '\u22FF': 'E',
  Ｅ: 'E',
  ℰ: 'E',
  Ε: 'E',
  Е: 'E',
  ⴹ: 'E',
  Ꭼ: 'E',
  ꓰ: 'E',
  ℱ: 'F',
  Ꞙ: 'F',
  Ϝ: 'F',
  ᖴ: 'F',
  ꓝ: 'F',
  Ԍ: 'G',
  Ꮐ: 'G',
  Ᏻ: 'G',
  ꓖ: 'G',
  Ｈ: 'H',
  ℋ: 'H',
  ℌ: 'H',
  ℍ: 'H',
  Η: 'H',
  Ⲏ: 'H',
  Н: 'H',
  Ꮋ: 'H',
  ᕼ: 'H',
  ꓧ: 'H',
  Ｊ: 'J',
  Ʝ: 'J',
  Ϳ: 'J',
  Ј: 'J',
  Ꭻ: 'J',
  ᒍ: 'J',
  ꓙ: 'J',
  K: 'K',
  Ｋ: 'K',
  Κ: 'K',
  Ⲕ: 'K',
  К: 'K',
  Ꮶ: 'K',
  ᛕ: 'K',
  ꓗ: 'K',
  Ⅼ: 'L',
  ℒ: 'L',
  Ⳑ: 'L',
  Ꮮ: 'L',
  ᒪ: 'L',
  ꓡ: 'L',
  Ｍ: 'M',
  Ⅿ: 'M',
  ℳ: 'M',
  Μ: 'M',
  Ϻ: 'M',
  Ⲙ: 'M',
  М: 'M',
  Ꮇ: 'M',
  ᗰ: 'M',
  ᛖ: 'M',
  ꓟ: 'M',
  Ｎ: 'N',
  ℕ: 'N',
  Ν: 'N',
  Ⲛ: 'N',
  ꓠ: 'N',
  0: 'O',
  '\u07C0': 'O',
  '\u09E6': 'O',
  '\u0B66': 'O',
  〇: 'O',
  Ｏ: 'O',
  Ο: 'O',
  Ⲟ: 'O',
  О: 'O',
  Օ: 'O',
  ⵔ: 'O',
  ዐ: 'O',
  ଠ: 'O',
  ꓳ: 'O',
  Ｐ: 'P',
  ℙ: 'P',
  Ρ: 'P',
  Ⲣ: 'P',
  Р: 'P',
  Ꮲ: 'P',
  ᑭ: 'P',
  ꓑ: 'P',
  ℚ: 'Q',
  ⵕ: 'Q',
  ℛ: 'R',
  ℜ: 'R',
  ℝ: 'R',
  Ʀ: 'R',
  Ꭱ: 'R',
  Ꮢ: 'R',
  ᖇ: 'R',
  ꓣ: 'R',
  Ｓ: 'S',
  Ѕ: 'S',
  Տ: 'S',
  Ꮥ: 'S',
  Ꮪ: 'S',
  ꓢ: 'S',
  '\u22A4': 'T',
  '\u27D9': 'T',
  Ｔ: 'T',
  Τ: 'T',
  Ⲧ: 'T',
  Т: 'T',
  Ꭲ: 'T',
  ꓔ: 'T',
  '\u222A': 'U',
  '\u22C3': 'U',
  Ս: 'U',
  ሀ: 'U',
  ᑌ: 'U',
  ꓴ: 'U',
  '\u0667': 'V',
  '\u06F7': 'V',
  Ⅴ: 'V',
  Ѵ: 'V',
  ⴸ: 'V',
  Ꮩ: 'V',
  ᐯ: 'V',
  ꛟ: 'V',
  ꓦ: 'V',
  Ԝ: 'W',
  Ꮃ: 'W',
  Ꮤ: 'W',
  ꓪ: 'W',
  '\u166D': 'X',
  '\u2573': 'X',
  Ｘ: 'X',
  Ⅹ: 'X',
  Ꭓ: 'X',
  Χ: 'X',
  Ⲭ: 'X',
  Х: 'X',
  ⵝ: 'X',
  ᚷ: 'X',
  ꓫ: 'X',
  Ｙ: 'Y',
  Υ: 'Y',
  ϒ: 'Y',
  Ⲩ: 'Y',
  У: 'Y',
  Ү: 'Y',
  Ꭹ: 'Y',
  Ꮍ: 'Y',
  ꓬ: 'Y',
  Ｚ: 'Z',
  ℤ: 'Z',
  ℨ: 'Z',
  Ζ: 'Z',
  Ꮓ: 'Z',
  ꓜ: 'Z',
  '\u2028': ' ',
  '\u2029': ' ',
  '\u1680': ' ',
  '\u2000': ' ',
  '\u2001': ' ',
  '\u2002': ' ',
  '\u2003': ' ',
  '\u2004': ' ',
  '\u2005': ' ',
  '\u2006': ' ',
  '\u2008': ' ',
  '\u2009': ' ',
  '\u200A': ' ',
  '\u205F': ' ',
  '\u00A0': ' ',
  '\u2007': ' ',
  '\u202F': ' '
}