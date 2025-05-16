import { createTODO,deleteTODO,getTODOarray } from "./storage";
import { getProjectArray,createProject,deleteProject,createProjectTODO,deleteProjectTODO} from "./storage";
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
function displayTODO(){
    //header
    const header=document.getElementById('content-header')
    removeAllChildNodes(header);
    const headerText=document.createElement('h1');
    headerText.innerText='My TODO';
    header.appendChild(headerText);
    //
    const container=document.getElementById('content');
    removeAllChildNodes(container);
    const arr=getTODOarray();
    // add TODO button
    const addBtn=document.createElement('button');
    addBtn.innerText='Create new TODO';
    addBtn.className='TODO-create';
    addBtn.addEventListener('click',()=>{
        const modal=document.querySelector('[data-modal]');
        modal.showModal();
        const form=document.querySelector('form');
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            const name=document.getElementById('new-TODO-name');
            const description=document.getElementById('new-TODO-description');
            const date=document.getElementById('new-TODO-date');
            createTODO(name.value,description.value,date.value);
            modal.close();
            displayTODO();
        });
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
            displayTODO();
        })
        //appending childs
        TODO.appendChild(name);
        TODO.appendChild(description);
        TODO.appendChild(dueDate);
        TODO.appendChild(deleteBtn);
        container.appendChild(TODO);
    });
}
//projects
function displayProjectNames(){
    const sidebar=document.getElementById('project-names');
    removeAllChildNodes(sidebar)
    const projects=getProjectArray();
    projects.forEach((element)=>{
        const projectName=document.createElement('div');
        projectName.innerText=element.name;
        projectName.className='sidebar-projectname';
        sidebar.appendChild(projectName);
        projectName.addEventListener('click',()=>{
            displayProject(element);
        })
    })
}
function inputProjectName(){
    const name=window.prompt('Project name:');
    createProject(name);
    displayProjectNames();
}
function inputProjectTODO(project){
    const name=window.prompt('TODO name:');
    const description=window.prompt('Description');
    const dueDate=window.prompt('Due date');
    createProjectTODO(project,name,description,dueDate);
}
function displayProjectTODO(project){
    const container=document.getElementById('content');
    removeAllChildNodes(container);
    const arr=project.TODOarray;
    // add TODO button
    const addBtn=document.createElement('button');
    addBtn.innerText='Create new TODO';
    addBtn.className='TODO-create';
    addBtn.addEventListener('click',()=>{
        inputProjectTODO(project);
        displayProjectTODO(project);
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
            deleteProjectTODO(project,element);
            displayProjectTODO(project);
        })
        //appending childs
        TODO.appendChild(name);
        TODO.appendChild(description);
        TODO.appendChild(dueDate);
        TODO.appendChild(deleteBtn);
        container.appendChild(TODO);
    });
}
function displayProject(obj){
    //project name
    const container=document.getElementById('content-header');
    removeAllChildNodes(container);
    const projectName=document.createElement('h1')
    projectName.innerText=obj.name;
    container.appendChild(projectName);
    //delete project
    const deleteProjectBtn=document.createElement('button');
    deleteProjectBtn.innerText='Delete this project';
    container.appendChild(deleteProjectBtn);
    deleteProjectBtn.addEventListener('click',()=>{
        deleteProject(obj);
        removeAllChildNodes(container);
        displayProjectNames();
    })
    displayProjectTODO(obj);
}
export{inputProjectName,displayProjectNames,displayTODO}

