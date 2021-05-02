import { Bot, decipherString, sendMessage, sleep, trimDoubleSpace, trimWhitespace } from '../lib/common'

let bot: Bot | undefined

function createBot (delayMs: number): Bot {
  return async function (event: MessageEvent) {
    const { data } = event
    if (typeof data === 'string') {
      const msg = JSON.parse(data)[0]
      if (msg.p?.name === 'Theta [=help]' && msg.p?.bot === true) {
        const text = trimDoubleSpace(decipherString(trimWhitespace(msg.a)))
        if (
          text.includes('Type') &&
          text.includes('[') &&
          text.includes(']')
        ) {
          // @ts-ignore
          const word = text.match(/\[\s+(.*?)\s+\]/)[1]

          await sleep(delayMs)
          sendMessage(word)
        }
      }
    }
  }
}

export async function ttype (delayMs = 0) {
  stopTtype()
  bot = createBot(delayMs)
  window.MPP.client.ws.addEventListener('message', bot)
}

export async function stopTtype () {
  if (bot) {
    window.MPP.client.ws.removeEventListener('message', bot)
    bot = undefined
  }
}
