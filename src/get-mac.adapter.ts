import { Int } from './int.d'
import getMAC from 'getmac'

declare global {
  namespace NodeJS {
    interface Global {
        inTest: boolean
    }
  }
}

export default class GetMacAddress {
	getMACAddress = (): string => getMAC()

	getMACAddressHashed = (): Int => {
		if(global.inTest) {
			return -1299227078 as Int
		} else {
			return this.hashCode(this.getMACAddress())
		}
	}
	hashCode = (word: string): Int => {
		let hash = 0,
			i,
			chr
		if (word.length === 0) return hash as Int
		for (i = 0; i < word.length; i++) {
			chr = word.charCodeAt(i)
			hash = (hash << 5) - hash + chr // eslint-disable-line no-bitwise
			// Convert to 32bit integer
			hash |= 0 // eslint-disable-line no-bitwise
		}
		return hash as Int
	}
}
