import React from 'react';

const ToDoList = (props) => {

    return (
        <>
            <div className="todo_style">
                <i className="fa fa-times-circle" onClick={props.onDel} ></i>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default ToDoList;