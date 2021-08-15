import { Block } from "../core/blockchain/block";
import { Data } from "../core/blockchain/data";
import { PrivateKey } from "../core/blockchain/privateKey";
import { PublicKey } from "../core/blockchain/publicKey";
import { Transaction } from "../core/blockchain/transaction";
import { UserKeys } from "../core/blockchain/UserKeys";
import { BlockchainRepository } from "../core/services/blockchainRepository";
import { ChainDTO } from "./dtos/chainDto";
import { ValidateBlockTransfer } from "./utils/validateBlockTransfer";

export class BurnBlockchain {
    constructor(
        private readonly repository: BlockchainRepository
    ) {}

    public async Execute(chainId: string, keys: UserKeys): Promise<ChainDTO> {
        const chain = await this.repository.ReadChain(chainId);

        if (!ValidateBlockTransfer(chain.LastBlock, keys.Public)) {
            throw new Error("CAN NOT BURN THE BLOCK CHAIN");
        }

        const burntBlock = Block.GenerateNewBlock(
            PublicKey.GenerateBurnKey(), 
            PrivateKey.GenerateBurnKey(), 
            new Data(null), 
            chain.LastBlock, 
            Transaction.Burn
        );
        chain.AddBlock(burntBlock);

        await this.repository.UpsertChain(chain);

        return ChainDTO.CreateFrom(chain);
    }
}