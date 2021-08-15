import { SHA256 } from "crypto-js";
import { Data } from "./data";
import { PrivateKey } from "./privateKey";
import { Timestamp } from "./timestamp";

export class Hash {
    private constructor(
        public readonly Value: string
    ) {} 

    public static CalculateHash(privateKey: PrivateKey, previoushHash: Hash, timestamp: Timestamp, data: Data, nonce: number = 1): Hash {
        const hashValue = SHA256(privateKey.Key + previoushHash.Value + timestamp.Value + data.ToJson() + nonce).toString();
        return new Hash(hashValue);
    }

    public static GenesisHash(privateKey: PrivateKey, timestamp: Timestamp): Hash {
        const hashValue = SHA256(privateKey.Key + timestamp.Value).toString();
        return new Hash(hashValue);
    }
}
