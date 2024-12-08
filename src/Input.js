import { useState } from "react";
import { store } from "./Redux/Store";
import {v4 as uuidv4} from 'uuid';
import { actions } from "./Redux/Slice";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const InputComponent = () =>{

    const [input,setInput] = useState("");
    const addTask = () =>{
        if(input === ""){
            return;
        }
        let task = {
            id: uuidv4(),
            task: input
        };
        store.dispatch(actions.addTask(task));
        setInput("");
    };

    const handleChange = (event)=>{ 
        setInput(event.target.value);

    }

    return (
        <>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControl>
                <FormLabel fullwidth="true" htmlFor="email" style={{ textAlign: 'center' }}>TaskTracker</FormLabel>
                <TextField type="text" value={input} onChange={handleChange} onKeyUp={(event) => { event.key === "Enter" && addTask();}}/>
                    <Button fullwidth="true" variant="outlined" onClick={addTask}>Save</Button>
            </FormControl>
        </Box>
        </>
    );

};

export default InputComponent;