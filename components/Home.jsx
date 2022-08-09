import React from "react";
import Carousel from "./Carousel";

function Home({ data }) {
    return (
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow ">
                <div
                    style={{ backgroundImage: `url("${"/main.jpg"}")` }}
                    className="h-40 lg:h-96 bg-no-repeat bg-cover bg-center rounded-lg"
                />
            </div>

            <section className="mt-10 bg-green-600 heading p-3 px-5 rounded-lg">
                <h1 className="text-3xl lg:text-4xl font-bold ">
                    Welcome to DPS Megacity, Kolkata
                </h1>
                <p className="mt-3">
                    One of the premier and most progressive educational institutions in India! More
                    about school
                </p>
                <a
                    href="https://dpsmegacity.in/aboutus_dps.php"
                    type="button"
                    className="inline-flex items-center px-4 my-2 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Read More
                </a>
            </section>
            {/* <section className="gallery">
                <Carousel images={data.gallery} />
            </section> */}
        </div>
    );
}

export default Home;
