import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Form = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg mt-10">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Login</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Enter your email below to login to your account
                    </p>
                </div>
                <form className="space-y-6">
                    <div>
                        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
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
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
                            <Link
                                href="/forgot-password"
                                className="text-sm text-blue-600 hover:text-blue-500"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                        <div className="mt-1">
                            <Input
                                id="password"
                                type="password"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <Button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Login
                    </Button>
                    <Button variant="outline" className="w-full py-2 px-4 mt-2 bg-white text-gray-700 font-medium border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Login with Google
                    </Button>
                </form>
                <div className="text-center text-sm text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link href="#" className="text-blue-600 hover:text-blue-500 underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Form;
