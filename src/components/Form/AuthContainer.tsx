"use client"
import React, { useState } from 'react';
import Login from './Login';
import Registration from './Registration';

const AuthContainer = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthComponent = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg mt-10 mx-10">
            {isLogin ? (
                <Login toggleAuthComponent={toggleAuthComponent} />
            ) : (
                <Registration toggleAuthComponent={toggleAuthComponent} />
            )}
        </div>
    );
};

export default AuthContainer;
