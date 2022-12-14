const skills: string[] = ['Dev', 'DevOps'];

for (const skill of skills){
    console.log(skill.toLowerCase())
}

const newSkills = skills
.filter((s: string) => s !== 'DevOps')
.map(s => s + '!')

console.log(newSkills);
