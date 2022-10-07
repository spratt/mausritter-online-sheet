import { Hireling } from '../types'
import rollDices from './rollDices'
import detailsList from '../data/detailsList.json'

export default (name: string): Hireling => {
  const stats = {
    str: rollDices(2,6),
    dex: rollDices(2,6),
    wil: rollDices(2,6),
    hp: rollDices(1,6)
  }

  return {
    name: name,
    exp: 0,
    maxStr: stats.str,
    str: stats.str,
    maxDex: stats.dex,
    dex: stats.dex,
    maxWil: stats.wil,
    wil: stats.wil,
    maxHp: stats.hp,
    hp: stats.hp,
    bodyBack: {
      'Main Paw': {
        name: 'Main Paw',
        item: null,
        used: 0
      },
      'Second Paw': {
        name: 'Second Paw',
        item: null,
        used: 0
      }
    },
    packBack: {
      1: {
        name: '1',
        item: null,
        used: 0
      },
      2: {
        name: '2',
        item: null,
        used: 0
      },
      3: {
        name: '3',
        item: null,
        used: 0
      },
      4: {
        name: '4',
        item: null,
        used: 0
      }
    },
    details: detailsList[rollDices(1, detailsList.length) - 1]
  }
}