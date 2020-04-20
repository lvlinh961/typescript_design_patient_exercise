/**
 * @author lvinh96
 * 
 * Implements Composite pattern
 * 
 * Pattern intent: Compose objects into tree structures to represent part-whole hierarchies. Composite lets
 * clients treat individual objects and compositions of object uniformly
 */

import MenuCollection from "./MenuCollection";
import MenuLink from "./MenuLink";
import MenuItem from "./MenuItem";

const menuLink1 = new MenuLink("google", "http://google.com");
const menuLink2 = new MenuLink("facebook", "http://facebook.com");
const menuLink3 = new MenuLink("lvlinh", "http://lvlinh.com");
const menuItem1 = new MenuItem("Some text");

var megaMenu = new MenuCollection;
var subMenu1 = new MenuCollection;
var subMenu2 = new MenuCollection;
var subMenu3 = new MenuCollection;

megaMenu.add(subMenu1);
megaMenu.add(subMenu2);

subMenu1.add(menuLink1);
subMenu1.add(menuLink2);
subMenu2.add(menuLink3);
subMenu2.add(subMenu3);
subMenu3.add(menuItem1);

console.log("--- Printing entire mega menu ---");
megaMenu.output();

console.log("--- Printing only sub menu 1 ---");
subMenu1.output();

console.log("--- Printing only menu item 1 ---");
menuItem1.output();