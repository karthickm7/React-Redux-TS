import { Action } from "./actions";

//Type of our state
export interface Notestate{
    notes:string[]
}

const initialState ={
    notes:[]
}


//Reducer
export const notesReducer =(state:Notestate=initialState,action:Action)=>{
    switch(action.type){
        case "ADD_NOTE" : {
            return {...state,notes:[...state.notes , action.payload]}
        }
        default:
            return state;
    }

}