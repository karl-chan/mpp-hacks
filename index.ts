import { stopTmath, tmath } from './scripts/=math'
import { stopTtype, ttype } from './scripts/=type'
import { qmath, stopQmath } from './scripts/qmath'
import { qtype, stopQtype } from './scripts/qtype'
import { stopYtype, ytype } from './scripts/ytype'

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

export { all, qmath, qtype, tmath, ttype, ytype, stopQmath, stopQtype, stopTmath, stopTtype, stopYtype }
