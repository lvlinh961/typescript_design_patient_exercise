import Plant from "./Plant";

export default class Squash implements Plant {

    consume(): void {
        console.log("you ate some squash \n");
    }

}