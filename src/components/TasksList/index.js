import React, {useEffect} from 'react';
import TasksItem from "../TasksItem";
import './index.scss'
// import {getListItem} from "helpers/task_helper";

const TasksList = ({list,check}) => {
    return (

        <ul className='task-list'>{
            list?.map(elem =>
                <TasksItem key={elem.id} elem={elem} chaneTodo={check}/>
            )
        }</ul>
    );
};

export default TasksList;
