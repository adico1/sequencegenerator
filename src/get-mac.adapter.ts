/// <reference path="int.d.ts" />
import getMAC from 'getmac'
import { Int } from './int.d';

export default class GetMacAddress {
  constructor() {}

  getMACAddress(): string {
    return getMAC();
  }

  getMACAddressHashed(): Int {
    return -1299227078 as Int;
  }
}
