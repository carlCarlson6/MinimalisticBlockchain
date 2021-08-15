import { Block } from "./block";
import { Data } from "./data";
import { v4 as uuidv4 } from 'uuid';

export class Chain {
    private constructor(
        public readonly Id: string,
        public readonly blocks: Block []
    ) { }

    public AddBlock(block: Block): void {
        // TODO
        this.blocks.push(block);
    }

    public static StartChain(data: Data, nonce: number = 1): Chain {
        const id = uuidv4();
        const blocks = [Block.GenerateGenesisBlock(data, nonce)];
        return new Chain(id, blocks);
    }

    public get FirstBlock(): Block {
        return this.blocks[0];
    }

    public get LastBlock(): Block {
        return this.blocks[this.blocks.length-1];
    }

}
