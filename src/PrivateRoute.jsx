import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "./context/UserContext";


const PrivateRoutes = () => {
    const { loggedIn } = useContext(UserContext)
    console.log("loggedin", loggedIn)
    return (
        loggedIn ? <Outlet /> : <Navigate to='login' />
    )
}
export default PrivateRoutes