import ModifiedMonster from "./ModifiedMonster";

export default class ExtremelySmart extends ModifiedMonster {
    public intelligence(): number {
        return super.intelligence() * 2;
    }

    public castSpell(spell: String): String {
        return `cast the ${spell} spell`
    }
}