import React, {useEffect, useState} from 'react';
import "./index.scss"

const TasksItem = ({elem, chaneTodo}) => {
    let border = {borderRight: `5px solid ${elem.color}`}
    const [item ,setItem] = useState(elem)

    const changeCompleted = () =>{
        chaneTodo(item)
    }

    return (
        <li style={border} onClick={changeCompleted}><span>{elem.title}</span> <button  className={elem.isCompleted ? 'checked' : null}></button></li>
    );
};

export default TasksItem;
