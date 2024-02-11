import Button from "../Button";
import styles from "./index.module.css"
import Input from "../Input";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const ToDo = () => {
    const [error, setError] = useState('')
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])
    const navigate = useNavigate()

    const onEdit = (_todoName) =>{
        let newTodos = todos.map((todoName) =>{
            if(todoName === _todoName){
                let newTodo = prompt('yeni todo elave et ; ', _todoName)
                return newTodo
            }
            return todoName;
        })
         setTodos(newTodos)

    }
    const onDelete = (_todoName) =>{
        //  let newTodos = todos.filter((todoName) => todoName!==_todoName)
        //  setTodos(newTodos)
        setTodos((preTodos) => preTodos.filter((todoName) => todoName !== _todoName))
    }

    const addToDo = () =>{
        if(value.length < 4){
            setError("uzunlugu 4-den kicik todo olmur!")
            setTimeout(() =>{
                setError('')
            },1000);
            return;
        }
            setTodos([...todos, value])
            setValue('')
            navigate("/contacts")
    }

    return(
        <>
            
           <div className={styles.container}>  
           {
                error && <p className={styles.error}>{error}</p>
            }   
                <Input 
                placeholder="What are you going TO DO?"
                onEnter={addToDo}
                value={value}
                onChange={setValue}
                />
                <Button title="add todo" 
                onClick={addToDo}/>
                <div className={styles.todoContainer}>
                { todos.map((todoName) => (
                       <div className={styles.todo_container} key={todoName}>
                        <p>{todoName}</p>
                        <div className={styles.btnContainer}>
                        <button onClick={() => onEdit(todoName)}>pen</button>
                        <button onClick={() => onDelete(todoName)}>close</button>
                        </div>
                       </div>
                    ))}
                </div>
           </div> 
           
        </>
    )

}

export default ToDo;