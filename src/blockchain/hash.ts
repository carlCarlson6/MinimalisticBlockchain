import { SHA256 } from "crypto-js";
import { Data } from "./data";
import { Timestamp } from "./timestamp";

export class Hash {
    private constructor(
        public readonly Value: string
    ) {} 

    public static GenerateHash(previoushHash: Hash, timestamp: Timestamp, data: Data, nonce: number = 1): Hash {
        const hashValue = SHA256(previoushHash.Value + timestamp.Value + data.ToJson() + nonce).toString();
        return new Hash(hashValue);
    }

    public static GenesisHash(): Hash {
        return new Hash("0");
    }
}
