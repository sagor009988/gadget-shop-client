import Banner from "../components/home/Banner";
import Faq from "../components/home/Faq";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Reviews from "../components/home/Reviews";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                <div className="my-10">
                    <h1 className="text-5xl font-extrabold text-center text-orange-600 my-10">Features</h1>
                    <FeaturedProducts></FeaturedProducts>
                </div>
                <div className="my-10">
                    <h1 className="text-5xl font-extrabold text-center text-orange-600 my-10">Users Review </h1>
                    <Reviews></Reviews>
                </div>
                <div className="my-10">
                    <h1 className="text-5xl font-extrabold text-center text-orange-600 my-10">FAQ</h1>
                    <Faq></Faq>
                </div>
            </div>
        </div>
    );
};

export default Home;