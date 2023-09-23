const getItems = () =>{
const get =localStorage.getItem('card');
if(get){
    return JSON.parse(get)
}else{
    return [];
}

}



const setitems = id =>{

const items =getItems()
const setitem =items.find(item => item === id)
if(!setitem){
    items.push(id);
    localStorage.setItem('card', JSON.stringify(items))
}

}

export {getItems,setitems}