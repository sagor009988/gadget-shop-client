import SearchBar from "../components/SearchBar";
import SortByPrice from "../components/SortByPrice";
import Filter from "../components/Products/Filter";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            const result = axios.get("")
        }
    }, [])

    return (
        <div className="container mx-auto px-24">
            <h1 className="text-4xl font-bold text-center my-4">All Products</h1>
            {/* search and sort */}
            <div className="lg:flex justify-between">
                <SearchBar></SearchBar>
                <SortByPrice></SortByPrice>
            </div>
            {/* content */}
            <div className="grid lg:grid-cols-12 pt-5 gap-5">
                <div className="col-span-2 bg-slate-300 p-4 rounded-t-lg min-h-screen">
                    <Filter></Filter>
                </div>
                <div className="col-span-10">Products</div>
            </div>
        </div>
    );
};

export default Products;