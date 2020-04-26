export default class TimeContext {
    protected time: Date;
    protected variables: {[key: string]: any};

    constructor(time: Date) {
        this.time = time;
        this.variables = [];
    }

    public getTime(): Date {
        return this.time;
    }

    public setTime(time: Date): void {
        this.time = time;
    }

    public getTimeAsString(): string {
        return this.time.toString();
    }

    public setVariable(key: string, value: any): void {
        this.variables[key] = value;
    }

    public getVariable(key: string, defaultValue: any = null): any {
        return (this.hasVariable(key)) ? this.variables[key] : defaultValue;
    }

    public hasVariable(key: string): boolean {
        return (typeof key === 'string' && Object.keys(this.variables).includes(key));
    }

    public unsetVariable(key: string) {
        delete this.variables[key];
    }
}