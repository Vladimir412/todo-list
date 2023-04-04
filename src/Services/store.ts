import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from './Reducers/redusers'

const rootStore = configureStore({
    reducer: {
        tasks: tasksSlice,
    }
})


export default rootStore
export type RootState = ReturnType<typeof rootStore.getState>
export type AppDispatch = typeof rootStore.dispatch