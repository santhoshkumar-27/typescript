// const funName = {
//     uName: 'santhoshkumar',
//     uId: 'TWS1327',
//     Uage: 22
// }

// console.log(funName.uName)


// enum FunName{
//     NotStarted,
//     Inprogress,
//     Done
// }

enum FunNameEnum{       //value are asigned with '=' equal symbols 
    NotStarted = "notStarted",
    Inprogress = "inProgress",
    Done = "done"
}

interface Test{
    nameUser: string,
    funName: FunNameEnum
}

let notStartedStatus: FunNameEnum = FunNameEnum.NotStarted;

notStartedStatus = FunNameEnum.NotStarted
console.log(notStartedStatus)


console.log(FunNameEnum.NotStarted)

let nameFull: string = "1";