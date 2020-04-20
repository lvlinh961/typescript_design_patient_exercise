/**
 * @author lvlinh96
 * 
 * Implements Bridge pattern
 * 
 * Pattern intent: Decouple an abstraction from its implementation so that the two can vary independently
 */

import Messenger from "./Messengers/Messenger";
import PlainMessenger from "./Messengers/PlainMessenger";
import EmailCarrier from "./Carries/Email";
import SnailCarrier from "./Carries/SnailMail";
import TextMessegeCarrier from "./Carries/TextMessege";

const messege = "Helo world";

var emailMessenger = new Messenger(new EmailCarrier);
var snailMessenger = new Messenger(new SnailCarrier("PO Box 123, Somewhere, NY, 12345"));
var textMessenger = new PlainMessenger(new TextMessegeCarrier);

emailMessenger.send(messege);
snailMessenger.send(messege);
textMessenger.send(messege);