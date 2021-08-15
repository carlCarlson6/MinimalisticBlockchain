import { PrivateKey } from "./privateKey";
import { PublicKey } from "./publicKey";

export class UserKeys {
    constructor(
        public readonly Public: PublicKey,
        public readonly Private: PrivateKey
    ) {}

    public static GenerateKeys() {
        return new UserKeys(PublicKey.GenerateKey(), PrivateKey.GenerateKey());
    }

}