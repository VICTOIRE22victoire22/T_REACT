import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            // Permet a fetch d'autoriser la creation de cookie via le back-end
            // et d'envoyer les cookies déja crée au backend (pour verifier la personne connectée par ex)
            credentials: "include",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json();

        setUser(data);
        navigate('/profil')
    }


    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="email">Email :</label>
            <input type="email" name="email" id="email" required />
            <br />
            <label htmlFor="password">Mot de passe :</label>
            <input type="password" name="password" id="password" required />
            <br />
            <button type="submit">Se connecter</button>
        </form>
    );
};

export default Login;