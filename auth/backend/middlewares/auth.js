const jwt = require('jsonwebtoken');
const JWT_SECRET = 'dsnfjkldsf128321houiew1qbe15691#@$*^&%#';

const verifyToken = async (req, res, next) => {
    // Token car dans usercontroller on a crée le cookie "token"
    const { token } = req.cookies;

    if (!token) {
        return res.status(403).json("Vous n'etes pas connecté");
    }

    try {
        // le decoded token correspond a ce qu'on avais mis dans le jwt.sign dans le controller :
        // jwt.sign({ id: user._id })
        // donc on peux recuperer decodedToken.id qui contient le user._id
        const decodedToken = jwt.verify(token, JWT_SECRET);
        req.userId = decodedToken.id;
        // Si tout se passe bien, alors on passe a la fonction d'apres (par exemple la fonction du controller)
        next();
    } catch {
        res.status(401).json("Non autorisé");
    }
}

module.exports = verifyToken;