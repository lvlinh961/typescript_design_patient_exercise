export default class Address {
    private primaryAddress: String;
    private secondaryAddress: String;
    private city: String;
    private state: String;
    private zipCode: String;

    constructor(
        primaryAddress: String,
        secondaryAddress: String,
        city: String,
        state: String,
        zipCode: String,
    ) {
        this.primaryAddress = primaryAddress;
        this.secondaryAddress = secondaryAddress;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }

    public getFullAddress(): string {
        return `
            ${this.primaryAddress}
            ${this.secondaryAddress ? this.secondaryAddress : ''}
            ${this.city}, ${this.state} ${this.zipCode}
        `;
    }

    public getPrimaryAddress(): String {
        return this.primaryAddress;
    }

    public getSecondaryAddress(): String {
        return this.secondaryAddress;
    }

    public getCity(): String {
        return this.city;
    }

    public getState(): String {
        return this.state;
    }

    public getZipCode(): String {
        return this.zipCode;
    }

    public setPrimaryAddress(address: String): void {
        this.primaryAddress = address;
    }

    public setSecondaryAddress(address: String): void {
        this.secondaryAddress = address;
    }

    public setCity(city: String): void {
        this.city = city;
    }

    public setState(state: String): void {
        this.state = state;
    }

    public setZipCode(zipCode: String): void {
        this.zipCode = zipCode;
    }
}