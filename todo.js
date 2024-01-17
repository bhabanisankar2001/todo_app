let todolist=[];
function addTodo(){
    let inputElement=document.querySelector('#todo_input');
    let todoitem=inputElement.value;
    let inputdate=document.querySelector('#todo_date');
    let tododate=inputdate.value;
    todolist.push({item:todoitem,date:tododate});
    inputElement.value='';
    inputdate.value='';
    displaylist();
}
function delete_todo(index){
    todolist.splice(index,1);
    displaylist();
}
function displaylist(){
    let displayelement=document.querySelector('.listcontainer');
    let newHTML='';
    for(let i=0;i<todolist.length;i++)
    {
        let {item,date}=todolist[i];
        newHTML+=`
        <span>${item}</span>
        <span>${date}</span>
        <button id="btn-delete" onclick="delete_todo(${i});">Delete</button>`;
    }
   displayelement.innerHTML=newHTML;
}