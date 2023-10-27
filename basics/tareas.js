const inputTarea =document.getElementById('inputTarea');
const listaTarea =document.querySelector('#tareas ul');
const listaTiempo =document.querySelector('#tareas ul');

const tareas =[];

function addTarea(){
    const dato =inputTarea.value;
    if(dato){
    tareas.push({tarea:dato,time:tiempo});
    inputTarea.value='';
    inputTiempo.value='';

    showTareas();
}
}
function showTareas(){
    const tareasLi = tareas.map(tarea =>`<li>${tarea.tarea} - ${tarea.time}</li>`);
    listaTarea.innerHTML= tareasLi.join('');
}