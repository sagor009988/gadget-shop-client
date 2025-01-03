import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';
import GoogleLogin from '../components/login-register/GoogleLogin';
import axios from 'axios';
import Swal from 'sweetalert2';

const Register = () => {
    const { CreateUser } = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate = useNavigate()

    const onsubmit = (data) => {
        console.log(data);

        const email = data.email;
        const role = data.role;
        const status = role === "Buyer" ? "approved" : "pending";
        const wishlist = [];
        const userData = { email, role, status, wishlist };

        CreateUser(data.email, data.password).then(() => {
            axios.post("http://localhost:5000/users", userData).then((data) => {
                if (data?.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registration successful !!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }

            })
        })

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onsubmit)}>
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
                            {errors.password?.type == "minLength" && (<p className='text-red-600 text-sm font-light'>Password must have at least 6 Characters </p>)}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: (value) => {
                                            if (watch("password") !== value) {
                                                return "Your password don't matched"
                                            }
                                        }
                                    })}
                                />
                                {errors.confirmPassword && (<p className='text-red-600 text-sm font-light'>Please match The password</p>)}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs"
                                    {...register("role", {
                                        required: true,

                                    })}
                                >

                                    <option>Buyer</option>
                                    <option>Seller</option>
                                </select>
                                {errors.role && (<p className='text-red-600 text-sm font-light'>Please match The password</p>)}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                        </form>
                        <div className="card-body">
                            <div>
                                <GoogleLogin></GoogleLogin>
                            </div>
                            <div>
                                <h1>Already have an account <Link to='/register'><span className='text-blue-700 cursor-pointer' >Click to Login</span></Link></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;