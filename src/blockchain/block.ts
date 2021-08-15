import { Data } from "./data";
import { Hash } from "./hash";
import { Timestamp } from "./timestamp";
import { v4 as uuidv4 } from 'uuid';
import { Transaction } from "./transaction";

export class Block {
    private constructor(
        public readonly Id: string,
        public readonly Timestamp: Timestamp,
        public readonly Data: Data,
        public readonly PreviousHash: Hash,
        public readonly Hash: Hash,
        public readonly Transaction: Transaction
    ) {}

    public static GenerateNewBlock(data: Data, previousBlock: Block, transaction: Transaction, nonce: number = 1): Block {
        const currentTime = new Timestamp();
        const hash = Hash.GenerateHash(previousBlock.Hash, currentTime, data, nonce);
        const id = uuidv4();

        return new Block(id, currentTime, data, previousBlock.Hash, hash, transaction);
    }

    public static GenerateGenesisBlock(data: Data, nonce: number = 1): Block {
        const currentTime = new Timestamp();
        const genesisHash = Hash.GenesisHash();
        const hash = Hash.GenerateHash(genesisHash, currentTime, data, nonce);
        const id = uuidv4();

        return new Block(id, currentTime, data, genesisHash, hash, Transaction.Create);
    }

}
