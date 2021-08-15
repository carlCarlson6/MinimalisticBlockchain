import { Block } from "../../blockchain/block";
import { PublicKey } from "../../blockchain/publicKey";

export const ValidateCannAddBlock = (block: Block, inputKey: PublicKey): boolean => {
    return block.Owner.Key === inputKey.Key;
}