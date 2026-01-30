import React from "react";
import '../style/community.css';

const Donate = () => {
    return (
        <section className="section community-page" id="donate">
            <div className="content-frame">
                <div className="donate-box">
                    <h1>Donate here!</h1>
                    <p className="number">07812345678</p>
                    <p className="instruction">Kindly make your donation using the phone number shown.</p>
                </div>

                <div className="form-box">
                    <h2>Join Our Community</h2>
                    <form>
                        <input type="text" placeholder="Name" required />
                        <input type="tel" placeholder="Phone Number" required />
                        <button type="submit">Join</button>
                    </form>
                </div>
            </div>

            <footer className="footer">
                <p>.INSTAGRAM: @GHOPE</p>
                <p>.LINKEDIN: GALA OF HOPE</p>
                <p>@GH 2026 COPYRIGHT.</p>
            </footer>
        </section>
    );
};

export default Donate;
