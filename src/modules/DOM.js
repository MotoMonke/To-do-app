import { createTODO,deleteTODO,getTODOarray } from "./storage";
//removeAllChildNodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
//TODO
function inputTODO(){
    const name=window.prompt('TODO name:');
    const description=window.prompt('Description');
    const dueDate=window.prompt('Due date');
    createTODO(name,description,dueDate);
}
function displayTODO(container){
    
    removeAllChildNodes(container);
    const arr=getTODOarray();
    // add TODO button
    const addBtn=document.createElement('button');
    addBtn.innerText='Create new TODO';
    addBtn.className='TODO-create';
    addBtn.addEventListener('click',()=>{
        inputTODO();
        displayTODO(container);
    })
    container.appendChild(addBtn);
    arr.forEach((element) => {
        //container for separate todo
        const TODO=document.createElement('div');
        TODO.className="TODO";
        //name,description,due date
        const name=document.createElement('div');
        name.className="TODO-name";
        const description=document.createElement('div');
        description.className="TODO-description";
        const dueDate=document.createElement('div');
        dueDate.className="TODO-date";
        name.innerText=element.name;
        description.innerText=element.description;
        dueDate.innerText=element.dueDate;
        //delete button for each todo
        const deleteBtn=document.createElement('button');
        deleteBtn.innerText='Delete TODO';
        deleteBtn.className='TODO-delete';
        deleteBtn.addEventListener('click',()=>{
            deleteTODO(element);
            displayTODO(container);
        })
        //appending childs
        TODO.appendChild(name);
        TODO.appendChild(description);
        TODO.appendChild(dueDate);
        TODO.appendChild(deleteBtn);
        container.appendChild(TODO);
    });
}
export {displayTODO};