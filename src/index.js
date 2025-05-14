import { inputNewProjectName,displayProjectNames} from "./modules/DOM";
import { createNewProject} from "./modules/storage";
import "./styles.css";
const newProjectBtn=document.getElementById('new-project');
newProjectBtn.addEventListener('click',()=>{
    createNewProject(inputNewProjectName());
    displayProjectNames();
});
displayProjectNames();