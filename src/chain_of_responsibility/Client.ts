export default class Client {
    protected name: string;
    protected request: string;
    protected narc: boolean = false;

    constructor(name: string, request: string, narc?: boolean) {
        this.name = name;
        this.request = request;
        this.narc = narc;
    }

    public getName(): string {
        return this.name;
    }

    public getRequest(): string {
        return this.request;
    }

    public getNarc(): boolean {
        return this.narc;
    }
}