"use strict";
let revenue = 1000;
let bonus = 500;
let c = "sdt";
let d = true;
let res = revenue + bonus;
console.log(res);
//function
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
console.log(getFullNameArrow("dsf", "sadf"));
//Объекты
function getName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Anton',
    surname: 'Larich',
    city: 'Moscow',
    age: 33,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getName(user));
console.log(user.city);
