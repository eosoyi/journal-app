import { Dispatch } from "@reduxjs/toolkit"
import { doc, collection, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config.js'
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice.js"
import { loadNotes } from "../../helpers/loadNotes.js"
import { fileUpload } from "../../helpers/fileUpload.js"

export const startNewNote = () => {
    return async (dispatch: Dispatch, getState) => {

        dispatch(savingNewNote());

        const { uid } = getState().auth;

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        const resp = await setDoc(newDoc, newNote);
        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote))
    }
}

export const startLoadingNotes = () => {
    return async (dispatch: Dispatch, getState) => {
        const { uid } = getState().auth;

        if (!uid) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes(uid);

        dispatch(setNotes(notes));
    }
}

export const startSaveNote = () => {
    return async (dispatch: Dispatch, getState) => {
        dispatch(setSaving());
        const { uid } = getState().auth;
        const { active } = getState().journal;
        const noteToFirestore = { ...active };
        delete noteToFirestore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${active.id}`);
        await setDoc(docRef, noteToFirestore, { merge: true });

        dispatch(updateNote(active));
    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch: Dispatch) => {
        dispatch(setSaving());
        // creamos un arreglo de promesas
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push( fileUpload(file) );
        }
        const photosUrls = await Promise.all(fileUploadPromises);
        dispatch(setPhotosToActiveNote(photosUrls));
    }
}