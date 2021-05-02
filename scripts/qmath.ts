import { Bot, sendMessage, sleep, trimWhitespace } from '../lib/common'

let bot: Bot | undefined

function createBot (delayMs: number): Bot {
  return async function (event: MessageEvent) {
    const { data } = event
    if (typeof data === 'string') {
      const msg = JSON.parse(data)[0]
      if (msg.p?.name === 'Qhy ｢ qhelp ｣ ' && msg.p?.bot === true) {
        const text = trimWhitespace(msg.a)
        if (
          text.includes('Solvе') &&
          text.includes('｢') &&
          text.includes('｣')
        ) {
          // @ts-ignore
          const expr = text.match(/｢ (.*) ｣/)[1]
            .replace('×', '*')
          // eslint-disable-next-line no-eval
          const ans = eval(expr)

          await sleep(delayMs)
          sendMessage(ans.toString())
        }
      }
    }
  }
}

export async function qmath (delayMs = 600) {
  stopQmath()
  bot = createBot(delayMs)
  window.MPP.client.ws.addEventListener('message', bot)
}

export async function stopQmath () {
  if (bot) {
    window.MPP.client.ws.removeEventListener('message', bot)
    bot = undefined
  }
}
