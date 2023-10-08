import { useState, useEffect } from "react";
import UserContext from "./UserContext";
import Cookies from "js-cookie";

export const UserContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        const accessToken = Cookies.get("AccessToken");

        if (accessToken) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);

    return (
        <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};
