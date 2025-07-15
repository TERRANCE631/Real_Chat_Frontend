import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, LogInPage, SettingsPage, SignUpPage } from "../pages";

export const AllRoutes = ({ authUser }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/loggin" />}></Route>
                <Route path="/signup" element={<SignUpPage />}></Route>
                <Route path="/loggin" element={<LogInPage />}></Route>
                <Route path="/settings" element={authUser ? <SettingsPage /> : <Navigate to="/loggin" />}></Route>
            </Routes>
        </>
    )
};