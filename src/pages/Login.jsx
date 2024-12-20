import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';
import GoogleLogin from '../components/login-register/GoogleLogin';

const Login = () => {
    const { login } = useAuth();


    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()

    const onsubmit = (data) => {
        login(data.email, data.password)
        navigate("/")
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onsubmit)} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true, minLength: 6 })}
                                />
                                {errors.email?.type == "required" && (<p className='text-red-600 text-sm font-light'>Email is required </p>)}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true, minLength: 6 })} />
                            </div>
                            {errors.password?.type == "required" && (<p className='text-red-600 text-sm font-light'>password is required </p>)}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                        </form>
                        <div className="card-body">
                            <div>
                                <GoogleLogin></GoogleLogin>
                            </div>
                            <div>
                                <h1>New Here? <Link to='/register'><span className='text-blue-700 cursor-pointer' >Click To Register</span></Link></h1>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;