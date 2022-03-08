var isDone = false; //gives a hint what we want to see;
var decimal = 6;
var dec = 6; // we can also not specify the type 
var binary = 10;
var hex = 0xf00d;
var octal = 484;
var any = 484; // when we dont know what the type could be
var msg = '';
var msgs = ['msg1', 'msg2'];
// let strict__msgs: ['msg1', 'msg3'] = ['msg1', 'msg2']; 
// let strict__msgs: ['msg1', number] = ['msg1', 'msg2'];
// in terminal -> tsc index.ts -> transpiles to index.js, creating the file itself. if we specify --targes es6, var wont be used, but let
