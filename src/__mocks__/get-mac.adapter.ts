import { Int } from "../int.d";

export default class GetMacAddress {
  constructor() {}

  getMACAddress(): string {
    return '00:00:00:00:00:00';
  }

  getMACAddressHashed(): Int {
    return -1299227078 as Int;
  }
}
