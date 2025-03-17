import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/contact'
import filterReducer from './reducers/filter'

const store = configureStore({
    reducer: {
        contact: contactReducer,
        filter: filterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store