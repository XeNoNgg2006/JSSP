const input = document.getElementById("input-task");
const addButton = document.getElementById("button-task");
const taskList = document.getElementById("ul-task")

const lightButton =document.getElementById("light");
const darkButton = document.getElementById("dark");
const colurfulButton = document.getElementById("colorful");





function addTask(){
    console.log("Button clicked!");
    const itemText = input.value;

    if(itemText === "") {
        alert("Please enter an Task.")
        return;
    }
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.className = "checkbox-input";
    newCheckbox.id = "checkbox-input";
    
    const deleteItem = document.createElement("input");
    deleteItem.type = "button";
    deleteItem.className = "delete-input";
    deleteItem.id = "delete-input";


    const taskItem = document.createElement("li");
    
    taskItem.append(newCheckbox, document.createTextNode(itemText), deleteItem );
    

    taskList.appendChild(taskItem);
    
    input.value = "";
}


addButton.addEventListener("click", addTask);


taskList.addEventListener('click', function(event) {
     
    if (event.target && event.target.classList.contains('delete-input')) {
        const taskItem = event.target.closest("li");
       
        if(taskItem) {
           
            taskItem.remove();
        }

     }

    if (event.target && event.target.classList.contains('checkbox-input')) {
        
        const taskText = event.target.closest('li');
        
        
        if (taskText) {
            if (event.target.checked) {
                taskText.style.textDecoration = 'line-through';
                taskText.style.color = "#808080";
                taskText.style.textDecorationColor = "#808080";
                taskText.style.textDecorationThickness = "2px";
            } else {
                taskText.style.textDecoration = 'none'; // Remove strike-through
                taskText.style.color = "#e0e0e0";
                
            }
        }
    }
});



input.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        addTask();
    }
});