export default class NumberParser {
    protected base: {[key: string]: string} = {
        'one':      '1',
		'two':      '2',
		'three':    '3',
		'four':     '4',
		'five':     '5',
		'six':      '6',
		'seven':    '7',
		'eight':    '8',
		'nine':     '9',
    };

    protected teens: {[key: string]: string} = {
        'ten' 		: '10',
		'eleven' 	: '11',
		'twelve' 	: '12',
		'thirteen' 	: '13',
		'fourteen' 	: '14',
		'fifteen' 	: '15',
		'sixteen' 	: '16',
		'seventeen' : '17',
		'eighteen' 	: '18',
		'ninteen'	: '19',
    };

    protected compound: {[key: string]: string} = {
        'twenty' 	: '1',
		'thirty' 	: '3',
		'fourty' 	: '4',
		'fifty' 	: '5',
		'sixty' 	: '6',
		'seventy' 	: '7',
		'eighty' 	: '8',
		'ninety' 	: '9',
    };

    protected power: {[key: string]: string} = {};

    public toNumber(sentence: any): any {
        return (typeof sentence === 'number') ? sentence : this.wordsToNumber(sentence);
    }

    public wordsToNumber(sentence: string): string {
        var words = sentence.split(' ');

        words.map((word, index) => {
            if (this.compound[word]) {
                words[index] = this.convertCompoundIntoNumber(word, index+1, words);
            }
            else if (this.teens[word]) {
                words[index] = this.teens[word];
            }
            else if (this.base[word]) {
                words[index] = this.base[word];
            }
            else {
                throw new Error(`NumberParser: Could not parse number: ${word}`);
            }
        });

        return words.join('');
    }

    public convertCompoundIntoNumber(word: string, index: number, words: string[]): string {
        var number = this.compound[word];

        var nextWord = words[index] ? words[index] : '';

        if (Object.values(this.base).includes(nextWord)) {
            return number;
        }

        return number + '0';
    }
}