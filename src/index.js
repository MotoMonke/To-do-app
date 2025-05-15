import { displayTODO } from "./modules/DOM";
const content=document.getElementById('content');
const TODO=document.getElementById("TODO's");
TODO.addEventListener('click',()=>{
    displayTODO(content);
});