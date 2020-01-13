"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getmac_1 = __importDefault(require("getmac"));
class GetMacAddress {
    constructor() {
        this.getMACAddress = () => getmac_1.default();
        this.getMACAddressHashed = () => this.hashCode(this.getMACAddress());
        this.hashCode = (word) => {
            let hash = 0, i, chr;
            if (word.length === 0)
                return hash;
            for (i = 0; i < word.length; i++) {
                chr = word.charCodeAt(i);
                hash = (hash << 5) - hash + chr; // eslint-disable-line no-bitwise
                // Convert to 32bit integer
                hash |= 0; // eslint-disable-line no-bitwise
            }
            return hash;
        };
    }
}
exports.default = GetMacAddress;
