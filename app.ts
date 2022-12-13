let revenue: number = 1000;
let bonus: number = 500;
let c: string = "sdt";
let d: boolean = true;

let res: number = revenue + bonus;
console.log(res)

//function

function getFullName(firstname: string, surname: string): string{
    return `${firstname} ${surname}`
}

const getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`;
}

console.log(getFullNameArrow("dsf", "sadf"))

//Объекты

function getName(userEntity: {firstname: string, surname: string }): string {
    return `${userEntity.firstname} ${userEntity.surname}`
}

const user = {
    firstname: 'Anton',
    surname: 'Larich',
    city: 'Moscow',
    age: 33,
    skills: {
        dev : true,
        devops: true
    }
};

console.log(getName(user));
console.log(user.city);

