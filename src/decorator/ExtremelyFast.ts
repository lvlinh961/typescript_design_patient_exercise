import ModifiedMonster from "./ModifiedMonster";

export default class ExtremelyFast extends ModifiedMonster {
    public speed(): number {
        return super.speed() * 2;
    }

    public jumpAttack(): String {
        return "jump and attack!";
    }
}