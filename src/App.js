import './App.css';
import EnterInput from "./components/EnterInput";
import TasksList from "./components/TasksList";
import {useEffect, useState} from "react";
import {getListItem, setListItem, updateListItem} from "./helpers/task_helper";

function App() {
    const [todos, setTodos] = useState([])
    const [item, setItem] = useState({})
    useEffect(() => {
        setTodos(getListItem())
    }, [])

    useEffect(() => {
        setItem()
    }, [item])

    const addTask = (text, color) => {
        setListItem(text, color)
        setTodos(getListItem())
    }
    const change = (elem) => {
        updateListItem(elem)
        setItem(elem)
    }

    return (
        <div className="App">
            <EnterInput add={addTask}/>
            <TasksList list={todos} check={change}/>
        </div>
    );
}

export default App;
