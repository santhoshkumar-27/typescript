const doSomething= ():void =>{
    console.log('doSomeThing')
    // return 1; this function doesn't return by default 
}
const doSometing= ():never =>{
    // console.log('doSomeThing')
    // return 1; this function doesn't return by default 
    throw 'never';
}

doSomething();
let nameid : any = "naeid";
console.log(nameid.foo());

let nfanme: any = 23;
let nfanme2: unknown = 23;

let s1: number= nfanme;
// let s2: string = nfanme2;
console.log(nfanme.foo())
// console.log(nfanme2.foo()) because its unknown function


let pageNumber: string = "2";
let unitPageNumber:number = (pageNumber as unknown)as number;

let nae: any = "1";
let pageNumbertwo = nae as string;