const tform = document.querySelector(".js_toDoForm");
const tinput = tform.querySelector(".t_input");
const tlist = document.querySelector(".js_toDoList");

const TODOS_LS = "toDos";

let toDos= [];


function delToDos(event){
    const del = event.target;
    const li = del.parentNode;
    tlist.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText="☑";
    delBtn.classList.add("Dbutton");
    delBtn.addEventListener("click", delToDos);
    const span = document.createElement("span");
    const newID = toDos.length + 1 ; 
    
    span.innerText= text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newID;
    delBtn.id = JSON.parse(newID);
    tlist.appendChild(li);
    const tObj = {
        text: text,
        id: newID
    };
    toDos.push(tObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = tinput.value;
    paintToDo(currentValue);
    tinput.value = "";
    
}


function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        const parsedToDos = JSON.parse(toDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    } 
}



function init(){
    loadToDos();
    tform.addEventListener("submit", handleSubmit);
}
init();