
const btnAdd = document.querySelector('.buttonAdd');
const containerTasks = document.querySelector('.containerTasks');



//funcion que me agregue la tarea ingresada por el usuario
function addTask () {
    
    const task = document.querySelector('.inputTask').value;
    
    //condicional, cuando el input este vacio no se ejecute funcion, sino 
    //envie un alert al ususario 
    if (task === '') {
        alert('Ingrese una tarea')
     } else {
        renderTask(task);
        addGeneralButtons();
        clearEntry();
    };
};

btnAdd.addEventListener('click',addTask)


//funcion que renderice cada tarea y sus funciones
function renderTask (element) {

    //crear una caja que contenga toda la pregunta, con sus botones
    const boxTask = document.createElement('div');
    boxTask.className = 'boxTask';

    const content = `
        <input type="checkbox" name="checkbox" class="check" id="btnselect">
        <span class='textTask'>${element}</span>
        <button class='delete'>x</button>
    `
  /*   <input type="checkbox" name="my-checkbox" id="opt-in">
  <label for="opt-in">Check me!</label> */


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
  
    // if (/* containerTasks ya tiene mas hijos de 1 >1  */) {/*cree el div con los buttons*/}
 
    // const boxButtons = document.createElement('div');
    // boxButtons.className = 'boxButtons';
    
    // const generalButtons = `
    //     <button class='deleteButton'>deleteAll</button>
    //     <button class='selectButton'>selectAll</button>
    // `
    // boxButtons.innerHTML = generalButtons;
    // containerTasks.appendChild(boxButtons)
    // const btnDelete = boxButtons.querySelector('deleteButton');
    // const btnSelect = boxButtons.querySelector('selectButton');

    // btnDelete.addEventListener('click',deleteAll);
    // btnSelect.addEventListener('click', selectAll);


};

function addGeneralButtons () {
    // console.log(containerTasks)
/*     if (containerTasks == 1) {
        console.log('aparecen botones')
    } else {

        console.log('no aparecen')
    } */
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


