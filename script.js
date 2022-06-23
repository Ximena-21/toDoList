
const btnAdd = document.querySelector('.buttonAdd');
const containerTasks = document.querySelector('.containerTasks');


//funcion rendericeTarea, esta solo me ingrese la la tarea la caja 'task' dentro del 'boxTask'
//que solo cuando haya una tarea ingresada se inserten lso bottones de selecccionar Todo y eliminar todo


function addTask () {
    
    const task = document.querySelector('.inputTask').value;
    
    if (task === '') {
        alert('Ingrese una tarea')
     } else {
    // if ( task !== '') {

        renderTask(task);
        clearEntry();
    };
};

btnAdd.addEventListener('click',addTask)



function renderTask (element) {

    //obtener el valor del input que ingresa el usuario
    const task = document.querySelector('.inputTask').value;
    //crear una caja que contenga toda la pregunta, con sus botones
    const boxTask = document.createElement('div');
    boxTask.className = 'boxTask';

    const content = `
        <button class='check' id='toggle'>select</button>
        <span class='textTask'>${element}</span>
        <button class='delete'>delete</button>
    `
    boxTask.innerHTML = content;
    containerTasks.appendChild(boxTask);

    //obtener los botones para asiganrles su funcion
    const btnCheck = boxTask.querySelector('.check');
    const btnDelete = boxTask.querySelector('.delete');

    btnCheck.addEventListener('click', checkTask);
    btnDelete.addEventListener('click',deleteTask);
         


    //funcion que checkee la tarea indicada
    function checkTask () {

        //identificar a quien selecciono
        const selectedTask = btnCheck.nextElementSibling;
        //a ese que selecciono cambie estilo y rayelo
        selectedTask.style.textDecoration = "line-through";   

        //hacer que se checke y no se checkee revisar toggle
    };
    

    function deleteTask () {
    
        //identificar el padre de quien le estoy dando click para eliminarlo
       const deleteSelec = btnDelete.parentElement;
       deleteSelec.remove(); 
    };
  
    // if (/*ya se ingreso una tarea */)
    const boxButtons = document.createElement('div');
    boxButtons.className = 'boxButtons';
    
    const generalButtons = `
        <button class='deleteButton'>deleteAll</button>
        <button class='selectButton'>selectAll</button>
    `
    boxButtons.innerHTML = generalButtons;
    containerTasks.appendChild(boxButtons)

 /*    function addGeneralButtons () {


        // const btnDelete = boxButtons.querySelector('deleteButton');
        // const btnSelect = boxButtons.querySelector('selectButton');
    
        // btnDelete.addEventListener('click',deleteAll);
        // btnSelect.addEventListener('click', selectAll);
    }; */

};

function clearEntry () {

    const task = document.querySelector('.inputTask');

    task.value = ''

};





function deleteAll () {

};



//
function selectAll () {

};


