import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin().then(() => {

            navigate("/")
        })
    }
    return (
        <div>
            <div className="divider divider-success">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-primary btn-outline w-full"><FcGoogle className="size-9" />Google Login</button>

        </div>
    );
};

export default GoogleLogin;