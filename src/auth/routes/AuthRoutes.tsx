import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export default function AuthRoutes() {
    return (
        <Routes>
            <Route path="login" element={<LoginPage></LoginPage>}></Route>
            <Route path="register" element={<RegisterPage></RegisterPage>}></Route>
            <Route path="/*" element={<Navigate to={"/auth/login"}></Navigate>}></Route>
        </Routes>
    )
}
