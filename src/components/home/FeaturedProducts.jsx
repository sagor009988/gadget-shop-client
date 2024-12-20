import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
    return (
        <div className="my-10">

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default FeaturedProducts;