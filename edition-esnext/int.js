"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function roundToInt(num) {
    return Math.round(num);
}
exports.roundToInt = roundToInt;
function toInt(value) {
    return Number.parseInt(value, 10);
}
exports.toInt = toInt;
function checkIsInt(num) {
    return num % 1 === 0;
}
exports.checkIsInt = checkIsInt;
function assertAsInt(num) {
    try {
        if (checkIsInt(num)) {
            return num;
        }
    }
    catch (err) {
        throw new Error(`Invalid Int value (error): ${num}`);
    }
    throw new Error(`Invalid Int value: ${num}`);
}
exports.assertAsInt = assertAsInt;
