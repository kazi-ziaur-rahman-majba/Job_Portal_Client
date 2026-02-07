import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGoogleSignIn = () => {
        setLoading(true);
        setError(null);
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => {
                console.error('Google Sign In Error:', error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            {error && <div className="alert alert-error mb-3">{error}</div>}
            <button 
                type="button"
                onClick={handleGoogleSignIn} 
                disabled={loading}
                className="btn bg-white text-black w-full flex items-center justify-center gap-2"
            >
                <span>
                    <FcGoogle size={22} />
                </span>
                {loading ? 'Signing in...' : 'Continue with Google'}
            </button>
        </div>
    );
};

export default SocialLogin;