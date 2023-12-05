import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../style/LandingPage.css';

const LandingPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="container">
            {/* Carousel Section */}
            <Slider {...settings}>
                <div>
                    <img src="https://wallpaperaccess.com/thumb/1523688.jpg" alt="Lebron James" />
                </div>
                <div>
                    <img src="https://wallpaperaccess.com/thumb/1203521.jpg" alt="James Harden" />
                </div>
                <div>
                    <img src="https://wallpaperaccess.com/full/719885.jpg" alt="Steph Curry" />
                </div>
                <div>
                    <img src="https://wallpaperaccess.com/thumb/103106.jpg" alt="NBA Players" />
                </div>
                <div>
                    <img src="https://wallpaperaccess.com/full/1803604.jpg" alt="Luka Doncic" />
                </div>
                <div>
                    <img src="https://wallpaperaccess.com/thumb/464978.png" alt="Kevin Durant" />
                </div>
            </Slider>

            <header>
                <h1>My Fantasy Draft</h1>
            </header>


            <main>
                <section className="welcome-section">
                    <h2>Welcome to My Fantasy Draft!</h2>
                    <p>My Fantasy Draft is a web application that allows users to keep track of their favorite NBA players!</p>
                    <Link to="/login" className="get-started-button">Get Started</Link>
                </section>

                <div className="feature-cards-container">
                    <section className="feature-card">
                        <h3>Player Statistics</h3>
                        <p>Explore in-depth stats of your favorite players, including points, rebounds, assists, and more.</p>
                    </section>
                    <section className="feature-card">
                        <h3>Team Updates</h3>
                        <p>Get the latest news, scores, and updates about your favorite NBA teams.</p>
                    </section>
                    <section className="feature-card">
                        <h3>Draft Simulation</h3>
                        <p>Experiment with draft strategies and build your dream team using our draft simulation feature.</p>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default LandingPage;




