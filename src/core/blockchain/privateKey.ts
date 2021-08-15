import { v4 } from "uuid";

export class PrivateKey {
    constructor(
        public Key: string
    ) { }

    public static GenerateKey(): PrivateKey {
        return new PrivateKey(v4());
    }

    public static GenerateBurnKey(): PrivateKey {
        return this.GenerateKey();
    }
}