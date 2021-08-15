import { Chain } from "../../core/blockchain/chain";
import { BlockDTO } from "./blockDto"

export class ChainDTO {
    constructor(
        public readonly Id: string,
        public readonly blocks: BlockDTO[]
    ) {}

    static CreateFrom(chain: Chain): ChainDTO | PromiseLike<ChainDTO> {
        const blocks = chain.Blocks.map(block => BlockDTO.CreateFrom(block));
        return new ChainDTO(
            chain.Id,
            blocks
        );
    }
}
