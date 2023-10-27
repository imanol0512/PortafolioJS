/*
ojeto ={
    key:CSSMathValue,
    key:value
}
objeto.keyobjeto['key']
*/

const subject ={
    name :'Aplicaciones web',
    cuatri:3,
    professor:'Francisco',
    classromm:'Lab Redes I',
    'Total hours':70,
    weekHours:5
}

console.log(subject);
console.log(subject.name);
console.log(subject.professor);
console.log(subject['classromm']);
console.log(subject['Total hours']);

subject.professor = 'Francisco Lopez';
subject.career = 'TIADSM';
console.log(subject);

const student = {
    name:'Laura Alicia',
    age:21,
    califications :[10,10,8],
    city:'Apizaco'
}

const group = {
    name: '4B',
    students:[student,student,student],
    subject:[student,student,student],
}
console.log(group);
console.log(group.subject[0].professor);
console.log(group.subject[1].califications);
console.log(group.subject[1].califications[0]);
