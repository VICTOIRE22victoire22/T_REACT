import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Header from './layouts/Header';
import { AuthProvider } from './contexts/AuthContext.jsx'
import UnloggedRoutes from './layouts/UnloggedRoutes.jsx';
import LoggedRoutes from './layouts/LoggedRoutes.jsx';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>

          {/* Permet d'encapsuler toutes les routes ou on ne doit pas etre connecté */}
          {/* Si on est connecté, alors avant meme d'afficher Login ou Register, on est redirigé vers Profile */}
          <Route element={<UnloggedRoutes />}>
            <Route path="/" element={<Login />} />
            <Route path="/inscription" element={<Register />} />
          </Route>

          {/* Meme chose ici, si on est pas connecté, alors ca redirige vers / donc vers Login */}
          <Route element={<LoggedRoutes />}>
            <Route path="/profil" element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
