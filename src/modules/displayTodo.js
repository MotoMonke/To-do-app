function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function getContainer(){
    return document.getElementById("container");
}
//display todo
function displayTodosArray(array){
    const container=getContainer();
    removeAllChildNodes(container);
    array.forEach((task)=>{
        const name=document.createElement("div");
        name.innerText="Name: "+task.name;
        const dueDate=document.createElement("div");
        dueDate.innerText="dueDate: "+task.dueDate;
        container.appendChild(name);
        container.appendChild(dueDate);
    })
}
export{displayTodosArray};