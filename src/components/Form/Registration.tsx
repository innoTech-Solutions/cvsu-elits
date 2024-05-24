"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface RegistrationProps {
    toggleAuthComponent: () => void;
}

const Registration: React.FC<RegistrationProps> = ({ toggleAuthComponent }) => {
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-orange-500">Registration</h1>
                <p className="mt-2 text-sm text-gray-600">
                    Enter your details below to create an account
                </p>
            </div>
            <form className="space-y-6">
                <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-orange-500">Email</Label>
                    <div className="mt-1">
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div>
                    <Label htmlFor="password" className="block text-sm font-medium text-orange-500">Password</Label>
                    <div className="mt-1">
                        <Input
                            id="password"
                            type="password"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div>
                    <Label htmlFor="confirmPassword" className="block text-sm font-medium text-orange-500">Confirm Password</Label>
                    <div className="mt-1">
                        <Input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <Button type="submit" className="w-full py-2 px-4 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Register
                </Button>
            </form>
            <div className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <span onClick={toggleAuthComponent} className="text-blue-600 hover:text-blue-500 underline cursor-pointer">
                    Login
                </span>
            </div>
        </>
    );
};

export default Registration;
