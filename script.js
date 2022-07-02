
const btnAdd = document.querySelector('.buttonAdd');
const containerTasks = document.querySelector('.containerTasks')
const containerTask = document.querySelector('.task');
const containerButtons = document.querySelector('.buttons');
const inputTask = document.querySelector('.inputTask');

const existsLocalStorageData = localStorage.hasOwnProperty('todoList')

let todoList = existsLocalStorageData ? JSON.parse(localStorage.getItem('todoList')) : []

//click and key enter event 
btnAdd.addEventListener('click',addTask);
inputTask.addEventListener('keydown',handleEvent);

firstRender()

function firstRender() {

    inputTask.focus()

    //renderizado inicial que es en base a la data que venga de localstorage
    todoList.forEach(task => {
        renderTask(task)
    })

    if(todoList.length >= 2) generateButtons()
    if(todoList.length > 0 ) containerTasks.classList.add('addTask');

    console.log({existsLocalStorageData, todoList})
}

//funcion que me agregue la tarea ingresada por el usuario
function addTask () {

    const task = inputTask.value;
    //condicional, cuando el input este vacio no se ejecute funcion, sino 
    //envie un alert al ususario 
    if (task === '') {
        alert('Ingrese una tarea')
     } else {

         const newTodo = {
            terminado: false,
            texto: task
        }
        
        //agregarlo en el objeto de js
        todoList.push(newTodo);
        
        if(todoList.length === 1 ) containerTasks.classList.add('addTask');

        //syncronizo el localstorage con mi objeto para que persista
        syncLocalStorage()

        //limpio el input ..... 
        clearEntry();

        //renderizo la nueva tarea
        renderTask(newTodo);

        //genero los botones solo si son necesarios
        if(todoList.length === 2) generateButtons()


    };
    
};

function syncLocalStorage () {
    const listCopyString = JSON.stringify(todoList)
    localStorage.setItem('todoList', listCopyString)
    console.log({real: todoList,localStorage: JSON.parse(listCopyString)})
}

//funcion que apartir de identificar si la tecla que se presiono es igual a la que quiero se ejecute la funcion addTask
function handleEvent (evento) {
    if(evento.key === 'Enter'){
        addTask();
    } 
};

//funcion que renderice cada tarea y sus funciones
function renderTask (task) {
    
    //crear una caja que contenga toda la pregunta, con sus botones
    const boxTask = document.createElement('div');
    boxTask.className = 'boxTask';
    
    const content = `
        <input type="checkbox" name="checkbox" class="check" id="btnselect">
        <span class='textTask'>${task.texto}</span>
        <button class='delete'></button>
    `
    
    boxTask.innerHTML = content;
    containerTask.appendChild(boxTask);
    
    
    //obtener los botones para asiganrles su funcion
    const btnCheck = boxTask.querySelector('.check');
    const btnDelete = boxTask.querySelector('.delete');

    btnCheck.addEventListener('click', checkTask);
    btnDelete.addEventListener('click',deleteTask);

    //funcion que checkee la tarea indicada
    function checkTask () {
        const selectedTask = btnCheck.nextElementSibling;
    
        //identificar a quien selecciono a ese que selecciono cambie estilo y rayelo
        if (btnCheck.checked === true) {
            selectedTask.style.textDecoration = "line-through";
            task.terminado = true
        }  
        else {
            selectedTask.style.textDecoration = "none"; 
            task.terminado = false
        }

        syncLocalStorage()

    };
    
    //funcion que me elimine la tarea indicada
    function deleteTask () {
        //elimino el elemento seleccionado, apartir de filtrar una lista sin el elemento que seleciono, de esta manera lo elimino, y reasigno el contenido de todoList
        
        //crear una nva lista sin el elemento seleccionado, es decir lo eleimina
        const filter = todoList.filter((_task)=>{
            
            const condicion = _task.texto != task.texto;
        
            return condicion
        })
    
        todoList = filter;
        //console.log(todoList)
    
        if (todoList.length < 2  ) {
            const buttonsGeneral = document.querySelector(".boxButtons");
            if (buttonsGeneral){
                buttonsGeneral.remove()
                
            }
        }
       //hace sinbcronzacion visual, 
        boxTask.remove(); 



        syncLocalStorage()
    };
     
};

function clearEntry () {
    
    const task = document.querySelector('.inputTask');
    
    task.value = ''
    
};


function generateButtons () {

    const boxButtons = document.createElement('div');
    boxButtons.className = 'boxButtons';
    
    const generalButtons = `
        <button class='selectButton  btnAll'>Check</button>
        <button class='deleteButton btnAll'>Delete</button>
    `
    boxButtons.innerHTML = generalButtons;
    containerButtons.appendChild(boxButtons);

    const btnDelete = boxButtons.querySelector('.deleteButton');
    const btnSelect = boxButtons.querySelector('.selectButton');

    btnDelete.addEventListener('click', deleteAll);
    btnSelect.addEventListener('click', selectAll);
    

    function deleteAll () {

        todoList = []

        //llamo todos mis elementos que deseo eliminar
        const listTasks = document.querySelectorAll('.boxTask');

        //como me devuelve una lista aplico un forEach para que me recorra todos los elementos de esa listas
        listTasks.forEach((_task)=>{
            _task.remove();
        });

        //eliminar visualmente los botones
        boxButtons.remove();
        
        syncLocalStorage()
    };

    //funcion que me selecicone todas las tareas
    function selectAll () {
        //llamo todos los botones check que en ese momento tengo en mi documento
        const listChecks = document.querySelectorAll('.check');
        //los itero como un array y accedo a cada boton, y cambio su estado de propiedad .checked (me checkea los buttons)
        //accedo a cada hermano del boton y lo rayo
        listChecks.forEach((button)=>{
            // console.dir(button);
            button.checked = true;
            const texTask = button.nextElementSibling;
            texTask.style.textDecoration = "line-through";
            // console.log(texTask);
    
        })
        //FALTA : hacer que al darle click los desraye

        syncLocalStorage()
    };


}
