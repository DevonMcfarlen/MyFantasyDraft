import React from 'react';
import NavBar from '../components/NavBar';

const LandingPage = () => {
    return (
        <div>
            <NavBar />
           <header>
                <h1>My Fantasy Draft</h1>
           </header>
           <main>
                <section>
                    <h2>Welcome to My Fantasy Draft!</h2>
                    <p>
                        My Fantasy Draft is a web application that allows users to keep track of their favorite NBA players!
                    </p>
                </section>
           </main>
        </div>
    );
}

export default LandingPage;