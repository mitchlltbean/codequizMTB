var todoInput = document.querySelector("#todo-text”);
var todoForm = document.querySelector("#todo-form”);
var todoList = document.querySelector("#todo-list”);
var todoCountSpan = document.querySelector("#todo-count”);
var todos = ["Learn HTML”, "Learn CSS”, "Learn JavaScript”];
// var todos = []



renderTodos()
function renderTodos(){
   
    
    //TODO:Create a timer that stay contious on pag as quiz goes along changing n button click

    //TODO8
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    todoCountSpan.textContent = todos.length;
     for (var i = 0; i<todos.length; i++){
        // todoList.appendChild(document.createElement(“li”))
        var liEl = document.createElement ("li");
        var textNode = document.createTextNode (todos[i]);
        liEl.appendChild (textNode);
        todoList.appendChild (liEl);
        
        liEl.setAttribute("data-index", i) 
      }
}





quizForm.addEventListener ("submit",function (event){
    event.preventDefault ();
    var todoText = todoInput.value;
    console.log (todoText);
    if (todoText === ""){
    return;
    }
    todos.push (todoText);
    renderTodos();
    todoInput.value = "";
}
)