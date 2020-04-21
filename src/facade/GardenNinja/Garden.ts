import Plant from "./Plant";

export default interface Garden {
    items(): Plant[];
}