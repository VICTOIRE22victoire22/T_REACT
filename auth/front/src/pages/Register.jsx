const Register = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch("http://localhost:3000/users/register", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        /**
         * {
                name,
                email,
                password
            }
                Pareil que :
            {
                name: name,
                email: email,
                password: password
            }
         */

        const data = await response.json();
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" />
            <br />
            <label htmlFor="email">Courriel</label>
            <input type="email" id="email" name="email" />
            <br />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" />

            <button>S'inscrire</button>
        </form>
    );
};

export default Register;