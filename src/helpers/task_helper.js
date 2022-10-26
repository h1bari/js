import {defaultTodos} from "./constants";

const getListItem = () => {
    let list = JSON.parse(window.localStorage.getItem("list"))
    if (!list){
        window.localStorage.setItem("list",JSON.stringify(defaultTodos))
        return defaultTodos
    }
    return list
}
const setListItem = (text = '',color = 'transparent') => {
    if(text){
        let list = getListItem()
        let obj = {
            id: Date.now(),
            title: text,
            isCompleted: false,
            color: color,
        }
        let tasks = [...list, obj]
        console.log(tasks)
        window.localStorage.setItem("list",JSON.stringify(tasks))
    }
}
const updateListItem = (elem) => {
    let list = getListItem()
    elem.isCompleted = !elem.isCompleted
    for (let item = 0; item < list.length; item++) {
        if(elem.id === list[item].id){
            list[item].isCompleted = !list[item].isCompleted
        }
    }
    window.localStorage.setItem("list",JSON.stringify(list))
}
export { getListItem, setListItem, updateListItem }
