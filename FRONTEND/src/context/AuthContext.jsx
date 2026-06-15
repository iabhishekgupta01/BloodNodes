import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // Initialize synchronously from localStorage so protected routes
    // can read auth state on first render (avoids redirect on refresh).
    const getInitialAuth = () => {
        try {
            const token = localStorage.getItem("authToken");
            if (!token) return { role: null, id: null, token: null };

            // Safe decode of JWT payload
            const parts = token.split('.');
            if (parts.length < 2) return { role: null, id: null, token: null };

            const decoded = JSON.parse(atob(parts[1]));
            return { role: decoded.role || null, id: decoded.id || null, token };
        } catch (err) {
            // If decoding fails, clear local storage to avoid repeated errors
            localStorage.removeItem("authToken");
            return { role: null, id: null, token: null };
        }
    };

    const [authData, setAuthData] = useState(getInitialAuth);

    const login = (role, id, token) => {
        setAuthData({ role, id, token });
        try {
            localStorage.setItem("authToken", token);
        } catch (e) {
            // ignore localStorage failures
        }
    };

    const logout = () => {
        setAuthData({ role: null, id: null, token: null });
        try {
            localStorage.removeItem("authToken");
        } catch (e) {
            // ignore
        }
    };

    const isAuthenticated = !!authData.token;





    const value = {
        ...authData,
        login,
        logout,
        isAuthenticated,
    };



    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };


