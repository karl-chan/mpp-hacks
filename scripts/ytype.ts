import { Bot, decipherString, sendMessage, sleep, trimWhitespace } from '../lib/common'

let bot: Bot | undefined

function createBot (delayMs: number): Bot {
  return async function (event: MessageEvent) {
    const { data } = event
    if (typeof data === 'string') {
      const msg = JSON.parse(data)[0]
      if (msg.p?.name === 'Yoshino ( y!help )' && msg.p?.tag === 'BOT') {
        const text = decipherString(trimWhitespace(msg.a))
        if (
          text.includes('Type') &&
          text.includes('[') &&
          text.includes(']')
        ) {
          // @ts-ignore
          const word = text.match(/\[ (.*) \]/)[1]

          await sleep(delayMs)
          sendMessage(word)
        }
      }
    }
  }
}

export async function ytype (delayMs = 0) {
  stopYtype()
  bot = createBot(delayMs)
  window.MPP.client.ws.addEventListener('message', bot)
}

export async function stopYtype () {
  if (bot) {
    window.MPP.client.ws.removeEventListener('message', bot)
    bot = undefined
  }
}
