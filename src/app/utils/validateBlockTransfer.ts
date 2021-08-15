import { Block } from "../../core/blockchain/block";
import { PublicKey } from "../../core/blockchain/publicKey";

export const ValidateBlockTransfer = (block: Block, inputKey: PublicKey): boolean => {
    return block.Owner.Key === inputKey.Key;
}