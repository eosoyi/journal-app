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
            state.messageSaved = '';
        },

        setNotes: (state, action) => {
            state.notes = action.payload;
        },

        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },

        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes?.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            });

            state.messageSaved = `${action.payload.title}, actualizada correctamente`;
        },

        setPhotosToActiveNote: (state, active) => {
            state.active.imageUrls = [...state.active.imageUrls, ...active.payload];
        },

        deleteNoteById: (state, action) => {
            state.active = null;
            state.notes = state.notes?.filter( note => note.id !== action.payload);
        },

        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        }

    },
})

export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, setPhotosToActiveNote, clearNotesLogout } = journalSlice.actions

export default journalSlice.reducer