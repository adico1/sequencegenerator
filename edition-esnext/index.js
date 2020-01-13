"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_mac_adapter_1 = __importDefault(require("./get-mac.adapter"));
/**
 * Migrated to JS by adico
 * original article: https://www.callicoder.com/distributed-unique-id-sequence-number-generator/
 *
 * Distributed Sequence Generator.
 * Inspired by Twitter snowflake: https://github.com/twitter/snowflake/tree/snowflake-2010
 *
 * This class should be used as a Singleton.
 * Make sure that you create and reuse a Single instance of SequenceGenerator per node in your distributed system cluster.
 */
class SequenceGenerator {
    // Create SequenceGenerator with a nodeId
    constructor(nodeId) {
        this.lastTimestamp = -1;
        this.sequence = 0;
        this.createNodeId = () => (new get_mac_adapter_1.default().getMACAddressHashed() & // eslint-disable-line no-bitwise
            SequenceGenerator.maxNodeId);
        if (nodeId === null || typeof nodeId === 'undefined') {
            this.nodeId = this.createNodeId();
            return;
        }
        if (nodeId < 0 || nodeId > SequenceGenerator.maxNodeId) {
            throw new Error(`NodeId must be between 0 and ${SequenceGenerator.maxNodeId}`);
        }
        this.nodeId = nodeId;
    }
    nextId() {
        let currentTimestamp = Date.now();
        if (currentTimestamp < this.lastTimestamp) {
            throw new Error('Invalid System Clock!');
        }
        if (currentTimestamp === this.lastTimestamp) {
            this.sequence = ((this.sequence + 1) & // eslint-disable-line no-bitwise
                SequenceGenerator.maxSequence);
            if (this.sequence === 0) {
                // Sequence Exhausted, wait till next millisecond.
                currentTimestamp = this.waitNextMillis(currentTimestamp);
            }
        }
        else {
            // reset sequence to start with zero for the next millisecond
            this.sequence = 0;
        }
        this.lastTimestamp = currentTimestamp;
        let id = (currentTimestamp << // eslint-disable-line no-bitwise
            (SequenceGenerator.NODE_ID_BITS +
                SequenceGenerator.SEQUENCE_BITS));
        id = (id | (this.nodeId << SequenceGenerator.SEQUENCE_BITS)); // eslint-disable-line no-bitwise
        id = (id | this.sequence); // eslint-disable-line no-bitwise
        return (id >>> 0); // eslint-disable-line no-bitwise
    }
    // Get current timestamp in milliseconds, adjust for the custom epoch.
    static timestamp() {
        return (Date.now() - SequenceGenerator.CUSTOM_EPOCH);
    }
    // Block and wait till next millisecond
    waitNextMillis(currentTimestamp) {
        while (currentTimestamp === this.lastTimestamp) {
            currentTimestamp = SequenceGenerator.timestamp();
        }
        return currentTimestamp;
    }
}
exports.SequenceGenerator = SequenceGenerator;
// private static readonly UNUSED_BITS: Int = 1 as Int; // Sign bit, Unused (always set to 0)
// private static readonly EPOCH_BITS: Int = 41 as Int;
SequenceGenerator.NODE_ID_BITS = 10;
SequenceGenerator.SEQUENCE_BITS = 12;
SequenceGenerator.maxNodeId = (Math.pow(2, SequenceGenerator.NODE_ID_BITS) - 1);
SequenceGenerator.maxSequence = (Math.pow(2, SequenceGenerator.SEQUENCE_BITS) - 1);
// Custom Epoch (January 1, 2015 Midnight UTC = 2015-01-01T00:00:00Z)
SequenceGenerator.CUSTOM_EPOCH = (process.env.CUSTOM_EPOCH ||
    1420070400000);
