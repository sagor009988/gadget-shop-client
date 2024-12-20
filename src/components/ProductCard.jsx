
const ProductCard = () => {
    return (
        <div className="card bg-base-100  shadow-xl">
            <figure>
                <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone16prohero-202409_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1725567599334"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Apple gadget</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;