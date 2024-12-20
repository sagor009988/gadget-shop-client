import { AiOutlineFilter } from "react-icons/ai";
import { RiResetLeftLine } from "react-icons/ri";


const Filter = () => {
    return (
        <div>
            <div className="flex items-center gap-3 justify-center ">
                <AiOutlineFilter size={24} />
                <h1 className="text-2xl font-semibold">Filter</h1>
            </div>
            <div className="mt-5 flex flex-col items-center gap-4">
                <div className="w-full">
                    <select className="p-[10px] w-full border  border-black rounded-lg" name="" id="">
                        <option selected>Brand</option>
                        <option selected>Home</option>
                        <option selected>Marge</option>
                    </select>
                </div>
                <div className="w-full">
                    <select className="p-[10px] w-full border  border-black rounded-lg" name="" id="">
                        <option selected>Brand</option>
                        <option selected>Home</option>
                        <option selected>Marge</option>
                    </select>
                </div>
            </div>
            <button className="btn btn-primary w-full mt-4"> <h1>Reset</h1><RiResetLeftLine /></button>
        </div>
    );
};

export default Filter;