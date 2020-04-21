export default interface Address {
    getTo(): String;
    address1(): String;
    address2(): String;
    city(): String;
    region(): String;
    postalCode(): String;
    __toString(): String;
}