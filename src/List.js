import { useEffect, useState } from "react";
import { store } from "./Redux/Store";
import { actions } from "./Redux/Slice";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemText } from "@mui/material";
import { Button } from '@mui/material';

const ListComponent = () =>{
    const [todos, setTodos] = useState([]);


    useEffect(()=>{
        let tasks = localStorage.getItem('tasks');
        tasks = JSON.parse(tasks);
        store.dispatch(actions.restoreTasks(tasks??[]));
        setTodos(store.getState());
    },[])

    store.subscribe(()=>{
        setTodos(store.getState());
    });

    const removeTask = (id) =>{
        store.dispatch(actions.removetask(id));
    };

    return (
        <List>
        {
        todos.map((item,key)=>{
            return (
            <ListItem key={key}>
                 <ListItemText primary={item.task} />
                <Button color="error" onClick={()=>{removeTask(item.id)}}>Delete</Button>
                <br></br>
            </ListItem>
            )
        })
        }
        </List>
    )
};

export default ListComponent;