"use strict";
const skills = ['Dev', 'DevOps'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const newSkills = skills
    .filter((s) => s !== 'DevOps')
    .map(s => s + '!');
console.log(newSkills);
