import "../style/faq.css";
import give from "../pic/give.png";

export default function FAQ() {
    return (
        <section className="faq-page section" id="faq">
            <div className="faq-section">
                <div className="faq-image">
                    <img src={give} alt="Support exchange" />
                </div>

                <div className="faq-text">
                    <h1 className="faq-title">FAQs</h1>

                    <div className="faq-item">
                        <h2>Is Gala of Hope a registered organization?</h2>
                        <p>
                            Gala of Hope is working toward full organizational development and
                            operates with transparency and accountability.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h2>Can I contribute in non-monetary ways?</h2>
                        <p>
                            Yes. Support can include donating supplies, offering professional
                            skills, or helping with outreach and events.
                        </p>
                    </div>
                </div>
            </div>

            <div className="faq-full">
                <h2>How are projects chosen?</h2>
                <p>
                    We select projects based on community needs, impact, and available
                    resources.
                </p>
            </div>
        </section>
    );
}
