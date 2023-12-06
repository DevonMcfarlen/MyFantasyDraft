import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../style/LandingPage.css';
// comment to push again
const LandingPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
            <div className="container">
                {/* Carousel Section */}
                <Slider {...settings}>
                    {/* Slide 1 - LeBron James */}
                    <div className="slide">
                        <img src="https://wallpaperaccess.com/thumb/1523688.jpg" alt="Lebron James" />
                        <div className="overlay-text">
                            <h2>LeBron James: The King</h2>
                            <p>Explore the journey and achievements of LeBron James, one of basketball's greatest.</p>
                        </div>
                    </div>
                    {/* Slide 2 - James Harden */}
                    <div className="slide">
                        <img src="https://wallpaperaccess.com/thumb/1203521.jpg" alt="James Harden" />
                        <div className="overlay-text">
                            <h2>James Harden: The Scoring Machine</h2>
                            <p>Delve into the high-scoring game of James Harden, an NBA sensation.</p>
                        </div>
                    </div>
                    {/* Slide 3 - Steph Curry */}
                    <div className="slide">
                        <img src="https://wallpaperaccess.com/full/719885.jpg" alt="Steph Curry" />
                        <div className="overlay-text">
                            <h2>Steph Curry: The Three-Point Legend</h2>
                            <p>Discover Steph Curry's record-breaking three-point shooting skills.</p>
                        </div>
                    </div>
                    {/* Slide 4 - NBA Players */}
                    <div className="slide">
                        <img src="https://wallpaperaccess.com/thumb/103106.jpg" alt="NBA Players" />
                        <div className="overlay-text">
                            <h2>NBA Stars: The Best in the Game</h2>
                            <p>Meet the NBA's top players and their incredible athletic prowess.</p>
                        </div>
                    </div>
                    {/* Slide 5 - Luka Doncic */}
                    <div className="slide">
                        <img src="https://wallpaperaccess.com/full/1803604.jpg" alt="Luka Doncic" />
                        <div className="overlay-text">
                            <h2>Luka Doncic: A Rising Star</h2>
                            <p>Witness the rise of Luka Doncic, a young and talented NBA prodigy.</p>
                        </div>
                    </div>
                    {/* Slide 6 - Kevin Durant */}
                    <div className="slide">
                        <img src="https://wallpaperaccess.com/thumb/464978.png" alt="Kevin Durant" />
                        <div className="overlay-text">
                            <h2>Kevin Durant: The Versatile Leader</h2>
                            <p>Kevin Durant's journey of skill, leadership, and versatility on the court.</p>
                        </div>
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
