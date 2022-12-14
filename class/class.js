"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user1 = new User("Vasy");
console.log(user1);
user1.name = 'Pety';
console.log(user1);
class Admin {
}
const admin = new Admin();
admin.role = 1;
