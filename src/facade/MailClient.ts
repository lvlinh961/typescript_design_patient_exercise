import Address from "./Address";

export default class MailClient {
    public sendLetter(address: Address, letterBody: String): void {
        console.log(`Sending letter to ${address.__toString()}`);
    }
}