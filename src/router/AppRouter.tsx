import { Route, Routes } from "react-router-dom"
import AuthRoutes from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useCheckAuth } from "../hooks/useCheckAuth.js"



export const AppRouter = () => {
    const { status } = useCheckAuth();
    console.log(status)
    if (status === 'checking') {
        return <CheckingAuth></CheckingAuth>
    }

    return (
        <Routes>
            {
                (status === 'authenticated')
                    ? <Route path="/*" element={<JournalRoutes></JournalRoutes>}></Route>
                    : <Route path="/auth/*" element={<AuthRoutes></AuthRoutes>}></Route>
            }
        </Routes>
    )
}
