import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const user = { username, password, email };
        await axios.post('/api/users/signup', user);
        alert('Registration successful! Please login.');
        setUsername('');
        setPassword('');
        setEmail('');
    };

    return (
        <form onSubmit={handleRegister}>
            <h3>Sign Up</h3>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <br />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <br />
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <br />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
