// const array_a =  append<string>("list", ["set", "dict"]) //This is Append in Ramda return is new array is different type

// const searchword = "arr";
// const _hasSearchedArray = any<string>((el:string)=> el.contains(searchword), [
//     'food',
//     'array',
//     'actual'])
const addId = <T extends object>(obj: T)=> { //explicitly define this object parameter by (extends object)
    const id= Math.random().toString(36);

    return {
        ...obj,
        id
    } 
}

interface AmInterface<T, V>{
    name: string;
    age: number;
    data: T;
    dub: V;
} 

const happy: AmInterface<{meta: string}, string> = {
    name: 'sandy',
    age: 22,
    data: {
        meta: "foo"
    },
    dub: "values"
}
const happy2: AmInterface<string, number> = {
    name: 'sandy2',
    age: 23,
    data: 'foo',
    dub: 22
}
let result= addId(happy);

console.log(result)