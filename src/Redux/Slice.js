import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'toDo',
    initialState: [],
    reducers: {
        addTask: (state,action) => {
            state.push(action.payload);
            localStorage.setItem('tasks',JSON.stringify(state));
        },
        removetask: (state,action) => {
          let newState =  state.filter((item)=>{
            return action.payload !== item.id;
          });
          localStorage.setItem('tasks',JSON.stringify(newState));
          return newState;
        },
        restoreTasks: (state,action) => {
          return action.payload;
        }
    }
  });

  const actions = counterSlice.actions;

export { counterSlice, actions }
