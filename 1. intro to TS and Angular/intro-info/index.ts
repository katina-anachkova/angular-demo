let isDone: boolean = false; //gives a hint what we want to see;
let decimal: number = 6; 
let dec = 6;  // we can also not specify the type 
let binary: number = 0b1010;
let hex: number = 0xf00d;
let octal: number = 0o744;
let any: any = 0o744; // when we dont know what the type could be

let msg: string =''

let msgs: string[] = ['msg1', 'msg2'];
// let strict__msgs: ['msg1', 'msg3'] = ['msg1', 'msg2']; 
// let strict__msgs: ['msg1', number] = ['msg1', 'msg2'];

enum Car { // enumeration; if we use a numeric one we dont need to specify the next num in the series. it is automatically 2;
    Peugeot = 1,
    Citroen
}

enum Truck {
    ford = 'ford',
    mazda = '' // we can specify an empty string, but we must specify a value 
}

// in terminal -> tsc index.ts -> transpiles to index.js, creating the file itself. if we specify --targes es6, var wont be used, but let

const car: { //nested typisation
    engine: {
        power: number,
    },
    doors: number,
} = {
    engine: {
        power: 506,
    },
    doors: 2
}

//debugging: 
// in terminal -> index.js --target es5 --sourcemap 
// this makes a source map that compares which line of ts responds to which one in js file. then you debug ts. thats because the js file probably
// will be a totally different file from what is expected. 
 
// when we console.log in .ts, we then in terminal write -> tsc index.ts -> node index.js -> this outputs the result


//GENERIC TYPES: when we store info and we need to know what type of info we store;
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>('my string');
/*typeof output will be string
let output = identity(5);
typeof output will be number*/
 

//NAMESPACE:
/* we can set things inside to keep unexported if we dont want the other parts of code to see. we can also export the mif we need other parts of code to see it*/

//PUBLIC AND PRIVATE:
/** specifying what is public or private in a class. prevents use of code in an unwanted way. encapsulating. we dont wanna expose inner info to the outside */

// INTERFACE:
/**a class OR an object. interfaces can only keep public props   */