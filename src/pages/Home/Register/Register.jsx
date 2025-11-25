import Lottie from 'lottie-react';
import React from 'react';
import registerLottie from '../../../assets/register.json';

const Register = () => {
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <Lottie style={{ width: '400px', height: '400px', margin: 'auto' }} animationData={registerLottie} loop={true} />
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="Name" name="name" />
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name="email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name="password" />
                                <button className="btn btn-neutral mt-4">Register</button>
                                <div className="mt-2">
                                    <span>Already have an account? </span>
                                    <a className="link link-hover" href="/login">Login here</a>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;