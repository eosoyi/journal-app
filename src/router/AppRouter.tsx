import { Route, Routes } from "react-router-dom"
import AuthRoutes from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { useSelector } from "react-redux"
import { RootState } from "../store/Store"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useEffect } from "react"
import { FirebaseAuth } from '../firebase/config.js'
import { onAuthStateChanged } from "firebase/auth";



export const AppRouter = () => {
    const { status } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            console.log('user == ' ,user)
        });
    }, []);

    if (status === 'checking') {
        return <CheckingAuth></CheckingAuth>
    }

    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes></AuthRoutes>}></Route>
            <Route path="/*" element={<JournalRoutes></JournalRoutes>}></Route>
        </Routes>
    )
}
