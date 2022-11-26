import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import Lottie from 'lottie-react'
import logIn from '../../assets/login.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('')
    const { signIn, googleSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err));

    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                if (user) {
                    toast.success("Successfully Login With Google");
                }
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            });
    }


    return (
        <div>
            <div className='bg-base-200'>
                <h1 className="text-3xl md:text-5xl font-bold pb-0 pt-10 text-center ">Login now!</h1>
                <div className="hero max-w-screen-xl mx-auto w-full">

                    <div className="hero-content flex-col lg:flex-row mx-auto">
                        <div className="text-center lg:text-left">

                            <div className='h-full w-full'>
                                <Lottie animationData={logIn} loop={true} />
                            </div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body pb-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" />


                                </div>
                                <div className="text-red-500 py-1">
                                    {
                                        error && <p className='text-red-600'> {error}</p>
                                    }
                                </div>
                                <label className="label">
                                    <h1>Need Account? <span className='text-violet-500 font-semibold'> <Link to='/signup'>Click to Register</Link> </span></h1>
                                </label>
                                <div className="form-control ">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className="divider mx-6 mt-0">OR</div>


                            <button
                                onClick={handleGoogleSignIn}
                                className="btn w-[80%] mx-auto mb-10"><FaGoogle className='mr-2 text-2xl' >
                                </FaGoogle>Google Signin
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;