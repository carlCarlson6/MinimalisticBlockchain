import { Chain } from "../core/blockchain/chain";
import { Data } from "../core/blockchain/data";
import { UserKeys } from "../core/blockchain/UserKeys";
import { BlockchainRepository } from "../core/services/blockchainRepository";
import { BlockDTO } from "./dtos/blockDto";

export class CreateNewBlockchain {
    constructor(
        private readonly repository: BlockchainRepository
    ) {}

    public async Execute(keys: UserKeys, data: Data): Promise<BlockDTO> {
        const chain = Chain.StartChain(keys, data);
        await this.repository.UpsertChain(chain);
        
        const firstCreatedBlock = chain.FirstBlock;
        return BlockDTO.CreateFrom(firstCreatedBlock);
    }
}
