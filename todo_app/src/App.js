import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoList from "./ToDoList";

function App() {

    const [inputList, setInputList] = useState("");
    const [Items, setItemsList] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const listOfItems = () => {
        setItemsList((oldItems) => {
            return [...oldItems, {id: uuidv4(), value: inputList}];
        });
        setInputList("");
    }

    const deleteItem = (id)=> {
        console.log(Items, id);
        setItemsList(()=>{
            return Items.filter((item=>item.id !== id))
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>Todo List</h1>
                    <br />
                    <input type="text" value={inputList} placeholder="Add items" onChange={itemEvent} />
                    <button onClick={listOfItems}>+</button>

                    <ol>
                        {
                            Items.map(item => {
                                return (
                                    <ToDoList key={item.id} text={item.value} onDel={()=>{
                                        return deleteItem(item.id);
                                    }} />
                                )
                            })
                        }
                    </ol>

                </div>
            </div>
        </>
    );
}

export default App;
