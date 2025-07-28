import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isAuthLoaded, setIsAuthLoaded] = useState(false);
    const navigate = useNavigate();

    const fetchLoggedUser = async () => {
        try {
            const response = await fetch("http://localhost:3000/users/me", {
                credentials: "include"
            });

            if (!response.ok) {
                throw new Error;
            }

            const data = await response.json();
            setUser(data);
        } catch {
            navigate('/');
            setUser();
        } finally {
            setIsAuthLoaded(true);
        }
    }

    useEffect(() => {
        fetchLoggedUser();
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, fetchLoggedUser, isAuthLoaded }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);