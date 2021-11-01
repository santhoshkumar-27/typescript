const addId = <T>(obj: T)=> {
    const id= Math.random().toString(36);

    return {
        ...obj,
        id
    } 
}

interface UserInterface{
    name: string;
} 

const Name: UserInterface = {
    name: 'sandy'
}

let result = addId<UserInterface>(Name);

console.log(result)