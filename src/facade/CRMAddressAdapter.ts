import Address from "./Address";
import CRMAddress from "./CRM/Address";

export default class CRMAddressAdapter implements Address {

    protected to: String;
    protected address: CRMAddress;

    constructor(name: String, address: CRMAddress) {
        this.to = name;
        this.address = address;
    }

    public getTo(): String {
        return this.to;
    }

    public address1(): String {
        return this.address.getPrimaryAddress();
    }

    public address2(): String {
        return this.address.getSecondaryAddress();
    }

    public city(): String {
        return this.address.getCity();
    }

    public region(): String {
        return this.address.getState();
    }

    public postalCode(): String {
        return this.address.getZipCode();
    }

    public __toString(): String {
        return `${this.to} \n ${this.address.getFullAddress()}`;
    }
}