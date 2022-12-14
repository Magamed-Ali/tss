const skills: string[] = ['Dev', 'DevOps'];

for (const skill of skills){
    console.log(skill.toLowerCase())
}

const newSkills = skills
.filter((s: string) => s !== 'DevOps')
.map(s => s + '!')

console.log(newSkills);


// Tuples

const skill1: [number, string] = [1, "Drv"];

const [id, skillName] = skill1;

const arr: [number, string, ...boolean[]] = [1, "sdr", true, true]

// Redonly  данный метод не позволяет изменять массив, только для просмотра

const dkilll2: readonly [number, string] = [1, 'Dev'];


//Enums

enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 2,
    FAILED = 3
}

const res1 = {
    massage: "Платеж успешен",
    statusCode: StatusCode.SUCCESS
}

if (res1.statusCode === StatusCode.SUCCESS){
    
}

function action(status: StatusCode){

}

action(StatusCode.SUCCESS);
action(1)
action(2)


const enum Roles {
    ADMIN = 1,
    USER = 2
}

const res2 = Roles.ADMIN;


