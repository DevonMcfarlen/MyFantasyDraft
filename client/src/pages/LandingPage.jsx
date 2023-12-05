import React from 'react';
import { Link } from 'react-router-dom'; 
import '../../style/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="container">
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



// Below is another version of the LandingPage.jsx file that uses react-slick to create a carousel of images. 

// import React from 'react';
// import NavBar from '../components/NavBar'; 
// import 'slick-carousel/slick/slick.css';
// import Slider from 'react-slick';
// import '../../style/LandingPage.css';


// const LandingPage = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     };

//     return (
//         <div>
//             {/* <NavBar /> */}
//             <Slider {...settings}>
//                 <div>
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVS5-NPG9nAnwmI9ZUFtxIgcbX1sgp8XTI9A&usqp=CAU" alt="NBA Image 1"/>
//                 </div>
//                 <div>
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmROq7XWmxzFUMjDWR6Ec7pW4B768IeAhCUg&usqp=CAU" alt="NBA Image 2"/>
//                 </div>
//                 <div>
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQjyoyknLpT76uhX99qYIRRnAgo1o-t6YgQ&usqp=CAU" alt="NBA Image 3"/>
//                 </div>
//                 <div>
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_QIQvbISuRZj5dCuGg9xTF0GJthni6c86Zg&usqp=CAU" alt="NBA Image 4"/>
//                 </div>
//             </Slider>
//             <header>
//                 <h1>My Fantasy Draft</h1>
//             </header>
//             <main>
//                 <section>
//                     <h2>Welcome to My Fantasy Draft!</h2>
//                     <p>
//                         Dive into the world of fantasy basketball! Create your dream team, 
//                         compete with friends, and manage your lineup to emerge as the top 
//                         fantasy basketball manager. Join now and start your journey to the top!
//                     </p>
//                 </section>
//                 {/* Additional sections */}
//             </main>
//         </div>
//     );
// }

// export default LandingPage;
