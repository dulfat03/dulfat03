const toDoInput = document.getElementById('toDoInput');
const toDoBtn = document.getElementById('toDoBtn');
const toDoAlert = document.getElementById('toDoAlert');
const toDoListItem = document.getElementById('toDoListItem');

let todo = [];

function setAlertMassage(massage){
    toDoAlert.innerText = massage;
}
function createToDoItem(){
    console.log('Will add Todo Item');
    if (toDoInput.value === ''){
        setAlertMassage("Tolong isi input ToDo")
        toDoInput.focus()
    } else {
        let li = document.createElement('li')
        
    }
}