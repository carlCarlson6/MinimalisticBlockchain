import { Block } from "../core/blockchain/block";
import { Data } from "../core/blockchain/data";
import { Transaction } from "../core/blockchain/transaction";
import { UserKeys } from "../core/blockchain/UserKeys";
import { BlockchainRepository } from "../core/services/blockchainRepository";
import { BlockDTO } from "./dtos/blockDto";
import { ValidateBlockTransfer } from "./utils/validateBlockTransfer";

export class UpdateChain {
    constructor(
        private readonly repository: BlockchainRepository
    ) {}

    public async Execute(chainId: string, keys: UserKeys, data: Data): Promise<BlockDTO> {
        const chain = await this.repository.ReadChain(chainId);
        const lastBlock = chain.LastBlock;

        if (!ValidateBlockTransfer(lastBlock, keys.Public)) {
            throw new Error("CAN NOT APPEND BLOCK TO THE CHAIN");
        }

        const newBlock = Block.GenerateNewBlock(keys.Public, keys.Private, data, lastBlock, Transaction.Transfer);
        chain.AddBlock(newBlock);

        await this.repository.UpsertChain(chain);

        return BlockDTO.CreateFrom(newBlock);
    }
}
