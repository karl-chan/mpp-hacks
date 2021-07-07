import { Bot, decipherString, sendMessage, sleep, trimWhitespace } from '../lib/common'

let bot: Bot | undefined

function createBot (delayMs: number): Bot {
  return async function (event: MessageEvent) {
    const { data } = event
    if (typeof data === 'string') {
      const msg = JSON.parse(data)[0]
      if (msg.p?.name === 'Qhy ｢ qhelp ｣ ' && msg.p?.tag === 'BOT') {
        const text = decipherString(trimWhitespace(msg.a))
        if (
          text.includes('Type') &&
          text.includes('｢') &&
          text.includes('｣')
        ) {
          // @ts-ignore
          const word = text.match(/｢ (.*) ｣/)[1]

          await sleep(delayMs + word.length * 50)
          sendMessage(word)
        }
      }
    }
  }
}

export async function qtype (delayMs = 600) {
  stopQtype()
  bot = createBot(delayMs)
  window.MPP.client.ws.addEventListener('message', bot)
}

export async function stopQtype () {
  if (bot) {
    window.MPP.client.ws.removeEventListener('message', bot)
    bot = undefined
  }
}
