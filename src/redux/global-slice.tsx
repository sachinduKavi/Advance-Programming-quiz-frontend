import {createSlice} from '@reduxjs/toolkit'
import MultiChoiceInterface from '../DataModels/MultiChoiceModel'


const initialState = {
    value: ''
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setValue } = globalSlice.actions
export default globalSlice.reducer