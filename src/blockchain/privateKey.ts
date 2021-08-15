import { v4 } from "uuid";

export class PrivateKey {
    constructor(
        public Key: string
    ) { }

    public static GenerateKey() {
        return new PrivateKey(v4());
    }
}