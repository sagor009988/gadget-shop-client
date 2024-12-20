/* eslint-disable react/prop-types */

const AllProductCard = ({ product }) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure className="h-60">
                    <img
                        src={product?.imageURL}
                        alt="Product image" className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-semibold">MODE: {product?.title}</h2>
                    <h2 className="card-title ">Brand: {product?.brand}</h2>
                    <h2 className="card-title ">Category: {product?.category}</h2>
                    <h2 className="card-title text-blue-600 ">Price: {product?.price} tk.</h2>
                    <h2 className="text-rose-600">Stock: {product?.stock}</h2>
                    <p>{product?.description.length < 50 ? `${product.description}` : `${product.description.slice(0, 50)}....`}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductCard;