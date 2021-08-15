export class Timestamp {
    readonly Value: number;

    constructor() {
        const stamp = new Date().getTime();
        this.Value = stamp;
    }
}
