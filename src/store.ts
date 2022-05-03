import {configureStore} from '@reduxjs/toolkit'
import { notesReducer } from './Reducers/notesReducer'

export const store = configureStore({reducer:notesReducer})


