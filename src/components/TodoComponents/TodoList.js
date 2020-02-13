// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";


const TodoList = props => {
    // console.log(props)

    return (
        <div className="todo-list">
            {props.tasks.map(task => (
                <Todo key={task.id} task={task} toggleItem={props.toggleItem} />
            ))}
        </div>
    )
}

export default TodoList;