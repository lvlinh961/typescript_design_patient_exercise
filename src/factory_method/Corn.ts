import Plant from "./Plant";

export default class Corn implements Plant {

    consume(): void {
        console.log("you ate some corn \n");
    }
    
}