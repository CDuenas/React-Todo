import React from "react";
import "./Todo.css";

const Todo = props => {
    // console.log(props)

    return (
        <div
            className={`task${props.task.completed ? " completed" : ""}`}
            onClick={() => props.toggleItem(props.task.id)}
        >
            <p>{props.task.name}</p>
        </div>
    );
};

export default Todo;