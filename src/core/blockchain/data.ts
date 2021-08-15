export class Data {
    constructor(
        public readonly Data: any
    ) {}

    public ToJson(): string {
        return JSON.stringify(this.Data);
    }
}
