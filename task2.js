const inputTask = document.getElementById("inputTask");
const listItems = document.getElementById("listItems");

function addTask(){
    const inputValue = inputTask.value.trim()

    if(!inputValue){
        alert("Input field is empty!");
        return;
    }
    const currentItem = document.createElement("li");

    listItems.appendChild(currentItem);

    currentItem.textContent = inputValue;

    const removebtn = document.createElement("button");

    removebtn.textContent = "x";

    removebtn.setAttribute("id", "addtaskbtn")

    currentItem.appendChild(removebtn);

    removebtn.addEventListener("click", function(){
        listItems.removeChild(currentItem);
    });
}
