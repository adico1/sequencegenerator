import { Int } from './int.d'
import { Long } from './long.d'
import GetMacAddress from './get-mac.adapter'

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

export class SequenceGenerator {
  // private static readonly UNUSED_BITS: Int = 1 as Int; // Sign bit, Unused (always set to 0)
  // private static readonly EPOCH_BITS: Int = 41 as Int;
  private static readonly NODE_ID_BITS: Int = 10 as Int
  private static readonly SEQUENCE_BITS: Int = 12 as Int

  private static readonly maxNodeId = (Math.pow(
    2,
    SequenceGenerator.NODE_ID_BITS
  ) - 1) as Int
  private static readonly maxSequence = (Math.pow(
    2,
    SequenceGenerator.SEQUENCE_BITS
  ) - 1) as Int

  // Custom Epoch (January 1, 2015 Midnight UTC = 2015-01-01T00:00:00Z)
  private static readonly CUSTOM_EPOCH: Long = (process.env.CUSTOM_EPOCH ||
    1420070400000) as Long

  private nodeId: number

  private lastTimestamp = -1 as Long
  private sequence = 0 as Long

  // Create SequenceGenerator with a nodeId
  constructor(nodeId: Int | null) {
    if (nodeId === null || typeof nodeId === 'undefined') {
      this.nodeId = this.createNodeId()
      return
    }

    if (nodeId < 0 || nodeId > SequenceGenerator.maxNodeId) {
      throw new Error(
        `NodeId must be between 0 and ${SequenceGenerator.maxNodeId}`
      )
    }
    this.nodeId = nodeId
  }

  public nextId(): Long {
    let currentTimestamp = Date.now() as Long

    if (currentTimestamp < this.lastTimestamp) {
      throw new Error('Invalid System Clock!')
    }

    if (currentTimestamp === this.lastTimestamp) {
      this.sequence = ((this.sequence + 1) & // eslint-disable-line no-bitwise
        SequenceGenerator.maxSequence) as Long
      if (this.sequence === (0 as Long)) {
        // Sequence Exhausted, wait till next millisecond.
        currentTimestamp = this.waitNextMillis(currentTimestamp)
      }
    } else {
      // reset sequence to start with zero for the next millisecond
      this.sequence = 0 as Long
    }

    this.lastTimestamp = currentTimestamp

    let id: Long = (currentTimestamp << // eslint-disable-line no-bitwise
      (SequenceGenerator.NODE_ID_BITS +
        SequenceGenerator.SEQUENCE_BITS)) as Long
    id = (id | (this.nodeId << SequenceGenerator.SEQUENCE_BITS)) as Long // eslint-disable-line no-bitwise
    id = (id | this.sequence) as Long // eslint-disable-line no-bitwise
    return (id >>> 0) as Long // eslint-disable-line no-bitwise
  }

  // Get current timestamp in milliseconds, adjust for the custom epoch.
  private static timestamp(): Long {
    return (Date.now() - SequenceGenerator.CUSTOM_EPOCH) as Long
  }

  // Block and wait till next millisecond
  private waitNextMillis(currentTimestamp: Long): Long {
    while (currentTimestamp === this.lastTimestamp) {
      currentTimestamp = SequenceGenerator.timestamp()
    }
    return currentTimestamp
  }

  private createNodeId = (): Int =>
    (new GetMacAddress().getMACAddressHashed() & // eslint-disable-line no-bitwise
      SequenceGenerator.maxNodeId) as Int
}
