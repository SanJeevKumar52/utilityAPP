const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    notes: [
        { text: 'This is my new note ', createdOn: new Date() },
        { text: 'This is my 2nd new note ', createdOn: new Date() },
    ]
}
//creating Reducer using reduxtoolKit
const noteSlice = createSlice({
    name:'note',
    initialState:initialState,
    reducers:{
        add:(state,action)=>{
           state.notes.push({
            text:action.payload,
            createdOn: new Date()
           })
        },
        delete:(state,action)=>{
           state.notes.splice(action.payload,1);
        }
    }
})
export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;
export const noteSelector = (state)=>state.noteReducer.notes;

/* export function noteReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, {
                    text: action.text,
                    createdOn: new Date()
                }]
            }
        case DELETE_NOTE:
            state.notes.splice(action.index, 1);
            return {
                ...state,
                notes: [...state.notes]
            }
        default:
            return state;
    }
} */