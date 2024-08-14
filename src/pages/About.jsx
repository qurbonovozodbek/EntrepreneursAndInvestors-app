import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />
      <div className="about-page">
        <div className="about-container">
          <h1>About Us</h1>
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              We aim to bridge the gap between global investors and local
              entrepreneurs by providing a platform for networking,
              collaboration, and investment opportunities.
            </p>
          </section>
          <section className="about-section">
            <h2>Our Vision</h2>
            <p>
              We envision a world where innovation and investment flow
              seamlessly, fostering growth and development across all sectors
              and regions.
            </p>
          </section>
          <section className="about-section">
            <h2>Our Team</h2>
            <p>
              Our team consists of experienced professionals with a passion for
              connecting investors with promising startups and businesses. We
              are dedicated to creating meaningful partnerships that drive
              success.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
