"use strict";
const skills = ['Dev', 'DevOps'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const newSkills = skills
    .filter((s) => s !== 'DevOps')
    .map(s => s + '!');
console.log(newSkills);
// Tuples
const skill1 = [1, "Drv"];
const [id, skillName] = skill1;
const arr = [1, "sdr", true, true];
// Redonly  данный метод не позволяет изменять массив, только для просмотра
const dkilll2 = [1, 'Dev'];
//Enums
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res1 = {
    massage: "Платеж успешен",
    statusCode: StatusCode.SUCCESS
};
if (res1.statusCode === StatusCode.SUCCESS) {
}
function action(status) {
}
action(StatusCode.SUCCESS);
action(1);
action(2);
const res2 = 1 /* Roles.ADMIN */;
