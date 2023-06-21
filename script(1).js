// Get the input field and the Todo list 
var todoInput=document.getElementById("todoInput");
var todolist=document.getElementById("todolist");
//Function to add new item to the todolist 
function addtodo() {
    var todoItem=todoInput.value;

    If (todoItem !=="")
    {
       var li=document.createElement("li") ;
       li.appendchild(document.createTextNode("li"));
       todolist.appendchild("li");
       todoInput.value="";
    }
}
//Function to remove an item from Todo list
todolist.addEventlisterner("click", function(event) 
{
    if (event.Target.tagName===li);
    {
     event.Target.remove();
    }
} )