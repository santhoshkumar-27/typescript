interface FaceInterface{
    getElement(): string;
}
class obDb implements FaceInterface{
    private firstName: string;
    private lastName: string;
    readonly unChangeAbleName: string;
    static readonly maxAge = 50;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.unChangeAbleName = this.firstName;
    }

    changeUnChangeAbleName():void{
        // this.unChangeAbleName = 'foold'; we can't assign because it's only read only property
    }

    getElement():string{
        return this.firstName + ' ' + this.lastName;
    }
} 

let sant = new obDb('santhosh', 'kumar');
console.log(sant.getElement())
// console.log(sant.firstName) because it's private only 
// console.log(obDb.maxAge) it only access by the object not instance

class dbDb extends obDb{
    private writers: string;

    setWriter(writer: string): void{
        this.writers = writer;
    }

    getWriter():string{
        return this.writers;
    }
}

const newUser = new dbDb('foo', 'badd');

console.log(newUser.getElement())
newUser.setWriter('emotion');
console.log(newUser.getWriter())
console.log(newUser.getElement())