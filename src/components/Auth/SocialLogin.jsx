import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn bg-white text-black w-full flex items-center justify-center gap-2">
                <span>
                    <FcGoogle size={22} />
                </span>
                Continue with Google
            </button>
            
        </div>
    );
};

export default SocialLogin;