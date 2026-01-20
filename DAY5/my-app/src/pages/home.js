import React, { useEffect } from 'react'
import Slider from "react-slick";
import { useLocation } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {

    const location = useLocation()
    useEffect(() => {
        if (location.hash) {
            const target = document.querySelector(location.hash);
            target?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <div className='flex-row items-center justify-between "w-full px-4"'>
            <img src="https://dailydhaga.com/cdn/shop/files/D_04.jpg?v=1746254327&width=3840"></img>
            <section id='new' className='p-8 overflow-x-hidden'>

                <h1 className='text-center text-5xl font-thin p-6'> New Arrivals </h1>
                <h1 className='text-center text-xl font-thin p-3'>Hand-crafted and personally chosen from the best for you</h1>
                <Slider {...settings}>
                    <div className='p-2'>

                        <img src="https://dailydhaga.com/cdn/shop/files/10_15bbcb62-a246-4ca9-a68b-eff6bc4d6826.png?v=1741103500&width=533 "></img>
                        <p className='text-lg font-extralight'>  Velvet Bloom Co-ord Set </p>
                        <p className='text-lg font-extralight '>
                            <span className='text-lg font-extralight line-through'> Rs. 2,995.00</span>

                            <span className='text-lg font-extralight'> Rs. 2,295.00</span>
                        </p>
                    </div>
                    <div className='p-2'>
                        <img src="https://dailydhaga.com/cdn/shop/files/71_6fea5176-ef80-4d81-b52c-6957bdf1d9ac.png?v=1729181387&width=533 "></img>
                        <p className='text-lg font-extralight'>  Celestial Floral Georgette Suit </p>
                        <p className='text-lg font-extralight '>
                            <span className='text-lg font-extralight line-through'> Rs. 2,995.00</span>

                            <span className='text-lg font-extralight'> Rs. 2,295.00</span>
                        </p>
                    </div>
                    <div className='p-2'>
                        <img src="https://dailydhaga.com/cdn/shop/files/175_8675219d-d600-4f02-98e5-d1ca36b94923.png?v=1722434722&width=533"></img>
                        <p className='text-lg font-extralight'> Bandhani Grace Chinon Anarkali Set </p>
                        <p className='text-lg font-extralight '>
                            <span className='text-lg font-extralight line-through'> Rs. 3,875.00</span>

                            <span className='text-lg font-extralight'> Rs. 3,145.00</span>
                        </p>
                    </div>
                    <div className='p-2'>
                        <img src="https://dailydhaga.com/cdn/shop/files/119_e19deadc-dd91-42a4-859a-bb0cb7bc211f.png?v=1729100538&width=533"></img>
                        <p className='text-lg font-extralight'>  Pink Petal Handblock Set </p>
                        <p className='text-lg font-extralight '>
                            <span className='text-lg font-extralight line-through'> Rs. 3,895.00</span>

                            <span className='text-lg font-extralight'> Rs. 3,295.00</span>
                        </p>
                    </div>
                    <div className='p-2'>
                        <img src="https://dailydhaga.com/cdn/shop/files/7_9c4a0773-39e6-4407-a31b-6674650bcf07.png?v=1768318267&width=990"></img>
                        <p className='text-lg font-extralight'>  Celestial Floral Georgette Suit </p>
                        <p className='text-lg font-extralight '>
                            <span className='text-lg font-extralight line-through'> Rs. 2,765.00</span>

                            <span className='text-lg font-extralight'> Rs. 2,095.00</span>
                        </p>
                    </div>
                    <div className='p-2'>
                        <img src="https://dailydhaga.com/cdn/shop/files/77_653ed396-3bfa-491d-b350-18b1a93fcba5.png?v=1768303914&width=990"></img>
                        <p className='text-lg font-extralight'>  Velvet Bloom Co-ord Set </p>
                        <p className='text-lg font-extralight '>
                            <span className='text-lg font-extralight line-through'> Rs. 3,595.00</span>

                            <span className='text-lg font-extralight'> Rs. 2,876.00</span>
                        </p>
                    </div>

                </Slider>
            </section>

            <section id='best' className='p-8'>
                <h1 className='text-center text-5xl font-thin p-6'> Best Sellers </h1>
                <h1 className='text-center text-xl font-thin p-3'>Hand-crafted and personally chosen from the best for you</h1>
                <Slider {...settings}>
                    <div className='p-2'>

                        <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdc57ph2vwo-i3IdvQqMmY1w0nzHDs7-EZiA&s "></img>
                        <p className='text-lg font-extralight'>  Pink Petal Handblock Set </p>
                        <p className='text-lg font-extralight '>
                            <span className='text-lg font-extralight line-through'> Rs. 2,995.00</span>

                            <span className='text-lg font-extralight'> Rs. 2,295.00</span>
                        </p>

                    </div>
                    <div className='p-2'>
                        <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkgK0mCnd7NUD5IjH_L9AUUP0fsZGPWrUiw&s"></img>
                        <p className='text-lg font-extralight'>  Bandhani Grace Chinon Anarkali Set </p>
                        <p className='text-lg font-extralight '>
                            <span className='text-lg font-extralight line-through'> Rs. 3,958.00</span>

                            <span className='text-lg font-extralight'> Rs. 3,295.00</span>
                        </p>
                    </div>
                    <div className='p-2'>
                        <img className="w-full h-full" src="https://dailydhaga.com/cdn/shop/files/122_c9b11be9-f821-4246-b157-0c4bd7816132.png?v=1722435116&width=533"></img>
                        <p className='text-lg font-extralight'>  Celestial Floral Georgette Suit </p>
                        <p className='text-lg font-extralight '>
                            <span className='text-lg font-extralight line-through'> Rs. 2,985.00</span>

                            <span className='text-lg font-extralight'> Rs. 2,225.00</span>
                        </p>
                    </div>
                    <div className='p-2'>
                        <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAn6uhB6r_HaWNQ7swSrX-dlhXadWdywiSg&s"></img>
                        <p className='text-lg font-extralight'>  Velvet Bloom Co-ord Set </p>
                        <p className='text-lg font-extralight '>
                            <span className='text-lg font-extralight line-through'> Rs. 1,495.00</span>

                            <span className='text-lg font-extralight'> Rs. 1,225.00</span>
                        </p>
                    </div>
                    <div className='p-2'>
                        <img className="w-full h-full" src="https://dailydhaga.com/cdn/shop/files/Regal_Glamour_Lime_Yellow_Co-ord_Set.webp?v=1755784970&width=990"></img>
                        <p className='text-lg font-extralight'>  Celestial Floral Georgette Suit </p>
                        <p className='text-lg font-extralight '>
                            <span className='text-lg font-extralight line-through'> Rs. 2,995.00</span>

                            <span className='text-lg font-extralight'> Rs. 2,295.00</span>
                        </p>
                    </div>
                    <div className='p-2'>
                        <img className="w-full h-full" src="https://dailydhaga.com/cdn/shop/files/RainbowThreads7.png?v=1755098861&width=990"></img>
                        <p className='text-lg font-extralight'>  Celestial Floral Georgette Suit </p>
                        <p className='text-lg font-extralight '>
                            <span className='text-lg font-extralight line-through'> Rs. 3,875.00</span>

                            <span className='text-lg font-extralight'> Rs. 3,195.00</span>
                        </p>
                    </div>
                </Slider>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
            </section>
            <section id="ourjourney">
                <h1 className='text-center text-5xl font-thin p-6 bg-gray-50'>Think roomy. Think comfortable! </h1>
                <p className='text-center  text-2xl font-thin p-6 bg-gray-50'> True to its name, Daily Dhaga finds inspiration in festive and daily wear pieces that are steeped in a classic sensibility. Think oversized florals, delicate embroideries and happy hues!</p>

                <p className='text-center  text-2xl font-thin p-6 bg-gray-50'>Our collection has pieces that are perfect to flaunt at a festive event, at a friend's party or for a casual meeting with friends. Our outfits can translate from brunch to mehendi in a jiffy. </p>
                <div className='flex flex-row gap-10 items-center'>
                    <img src="https://dailydhaga.com/cdn/shop/files/abt-us.jpg?v=1701503410&width=1070"></img>
                    <div className="flex flex-col gap-8">
                        <h1 className="text-4xl ">About Us</h1>

                        <p className='text-2xl font-thin'>
                            Daily Dhaga was launched in 2023 by Devanshi Savla, a management
                            graduate, with a mission to offer a pocket friendly clothing line
                            that has chic, comfortable and trending outfits for women.
                        </p>

                        <p className='text-2xl font-thin'>
                            Curated keeping the modern woman in mind as well as women of all
                            ages, our kurtas, dresses, dupatta sets and co-ord sets can take
                            you to celebratory occasions and beyond, while becoming a part of
                            your regular rotation effortlessly.
                        </p>
                    </div>
                </div>
                <h1 className='text-center text-5xl font-thin p-6 bg-gray-50'>Daily Dhaga wears its ‘Made in India' tag proudly and is the preferred destination for contemporary and ethnic fusion.  </h1>
                <p className='text-center  text-2xl font-thin p-6 bg-gray-50'>The kurta is only the foundation here, the real highlights are the accompanying palazzos and dupattas—intricately detailed with colourful hues and scalloped trims.

                    With the lines between work, formal and lounge wear blurring in your closet, it’s time to shop in a direction that will work in your favour for years to come. </p>
                <div className='flex flex-row gap-10 items-center'>
                    <div className="flex flex-col gap-8">
                        <h1 className="text-4xl ">Perfect for Every Occasion</h1>

                        <p className='text-2xl font-thin'>
                            Throw it on for an unplanned event at your friend's wedding, wear it to a
                            visit to your grandparents',
                            or take it out for a puja at home—kurtas have long been the backbone of every girl's Indian wear collection.
                        </p>

                        <p className='text-2xl font-thin'>
                            Easy to dress up and comfortable enough to survive long hours of revelry,
                            our kurta sets score
                            high on versatility and ease of wear.Eclectic and printed patterns are the mainstay of our brand.
                        </p>
                    </div>
                    <img src="https://dailydhaga.com/cdn/shop/files/unnamed_cleanup.png?v=1700629328&width=1070"></img>

                </div>

            </section>
            <section id='contact'>
                <h1 className='text-center text-5xl font-thin p-6'> Connect with Us </h1>
                <div className='grid grid-cols-5 gap-10 px-6'>
                    <div className=" p-8 text-center flex flex-col items-center justify-center">
                        <img
                            src="https://dailydhaga.com/cdn/shop/files/telephone_1.png?v=1701503735&width=200"
                            className="w-20 h-20"
                        />
                        <h3 className="text-xl font-medium">
                            call us
                        </h3>
                    </div>
                    <div className=" p-8 text-center flex flex-col items-center justify-center">
                        <img
                            src="https://dailydhaga.com/cdn/shop/files/email_1_1.png?v=1701503736&width=200"
                            className="w-20 h-20"
                        />
                        <h3 className="text-xl font-medium">
                            Email Us
                        </h3>
                    </div>
                    <div className=" p-8 text-center flex flex-col items-center justify-center">
                        <img
                            src="https://dailydhaga.com/cdn/shop/files/whatsapp_1.png?v=1701503736&width=200"
                            className="w-20 h-20"
                        />
                        <h3 className="text-xl font-medium">
                            Whatsapp
                        </h3>
                    </div>
                    <div className=" p-8 text-center flex flex-col items-center justify-center">
                        <img
                            src="https://dailydhaga.com/cdn/shop/files/social_1.png?v=1701503735&width=200"
                            className="w-20 h-20"
                        />
                        <h3 className="text-xl font-medium">
                            Instagram
                        </h3>
                    </div>
                    <div className=" p-8 text-center flex flex-col items-center justify-center">
                        <img
                            src="https://dailydhaga.com/cdn/shop/files/facebook_1.png?v=1701503735&width=200"
                            className="w-20 h-20"
                        />
                        <h3 className="text-xl font-medium">
                            Facebook
                        </h3>
                    </div>
                </div>
            </section>
            <h1 className='text-center text-5xl font-thin p-6'> Why Choose Us </h1>
            <div className='grid grid-cols-4 gap-8 px-6'>
                <div className="bg-gray-50 p-8 text-center flex flex-col items-center justify-center">
                    <img
                        src="https://img.freepik.com/premium-vector/vector-design-affordable-pricing-icon-style_1134108-111397.jpg"
                        className="w-20 h-20"
                    />
                    <h3 className="text-xl font-medium">
                        Reasonable Pricing
                    </h3>
                    <p className="text-gray-600">
                        We strive to offer the most affordable and competitive rates to our valued clients.
                    </p>
                </div>
                <div className="bg-gray-50 p-8 text-center flex flex-col items-center justify-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8Pxc_d58zrnrKwDi26IKR6F9HTRRlacF5Q&s"
                        className="w-20 h-20"
                    />
                    <h3 className="text-xl font-medium">
                        Premium Quality Fabric
                    </h3>
                    <p className="text-gray-600">
                        We use high quality fabrics to ensure utmost comfort and durability of our garments.
                    </p>
                </div>
                <div className="bg-gray-50 p-8 text-center  flex flex-col items-center justify-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/591/591861.png"
                        className="w-20 h-20"
                    />
                    <h3 className="text-xl font-medium">
                        Easy Exchange
                    </h3>
                    <p className="text-gray-600">
                        We understand that fabric & fit can vary, so we offer easy 10-day exchange or return.
                    </p>
                </div>
                <div className="bg-gray-50 p-8 text-center flex flex-col items-center justify-center">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/002/206/240/small_2x/fast-delivery-icon-free-vector.jpg"
                        className="w-20 h-20"
                    />
                    <h3 className="text-xl font-medium">
                        Free Shipping
                    </h3>
                    <p className="text-gray-600">
                        Free shipping on all prepaid orders. No minimum purchase required!
                    </p>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='flex items-center justify-between'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYW4cNT2hrA77S-KcU6dU87omJcTSvmIrHfA&s"></img>
                <div className='flex-row'>
                    <h1 className='font-semibold'> About us </h1>
                    <h2> Our Journey</h2>
                    <h2>FAQs</h2>
                    <h2>Contact us</h2>
                </div>
                <div className='flex-row'>
                    <h1 className='font-semibold'> Shop </h1>

                    <h2>Navratri Collection</h2>
                    <h2>Kurtis</h2>
                    <h2>Pant Sets</h2>
                    <h2>Dupatta sets</h2>
                    <h2>Dresses</h2>
                    <h2>Co ord sets</h2>
                    <h2>Tops</h2>
                </div>
                <div className='flex-row'>
                    <h1 className='font-semibold'>Quick links</h1>
                    <h2>Terms & Conditions</h2>
                    <h2>Privacy Policy</h2>
                    <h2>Return & Exchange</h2>
                    <h2>Shipping Policy</h2>
                </div>
            </div>
        </div>
    )
}