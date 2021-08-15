import { BlockDTO } from "./blockDto"

export class ChainDTO {
    constructor(
        public readonly Id: string,
        public readonly blocks: BlockDTO[]
    ) {}
}
