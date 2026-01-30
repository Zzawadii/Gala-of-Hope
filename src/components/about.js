import "../style/about.css";
import hands from "../pic/hands.png";

export default function About() {
    return (
        <section className="who-we-are-page section" id="about">
            <div className="who-we-are">
                <div className="image-container">
                    <img src={hands} alt="Hands stacked together showing unity" />
                </div>

                <div className="text-container">
                    <h1 className="section-title">Who we are</h1>
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
        </section>
    );
}
