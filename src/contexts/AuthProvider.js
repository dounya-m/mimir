import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import jwt_decode from 'jwt-decode';


const AuthProvider = ({ children }) => {

        const [user, setUser] = useState(null);
        const [token, setToken] = useState(null);

        useEffect(() => {
            const storedToken = localStorage.getItem('token');
            if(storedToken) {
                setToken(storedToken);
                const decodedToken = jwt_decode(storedToken);
                console.log(decodedToken);
                setUser(decodedToken.user); 
            
            }
        },  []);

        const login = async (email, password) => {
            try {
            const response = await fetch('http://localhost:5000/api/mimir/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                const data = await response.json();
                const { token, user } = data;
                localStorage.setItem('token', token);
                setToken(token);
                setUser(user);
                return { success: true };
            } else {
                const errorData = await response.json();
                return { success: false, message: errorData.message };
            }
            } catch (error) {
            return { success: false, message: 'Something went wrong. Please try again later.' };
            }
        };
        const logout = () => {
            localStorage.removeItem('token');
            setToken(null);
            setUser(null);
        };
        
        const value = { user, token, login, logout };
        return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

    };

    export default AuthProvider;