import {configureStore} from '@reduxjs/toolkit'
import globalReducer from './global-slice'

export default configureStore({
    reducer: globalReducer
})