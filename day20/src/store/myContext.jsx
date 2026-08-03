import { createContext, useEffect, useMemo, useState } from "react";

const myContext = createContext({
    user: null,
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        try {
            const raw = localStorage.getItem('foodies_current_user');
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && parsed.email) {
                    // eslint-disable-next-line react-hooks/set-state-in-effect
                    setUser(parsed);
                    setIsLoggedIn(true);
                }
            }
        // eslint-disable-next-line no-unused-vars
        } catch (e) {
            // ignore
        }
    }, []);

    function login(nextUser) {
        setUser(nextUser);
        setIsLoggedIn(true);
        localStorage.setItem('foodies_current_user', JSON.stringify(nextUser));
    }

    function logout() {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('foodies_current_user');
    }

    const value = useMemo(() => ({ user, isLoggedIn, login, logout }), [user, isLoggedIn]);

    return (
        <myContext.Provider value={value}>
            {children}
        </myContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default myContext;