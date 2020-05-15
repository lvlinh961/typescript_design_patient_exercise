export default class Chicken {
    protected noiseType: string;

    constructor(noiseType: string) {
        this.noiseType = noiseType;
    }

    public speaks(): string {
        switch (this.noiseType) {
            case 'hen': 	return 'cluck, cluck';
			case 'chick': 	return 'chirp, chirp';
			case 'rubber': 	return 'squeek!';
			case 'muted': 	return '';
			case 'rooster': return 'cock-a-doodle-doo!';
        }

        return '';
    }

    public scratch(): void {
        console.log("scratches some dirt\n");
    }
}