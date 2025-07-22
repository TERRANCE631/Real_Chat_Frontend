import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, LogInPage, Profile, SettingsPage, SignUpPage } from "../pages";

export const AllRoutes = ({ authUser }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/loggin" />}></Route>
                <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />}></Route>
                <Route path="/loggin" element={!authUser ? <LogInPage /> : <Navigate to="/" />}></Route>
                <Route path="/settings" element={<SettingsPage />}></Route>
                <Route path="/profile" element={authUser ? <Profile /> : <Navigate to="/loggin" />}></Route>
            </Routes>
        </>
    )
};
