import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FilterState = {
    name: string
}

const initialState: FilterState = {
    name: ''
}

const filterSlice = createSlice ({
    name: 'filter',
    initialState,
    reducers: {
        changeName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    }
})

export const { changeName } = filterSlice.actions

export default filterSlice.reducer