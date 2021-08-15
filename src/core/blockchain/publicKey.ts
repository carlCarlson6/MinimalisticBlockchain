import { v4 } from "uuid";

export class PublicKey {
    constructor(
        public Key: string
    ) { }

    public static GenerateKey(): PublicKey {
        return new PublicKey(v4());
    }

    public static GenerateBurnKey(): PublicKey {
        return new PublicKey("BURN_PUBLIC_KEY");
    }
}