import "../style/about.css";

import hands from "../pic/hands.png";
import book from "../pic/book.png";
import health from "../pic/health.png";
import skill from "../pic/skill.png";
import vol from "../pic/vol.png";

export default function About() {
    return (
        <section className="about-page" id="about">

            {/* ===== WHO WE ARE ===== */}
            <div className="who-we-are">
                <div className="image-container">
                    <img src={hands} alt="Hands stacked together showing unity" />
                </div>

                <div className="text-container">
                    <h1 className="section-title light">Who we are</h1>
                    <p>
                        <strong>Gala of Hope</strong> is a charity focused on uplifting
                        communities and supporting those in need through impactful
                        initiatives and events.
                    </p>
                    <p>
                        We are committed to spreading hope, compassion, and positive change
                        by addressing social challenges and empowering individuals to build
                        better futures.
                    </p>
                </div>
            </div>

            {/* ===== OUR MISSION ===== */}
            <div className="mission">
                <h2 className="section-title dark">Our Mission</h2>
                <p className="mission-text">
                    At Gala of Hope, we strive to empower communities and inspire hope.
                    Through education, health initiatives, and skill-building programs,
                    we create opportunities that transform lives and strengthen communities.
                </p>
            </div>

            {/* ===== HIGHLIGHTS ===== */}
            <div className="highlights">
                <h2 className="section-title dark">Highlights of what we do</h2>

                <div className="cards">
                    <div className="card">
                        <img src={book} alt="Donate books" />
                        <h3>Donate books</h3>
                        <p>Donate books, school supplies, and essential resources to children.</p>
                    </div>

                    <div className="card">
                        <img src={health} alt="Health workshops" />
                        <h3>Health workshops</h3>
                        <p>Run health and wellness workshops for communities.</p>
                    </div>

                    <div className="card">
                        <img src={skill} alt="Skill training" />
                        <h3>Skill training</h3>
                        <p>Offer skill development and vocational training for youth.</p>
                    </div>

                    <div className="card">
                        <img src={vol} alt="Charity & volunteering" />
                        <h3>Charity & volunteering</h3>
                        <p>Organize charity events and volunteer programs to support local projects.</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
