import { Chain } from "../blockchain/chain";

export interface BlockchainRepository {
    UpsertChain(chain: Chain): Promise<void>;
    ReadChain(id: string): Promise<Chain>;
}