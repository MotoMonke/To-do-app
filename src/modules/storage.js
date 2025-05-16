function loadData(){
    const data = localStorage.getItem('data');
    return data?JSON.parse(data):[];
}
let data=loadData();
function saveData(){
    localStorage.setItem('data',JSON.stringify(data));
}
function getData(){
    return data;
}
//todo
function createTODO(name){
    const TODOname=name;
    const date='No date';
    const completed=false;
    data.push({TODOname,date,completed})
    saveData();
}
function deleteTODO(obj){
    const index=data.indexOf(obj);
    data.splice(index,1);
    saveData();
}
export{createTODO,deleteTODO,getData};