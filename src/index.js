import { inputProjectName,displayProjectNames, displayTODO } from "./modules/DOM";

displayProjectNames();
const TODO=document.getElementById("TODO's");

TODO.addEventListener('click',()=>{
    
    displayTODO();
});
const newProjectBtn=document.getElementById('add-project');
newProjectBtn.addEventListener('click',()=>{
    alert('clicked');
    inputProjectName();
    displayProjectNames();
});