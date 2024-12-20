import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import useUserData from "../../../src/hooks/useUserData"
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineInventory2 } from "react-icons/md";


const sellerRoutes = [
    {
        id: 1,
        route: "/dashboard/my-products",
        title: "My Products",
        icon: <MdOutlineInventory2 />
    },
    {
        id: 2,
        route: "/dashboard/add-products",
        title: "Add Products",
        icon: < IoIosAddCircleOutline />
    }
]



const Sidebar = () => {

    const userData = useUserData({});
    //   console.log("checking", userData);

    return (
        <div className="bg-gray-300 border-r-4 border-black min-h-screen py-10">

            <ul className="flex flex-col gap-4 justify-center items-center px-4">
                <h1 className="text-3xl text-orange-400  font-extrabold border-b-2">Gadget Shop</h1>

                <li className="btn w-full btn-outline"><NavLink to="/dashboard/overview" className="flex  gap-2 font-bold"><GrOverview className="size-4 font-extrabold" />Overview</NavLink></li>

                {
                    userData?.role == "Seller" && sellerRoutes.map((route) => {
                        return <li key={route.id} className="btn btn-outline w-full"><NavLink to={route.route} className="flex  gap-2 font-bold">< >{route.icon}</> {route.title}</NavLink></li>

                    })
                }


                {/* {
                    userData?.role == "Seller" ? "h1" : "h2"
                } */}





                <li className="btn btn-outline w-full" ><NavLink to="/" className="flex  gap-2 font-bold"><IoHomeOutline className="size-4 font-extrabold" />Home</NavLink></li>

                <li className="btn btn-outline w-full" ><NavLink to="/" className="flex  gap-2 font-bold"><RiLogoutBoxLine className="size-4 font-extrabold" />LogOut</NavLink></li>
            </ul>
        </div>
    );
};

export default Sidebar;