import {
    createSlice
} from "@reduxjs/toolkit";
import { RootState } from "../store";

type TItem = {
    task: string,
    id: string,
    status: string
}

export type TInitialState = {
    data: Array<TItem>,
}

const initialState: TInitialState = {
    data: []
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addNewTask(state, action) {
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        },
        deleteTask(state, action) {
            return {
                data: [...action.payload]
            }
        },
        changeStatusTask(state, action) {

            return {
                data: state.data.map(item => {
                    if (item.id === action.payload) {
                        if (item.status === 'todo') {
                            return {
                                ...item,
                                status: 'done'
                            }
                        } else {
                            return {
                                ...item,
                                status: 'todo'
                            }
                        }
                    } else {
                        return item;
                    }

                })
            }
        },
        default: (state) => state
    }
})


export const {
    addNewTask,
    deleteTask,
    changeStatusTask
} = tasksSlice.actions;
export const data = (state: RootState) => state.tasks;
export default tasksSlice.reducer;