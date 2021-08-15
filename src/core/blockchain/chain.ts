import { Block } from "./block";
import { Data } from "./data";
import { v4 as uuidv4 } from 'uuid';
import { UserKeys } from "./UserKeys";

export class Chain {
    private constructor(
        public readonly Id: string,
        public readonly Blocks: Block []
    ) { }

    public AddBlock(block: Block): void {
        // TODO proof of work?
        throw new Error("error");
        // this.blocks.push(block);
    }

    public static StartChain(keys: UserKeys, data: Data, nonce: number = 1): Chain {
        const id = uuidv4();
        const blocks = [Block.GenerateGenesisBlock(keys, data, nonce)];
        return new Chain(id, blocks);
    }

    public get FirstBlock(): Block {
        return this.Blocks[0];
    }

    public get LastBlock(): Block {
        return this.Blocks[this.Blocks.length-1];
    }

}
