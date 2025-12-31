const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add task
function addTask(){
    if(inputBox.value.trim() === ''){
        alert("Please write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        saveData();
    }
    inputBox.value = "";
}

// Toggle check & remove task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save & show tasks
function saveData(){
    localStorage.setItem("tasks", listContainer.innerHTML);
}
function showTask(){
    const data = localStorage.getItem("tasks");
    if(data) listContainer.innerHTML = data;
}
showTask();
