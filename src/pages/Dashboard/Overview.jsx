import useAuth from "../../hooks/useAuth";

const Overview = () => {
    const { user } = useAuth();
    console.log(user);

    return (
        <div className="flex justify-center items-center w-full h-full">
            <h2 className="text-5xl text-blue-600 font-extrabold text-center">{user?.email}</h2>
        </div>
    );
};

export default Overview;