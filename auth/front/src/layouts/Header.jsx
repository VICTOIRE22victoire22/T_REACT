import { useAuth } from "../contexts/AuthContext";

const Header = () => {
    const { user } = useAuth();
    return (
        <div>
            Bonjour {user?.name}
        </div>
    );
};

export default Header;