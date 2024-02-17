import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

    const[userEmail, setuserEmail] = useState("");
    const[erroralert, setErrorAlert] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                // write code if wrong pass
                //console.log(response.status);
                if(response.status === 401){
                    setErrorAlert(true);
                }
                throw new Error('Network response was not ok');
            }else{
              console.log("sucess");
              sessionStorage.setItem("validUserEmail", formData.email);

            }
            // Redirect to dashboard after successful login
            window.location.href = '/dash';
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
                    Login
                </h2>

                {erroralert && (
                        <div className=' mb-2 flex justify-center items-start md:p-8 bg-red-100  '>
                        <p className="inline-block text-sm text-red-700 font-bold sm:text-base">
                            Wrong Email or Password
                        </p>
                       
                        </div>
                    )}
               
                <form onSubmit={handleSubmit} className="mx-auto max-w-lg rounded-lg border">

                    <div className="flex flex-col gap-4 p-4 md:p-8">
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>

                        <button type="submit" className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                            Log in
                        </button>
                    </div>
                    <div className="flex items-center justify-center bg-gray-100 p-4">
                    <p className="text-center text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link to={"/signup"} className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                            Register
                        </Link>
                    </p>
                </div>
                </form>
                
            </div>
        </div>
    );
}

export default Login;
