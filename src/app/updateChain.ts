import { Block } from "../blockchain/block";
import { Data } from "../blockchain/data";
import { Transaction } from "../blockchain/transaction";
import { UserKeys } from "../blockchain/UserKeys";
import { BlockchainRepository } from "../services/blockchainRepository";
import { BlockDTO } from "./dtos/blockDto";
import { ValidateCannAddBlock } from "./utils/ValidateCanAddBlock";

export class UpdateChain {
    constructor(
        private readonly repository: BlockchainRepository
    ) {}

    public async Execute(chainId: string, keys: UserKeys, data: Data): Promise<BlockDTO> {
        const chain = await this.repository.ReadChain(chainId);
        const lastBlock = chain.LastBlock;

        if (!ValidateCannAddBlock(lastBlock, keys.Public)) {
            throw new Error("CAN NOT APPEND BLOCK TO THE CHAIN");
        }

        const newBlock = Block.GenerateNewBlock(keys, data, lastBlock, Transaction.Transfer);
        chain.AddBlock(newBlock);

        await this.repository.UpsertChain(chain);

        return BlockDTO.CreateFrom(newBlock);
    }
}
