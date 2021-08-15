import { Block } from "../../blockchain/block";
import { Transaction } from "../../blockchain/transaction";

export class BlockDTO {
    constructor(
        public readonly Id: string,
        public readonly Owner: string,
        public readonly Timestamp: number,
        public readonly Data: string,
        public readonly PreviousHash: string,
        public readonly Hash: string,
        public readonly Transaction: string
    ) {}

    public static CreateFrom(block: Block): BlockDTO {
        return new BlockDTO(
            block.Id,
            block.Owner.Key,
            block.Timestamp.Value,
            block.Data.ToJson(),
            block.PreviousHash.Value,
            block.Hash.Value,
            Transaction[block.Transaction]
        );
    }
}
