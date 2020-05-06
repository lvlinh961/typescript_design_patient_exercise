import Snapshots from "./Snapshots";
import Snapshot from "./Snapshot";

export default class Person implements Snapshots {
    protected fillable = ["name"];

    snapshot(): Snapshot {
        var item = [];

        var keys = [
			'connection', 'table', 'primaryKey',
			'perPage', 'incrementing', 'timestamps',
			'attributes', 'original', 'relations',
			'hidden', 'visible', 'appends',
			'fillable', 'guarded', 'dates',
			'touches', 'observables', 'with',
			'morphClass', 'exists', 'name', 'email'
        ];
        
        keys.map(key => {
            item[key] = this[key];
        });

        return new Snapshot(item);
    }

    restore(snapshot: Snapshot): void {
        var items = snapshot.getItems();
        Object.keys(items).forEach(key => {
            this[key] = items[key];
        });
    }
}