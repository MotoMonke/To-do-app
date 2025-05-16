import { getData,deleteTODO } from "./storage";
import "../styles.css";
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function displayTODO(){
    const array=getData();
    const container=document.getElementById('content');
    removeAllChildNodes(container);
    array.forEach(element => {
        //
        const TODOdiv=document.createElement('div');
        TODOdiv.className='TODO';
        //data of todo
        const name=document.createElement('div');
        name.className='TODO-name'
        name.innerText=element.TODOname;
        const date=document.createElement('div');
        date.className='TODO-date'
        date.innerText=element.date;
        //delete todo
        const deleteTODObtn=document.createElement('button');
        deleteTODObtn.innerText='Delete';
        deleteTODObtn.addEventListener('click',()=>{
            deleteTODO(element);
            displayTODO();
        })
        //appending childs
        TODOdiv.appendChild(name);
        TODOdiv.appendChild(date);
        TODOdiv.appendChild(deleteTODObtn);
        container.appendChild(TODOdiv);
    });
}
export{displayTODO};