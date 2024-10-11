import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="min-h-[90svh] flex justify-center items-center">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 m-5">
                {/* <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2> */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Type your email here"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Type your password here"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={formData.remember}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label className="text-sm">Remember Me!</label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center mt-4">
                    Do not have an account?{' '}
                   <Link to="/register"><a className="text-indigo-500 font-semibold">Create One!</a></Link> 
                </p>
                <p className="text-sm text-center mt-2">
                    <a href="#" className="text-indigo-500">Forgot your password?</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
