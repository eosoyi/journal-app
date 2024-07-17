import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    isSaving: boolean,
    messageSaved: string,
    notes?: [],
    active?: {} | null,
}

const initialState: CounterState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
}

export const journalSlice = createSlice({
    name: 'journal',

    initialState: initialState,

    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },

        addNewEmptyNote: (state, action) => {
            state.notes?.push(action.payload);
            state.isSaving = false;
        },

        setActiveNote: (state, action) => {
            state.active = action.payload;
        },

        setNotes: (state, action) => {
            state.notes = action.payload;
        },

        setSaving: (state) => {
            console.log('setSaving')
        },

        updateNote: (state, action) => {
            console.log('updateNote')
        },

        deleteNoteById: (state, action) => {
            console.log('deleteNoteById')
        },

    },
})

export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions

export default journalSlice.reducer