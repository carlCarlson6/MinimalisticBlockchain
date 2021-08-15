import { v4 } from "uuid";

export class PublicKey {
    constructor(
        public Key: string
    ) { }

    public static GenerateKey() {
        return new PublicKey(v4());
    }
}