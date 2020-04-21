import RiceFarmer from "./GardenNinja/RatedPG13/RiceFarmer";
import DrugDealer from "./GardenNinja/RatedR/DrugDealer";
import Client from "./GardenNinja/Client";
import AddressLookup from "./CRM/AddressLookup";
import CRMAddressAdapter from "./CRMAddressAdapter";
import MailClient from "./MailClient";
import Messenger from "./Messengers/Messenger";
import EmailCarrier from "./Carries/Email";
import SnailMail from "./Carries/SnailMail";
import PlainMessenger from "./Messengers/PlainMessenger";
import TextMessege from "./Carries/TextMessege";
import Architect from "./Architect";
import ExpertCarpenter from "./ExpertCarpenter";
import NoviceCarpenter from "./NoviceCarpenter";

export default class PatternExecutor {
    public random(params?: Array<any>): void {
        const methods = ["abstractFactory", "adapter", "bridge", "builder"];
        var method = methods[Math.floor(Math.random() * methods.length)];

        console.log(`--- ${method.toUpperCase()} pattern ---`);
        console.log("=======================================");
        this[method](params);
        console.log("=======================================");
    }

    public abstractFactory(): void {
        var rating = [new RiceFarmer, new DrugDealer];
        var merchant = rating[Math.floor(Math.random() * rating.length)];
        var client = new Client(merchant);
        client.run();
    }

    public adapter(): void {
        var crmAddressLookup = new AddressLookup;
        var crmAddress = crmAddressLookup.findByTelephone("0909123456");
        var address = new CRMAddressAdapter("Jenny Call", crmAddress);
        var mailClient = new MailClient;
        mailClient.sendLetter(address, "Mail body");
    }

    public bridge(): void {
        const messege = "Helo world";
        var emailMessenger = new Messenger(new EmailCarrier);
        var snailMessenger = new Messenger(new SnailMail('PO Box 123, Somewhere, NY, 12345'));
        var textMessenger = new PlainMessenger(new TextMessege);

        emailMessenger.send(messege);
        snailMessenger.send(messege);
        textMessenger.send(messege);
    }

    public builder(): void {
        var director = new Architect;
        var builder1 = new ExpertCarpenter;
        var builder2 = new NoviceCarpenter;

        console.log("--- Novice Carpenter ---");
        director.createMyOldHouse(builder2);
        console.log(builder2.getHouse());

        console.log("--- Expert Carpenter ---");
        director.createMyOldHouse(builder1);
        console.log(builder1.getHouse());
    }
}