// add button element
const btnAdd = document.querySelector("#btn-add");
// clear all button element
const btnClearAll = document.querySelector("#btn-clear-all")
// remove one button element
const btnRemove = document.querySelector("#btn-remove")
// text box element
const toDoText = document.querySelector("#todo-text");
// list element
const toDoList = document.querySelector('#todolist-working');


let task = "";
// let abc = ""
btnAdd.addEventListener("click",function(){
  console.log()

  task += `<li>${toDoText.value}</li>`
  toDoList.innerHTML = task;
  
  // clears text box 
  toDoText.value = ""
  // refocus dursor on text box
  toDoText.focus()
})

// removes all items from list
btnClearAll.addEventListener("click",function(){
  toDoList.innerHTML = "";
  task = ""
})

// remove button -- removes the last item appended
btnRemove.addEventListener("click",function(){
  let lis = document.getElementById("todolist-working").getElementsByTagName('li').length;
  toDoList.removeChild(toDoList.childNodes[lis-1]);
})










function clearList(){
    // grabb ul tag
    // list = document.querySelectorAll('.items');
    list = document.querySelector("#todolist").querySelector(".items")
    list.remove();
}
