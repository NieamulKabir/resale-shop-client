import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react'
import register from '../../assets/register.json'
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {



const{createUser}= useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();
const from = location.state?.from?.pathname || '/';

const handleSignUp =e=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email,password)
    .then(result =>{
        const user = result.user;
        navigate(from, { replace: true });

    })
    .catch(err=>console.error(err))
}

    return (
        <div>

            <div className='bg-base-200'>
                <h1 className="text-3xl md:text-5xl font-bold pb-0 pt-10 text-center">Register now!</h1>
                <div className="hero max-w-screen-xl mx-auto ">

                    <div className="hero-content flex-col lg:flex-row mx-auto">
                        <div className="text-center lg:text-left">
                            <div>
                                <div className='h-full w-full'>
                                    <Lottie animationData={register} loop={true} />
                                </div>

                            </div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSignUp} className="card-body pb-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                    <label className="label">
                                        <h1>Have An Account ? <span className='text-violet-500 font-semibold'> <Link to='/login'>Click to Login</Link> </span> </h1>
                                    </label>
                                </div>
                                {/* <div className="text-red-500 my-1">
                                    {error}
                                </div> */}
                                <div className="form-control mb-0">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>

                            <div className="divider mx-6 mt-0">OR</div>

                            <button

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

export default SignUp;