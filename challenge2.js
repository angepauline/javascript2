
let student1={
    names:"clever",
    physics:45,
    computer:35,
    maths:36,
    

}

let student2={
    names:"angep",
    physics:50,
    computer:38,
    maths:45
}


let student3={
    names:"diane",
    physics:50,
    computer:39,
    maths:34
    
}
let student4={
    names:"isimbi",
    physics:75,
    computer:46,
    maths:40

}

let student5={
    names:"josiane",
    physics:85,
    computer:78,
    maths:40,

}

function additionmarks(physics,computer,maths){
    sum=physics+computer+maths;
    return sum

}
let students=[student1,student2,student3,student4,student5]
students.forEach(element => {console.log(element.names)
    console.log(additionmarks(element.physics,element.computer,element.maths))

     
 });


