import { createTODO } from "./modules/storage";
import { displayTODO } from "./modules/DOM";
const form = document.querySelector('form');
const name = document.getElementById('input-name');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    createTODO(name.value);
    name.value='';
    displayTODO();
});
displayTODO();
