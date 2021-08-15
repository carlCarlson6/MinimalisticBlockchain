import { Block } from "../../blockchain/block";
import { PublicKey } from "../../blockchain/publicKey";

export const ValidateCannAddBlock = (block: Block, destinationKey: PublicKey): boolean => {
    return block.Owner.Key === destinationKey.Key;
}