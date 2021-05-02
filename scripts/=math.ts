import { Bot, decipherString, sendMessage, sleep, trimWhitespace } from '../lib/common'

let bot: Bot | undefined

function createBot (delayMs: number): Bot {
  return async function (event: MessageEvent) {
    const { data } = event
    if (typeof data === 'string') {
      const msg = JSON.parse(data)[0]
      if (msg.p?.name === 'Theta [=help]' && msg.p?.bot === true) {
        const text = decipherString(trimWhitespace(msg.a))
        if (
          text.includes('Solve') &&
          text.includes('[') &&
          text.includes(']')
        ) {
        // @ts-ignore
          const expr = text.match(/\[(.*)\]/)[1]
            .replace(/l/g, '1')
            .replace(/O/g, '0')
            .replace(/[+⧾]/u, '+')
            .replace(/[−‐‑˗]/, '-')
            .replace(/[xх]/, '*')
            .replace(/[∕/Ⳇ⁄]/, '/')
          // eslint-disable-next-line no-eval
          const ans = eval(expr)

          await sleep(delayMs)
          sendMessage(ans.toString())
        }
      }
    }
  }
}

export async function tmath (delayMs = 0) {
  stopTmath()
  bot = createBot(delayMs)
  window.MPP.client.ws.addEventListener('message', bot)
}

export async function stopTmath () {
  if (bot) {
    window.MPP.client.ws.removeEventListener('message', bot)
    bot = undefined
  }
}
