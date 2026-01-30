import React from "react";
import '../style/style.css';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="section hero" id="home">
                <div className="hero-content">
                    <h2 className="hero-subtitle">Unity Outreach Network</h2>
                    <h1 className="hero-title">Gala of Hope</h1>
                    <p className="hero-text">A chance to make real impact</p>
                </div>
                <div className="hero-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </section>
            <div className="hero-accents">
                <span></span>
                <span></span>
                <span></span>
            </div>


        </>
    );
};

export default Home;
