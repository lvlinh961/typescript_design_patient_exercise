import Monster from "./Monster";

export default abstract class ModifiedMonster extends Monster {
    protected monster: Monster;

    constructor(monster: Monster) {
        super();
        this.monster = monster;
    }

    public intelligence(): number {
        return this.monster.intelligence();
    }

    public strength(): number {
        return this.monster.strength();
    }

    public speed(): number {
        return this.monster.speed();
    }
}