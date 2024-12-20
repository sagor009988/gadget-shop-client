import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const UserDropdown = () => {
    const { user, logOut } = useAuth();



    const handleLogOut = () => {
        logOut()


    }
    return (
        <div>
            <div className="dropdown dropdown-end">

                <div tabIndex={0} role="button" >
                    <div className="avatar online">
                        <div className="w-12 rounded-full">
                            <img src={`${user?.
                                photoURL
                                || './img/man.png'}`} />
                        </div>
                    </div>
                </div>

                <ul tabIndex={0} className="dropdown-content flex gap-4  menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li>
                        <Link to='/dashboard' >
                            Dashboard
                        </Link >
                    </li>
                    <li>
                        <Link >
                            <button onClick={handleLogOut}>Logout</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserDropdown;