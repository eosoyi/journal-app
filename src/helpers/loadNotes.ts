import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config.js';


export const loadNotes = async (uid: string = '') => {
    if (!uid) throw new Error('El UID del usuario no existe');

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    console.log(docs)
}