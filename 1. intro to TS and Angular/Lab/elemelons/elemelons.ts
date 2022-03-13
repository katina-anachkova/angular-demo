abstract class Melon {
    public elementIndex: number;
    protected element: string;

    constructor(public weight: number, public melonSort: string){
        this.weight = weight;
        this.melonSort = melonSort;
        this.elementIndex = this.weight * this.melonSort.length;
        this.element = '';
    }

    public getElementIndex (): number {
        return this.elementIndex;
    }

    public toString(): string {
        let result: string = `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index:${this.elementIndex}\n`;
        return result;
    }

}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string){
        super(weight, melonSort)
        this.element = 'Water';
    }
}

class Earthmelon extends Melon {
    constructor(public weight: number, public melonSort: string){
        super(weight, melonSort)
        this.element = 'Earth';
    }
}

class Airmelon extends Melon {
    constructor(public weight: number, public melonSort: string){
        super(weight, melonSort)
        this.element = 'Air';
    }
}

class Firemelon extends Melon {
    constructor(public weight: number, public melonSort: string){
        super(weight, melonSort)
        this.element = 'Fire';
    }
}

class MelolemonMelon extends Watermelon {
    private elements: string[];
    private elementCount: number;

    constructor(weight: number, melonSort: string){
        super (weight, melonSort);
        this.elements = ['Fire', 'Earth', 'Air', 'Water'];
        this.element = 'Water';
        this.elementCount = 0;
    }

    public morph(): void {
        this.element =this.elements[this.elementCount];
        this.elementCount++;
        if(this.elementCount >= this.elements.length){
            this.elementCount = 0;
        }
    }
}

let watermelon : Watermelon = new Watermelon(12.5, 'Kingsize');
console.log(watermelon.toString());

