/**
 * @author lvlinh96
 * 
 * Implements Adapter pattern
 * 
 * Pattern intent: Convert the interface of a class into another interface that the client expect.
 * Adapter let's class work togerther that coundn't otherwise bacause of imcompatible interfaces
 */

import AddressLookup from "./CRM/AddressLookup";
import CRMAddressAdapter from "./CRMAddressAdapter";
import MailClient from "./MailClient";

var crmAddressLookup = new AddressLookup;
var crmAddress = crmAddressLookup.findByTelephone('0909123456');
var address = new CRMAddressAdapter("Jenny Call", crmAddress);
var mailClient = new MailClient;
mailClient.sendLetter(address, "Mail body");