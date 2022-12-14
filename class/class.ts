class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const user1 = new User("Vasy");

console.log(user1)
user1.name = 'Pety';
console.log(user1);


class Admin {
    role: number;
}

const admin = new Admin();
admin.role = 1;