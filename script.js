
const btnAdd = document.querySelector('.buttonAdd');
const containerTasks = document.querySelector('.containerTasks');
let todoList = []
// const existeBotones = false

//funcion que me agregue la tarea ingresada por el usuario
function addTask () {

    console.log(todoList)
    
    const task = document.querySelector('.inputTask').value;
    
    //condicional, cuando el input este vacio no se ejecute funcion, sino 
    //envie un alert al ususario 
    if (task === '') {
        alert('Ingrese una tarea')
     } else {


        const newTodo = {
            terminado: false,
            texto: task
        }

        todoList.push(newTodo)

        //si la lista de toods == 2 (crear los botones) // (quitarle el hidden por que ya existian en el html)

        renderTask(newTodo);
        // addGeneralButtons();
        clearEntry();
    };
};

btnAdd.addEventListener('click',addTask)


//funcion que renderice cada tarea y sus funciones
function renderTask (task) {

    //crear una caja que contenga toda la pregunta, con sus botones
    const boxTask = document.createElement('div');
    boxTask.className = 'boxTask';

    const content = `
        <input type="checkbox" name="checkbox" class="check" id="btnselect">
        <span class='textTask'>${task.texto}</span>
        <button class='delete'>x</button>
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
        const selectedTask = btnCheck.nextElementSibling;
        
        if (btnCheck.checked === true) {
            //identificar a quien selecciono
            //a ese que selecciono cambie estilo y rayelo
            selectedTask.style.textDecoration = "line-through";  
            
        } else {

            selectedTask.style.textDecoration = "none"; 
        }
        // console.dir(btnCheck)
        // task.terminado = true
        

        //hacer que se checke y no se checkee revisar toggle
    };
    

    function deleteTask () {
    
        //identificar el padre de quien le estoy dando click para eliminarlo
    //    const deleteSelec = btnDelete.parentElement;

        //crear una nva lista sin el elemento seleccionado, es decir lo eleimina
        const filter = todoList.filter((_task)=>{

        const condicion = _task.texto != task.texto;
        return condicion
       })

       todoList = filter;
    //    console.log(filter)

       //hace sinbcronzacion visual, 
       boxTask.remove(); 
    };
  

    // return boxTask
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


