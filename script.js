
const btnAdd = document.querySelector('.buttonAdd');
const containerTasks = document.querySelector('.containerTasks')
const containerTask = document.querySelector('.task');
const containerButtons = document.querySelector('.buttons');
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
        containerTasks.classList.add('addTask');

        const newTodo = {
            terminado: false,
            texto: task
        }

        todoList.push(newTodo)
        renderTask(newTodo);
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
    containerTask.appendChild(boxTask);

    //obtener los botones para asiganrles su funcion
    const btnCheck = boxTask.querySelector('.check');
    const btnDelete = boxTask.querySelector('.delete');
    
    btnCheck.addEventListener('click', checkTask);
    btnDelete.addEventListener('click',deleteTask);
    
    //uso de condicional, para que solo cuando hayan mas de dos tareas, aparezacn los botones generales y sus funciones
        if (todoList.length == 2){
            
        
            const boxButtons = document.createElement('div');
            boxButtons.className = 'boxButtons';
            
            const generalButtons = `
                <button class='deleteButton'>deleteAll</button>
                <button class='selectButton'>selectAll</button>
            `
            boxButtons.innerHTML = generalButtons;
            containerButtons.appendChild(boxButtons);
        
            const btnDelete = boxButtons.querySelector('.deleteButton');
            const btnSelect = boxButtons.querySelector('.selectButton');
        
            btnDelete.addEventListener('click', deleteAll);
            btnSelect.addEventListener('click', selectAll);
            

            function deleteAll () {

                /* todoList.forEach((eliminado)=>{
                    const eliminar = todoList.pop(eliminado);
                    console.log(eliminar)
                }) */
        //ELIMINAR TODOS LOS ELEMENTOS DE MI LISTA(todList)
            //uso un loops while, para que apartir de todo el largo de mi lista, me ejecute la eliminacion del ultimo elemento mediante el metodo .pop()
                while (todoList.length) { 
            
                    const eliminar = todoList.pop(); 
                    console.log(eliminar);
                };
        //ELIMINAR VISUALMENTE TODAS LAS TAREAS DE MI LISTA
            //debo eliminar todos los elementos que me contienen las tareas 

                //llamo todos mis elementos que deseo eliminar
                const listTasks = document.querySelectorAll('.boxTask');

                //como me devuelve una lista aplico un forEach para que me recorra todos los elementos de esa listas
                listTasks.forEach((_task)=>{
                    _task.remove();
                });

                //eliminar visualmente los botones
                boxButtons.remove();
                
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
            };
        }; 

        
        
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
    
    //funcion que me elimine la tarea indicada
    function deleteTask () {
        //elimino el elemento seleccionado, apartir de filtrar una lista sin el elemento que seleciono, de esta manera lo elimino, y reasigno el contenido de todoList
        
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
     
};



function clearEntry () {
    
    const task = document.querySelector('.inputTask');
    
    task.value = ''
    
};



