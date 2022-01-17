function addToList(){
    // grab the text the user typed in
    task = document.getElementById("todo-task").value

    // grab the <ul> element
    list = document.getElementById('todolist')    
    
    // creating a li element
    const toDoItem = document.createElement("li");
    toDoItem.classList.add("items");
    // append the task into the li element ---> <li>[task]</li>
    toDoItem.append(task)
    
    // append <li>[task]</li>  to <ul></ul> -- put the element to html
    list.appendChild(toDoItem);
}

function clearList(){
    // grabb ul tag
    // list = document.querySelectorAll('.items');
    list = document.querySelector("#todolist").querySelector(".items")
    list.remove();
}

function clearAll() {
    list = document.querySelector("#todolist")
    list.remove()

    yo = document.querySelector("#list")
    
    ayo = document.createElement("ul")
    ayo.setAttribute("id","todolist")
    yo.appendChild(ayo);
}