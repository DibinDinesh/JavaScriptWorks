
var students={
    name:"vipin",
    course:"django",
    degree:"diploma",
    total:450,
    points:30

}

console.log(students.name);

console.log(students.course);

students.grade="a+"

console.log(students);

if ("total" in students){
    console.log("present");
}
else{
    console.log("not present");
}


if ("points" in students){
    students.points+=10

}
else{
    students.points=15
}
console.log(students);