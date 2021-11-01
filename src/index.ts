// const hello = "world";

// let name1: string = 'santhosh'
// name1 = '98';

// console.log(name)
//Always is specified type of return
// const getFullName = (firstName: string, lastName: string): string =>{   
//     return firstName + " " + lastName;
// }

// console.log(getFullName('true', 'false'));
type PopularTag = string;
type PopularTeam = PopularTag | null;

interface objectInterface {  //By default all property are manadatory
    name12: string;
    age?: number;
    getObjectName(): string;
}
const object1: objectInterface = {
    name12: 'sandy',
    age: 22,
    getObjectName(){
        return "this object "+ this.name12
    }
}

const object2: objectInterface  = {
    name12: 'sandy',
    getObjectName(){
        return "this object "+ this.name12
    }  
}

console.log(object1.name12)
console.log(object2.getObjectName())


// let userId: string | number = 2; // this is union operator Or oscailate between the string and null datatypes

interface UserInterface {
    name: string;
    userid: number;
}

const usObject: UserInterface ={
    name : "My name",
    userid: 23
}


console.log(usObject.name);

const ar1: PopularTag[] = ['Dragon', 'eliminate']
console.log(ar1)