import { Dispatch } from "@reduxjs/toolkit"
import { doc, collection, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config.js'
import { addNewEmptyNote, setActiveNote } from "./journalSlice.js"

export const startNewNote = () => {
    return async (dispatch: Dispatch, getState) => {
        const { uid } = getState().auth;

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        const resp = await setDoc(newDoc, newNote);
        console.log({ newNote, resp })
        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote))
    }
}