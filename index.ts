import { stopTmath, tmath } from './scripts/=math'
import { stopTtype, ttype } from './scripts/=type'
import { qmath, stopQmath } from './scripts/qmath'
import { qtype, stopQtype } from './scripts/qtype'

async function all (delayMs : number | undefined) {
  await Promise.all([
    qhy(delayMs),
    theta(delayMs)
  ])
}

async function qhy (delayMs : number | undefined) {
  await Promise.all([
    qmath(delayMs),
    qtype(delayMs)
  ])
}

async function theta (delayMs : number | undefined) {
  await Promise.all([
    tmath(delayMs),
    ttype(delayMs)
  ])
}

export { all, qmath, qtype, tmath, ttype, stopQmath, stopQtype, stopTmath, stopTtype }
