import Plant from "./Plant";

export default class Potato implements Plant {

    consume(): void {
        console.log("you ate some potato \n");
    }

}