import React, { useState } from 'react';
import '../css/Login.css'
import { ChakraProvider } from '@chakra-ui/react';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {

        if (username === 'user' && password === 'password') {
            setError('');
            alert('Inicio de sesión exitoso');
        } else {
            setError('Usuario o contraseña incorrecta');
        }
    }

    return (
        <ChakraProvider>
            <div className="login-container">
            <h1 className="login-title">BOOK ME</h1>
            <input
                type="text"
                className="login-input"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                className="login-input"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-button" onClick={handleLogin}>
                Iniciar Sesión
            </button>
            <button className="login-button-apple">
                Iniciar con Apple ID
            </button>
            {error && <p className="login-error">{error}</p>}
        </div>
        </ChakraProvider>
    );
};

