import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

const LoggedRoutes = () => {
    const { user, isAuthLoaded } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && isAuthLoaded) {
            navigate('/');
        }
    }, [isAuthLoaded])


    if (!isAuthLoaded) {
        return <p>Chargement...</p>
    }

    return (
        <Outlet />
    );

};

export default LoggedRoutes;