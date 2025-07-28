import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

const UnloggedRoutes = () => {
    const { user, isAuthLoaded } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user && isAuthLoaded) {
            navigate('/profil');
        }
    }, [isAuthLoaded])


    if (!isAuthLoaded) {
        return <p>Chargement...</p>
    }

    return (
        // Outlet permet d'afficher la page qui est censée s'afficher, par exemple si je suis sur /inscription
        // Outlet prendra la valeur du component Register
        // tel que défini dans le router
        <Outlet />
    );
};

export default UnloggedRoutes;