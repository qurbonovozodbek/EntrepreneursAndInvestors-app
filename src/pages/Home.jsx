import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import EntrepreneurProfile from "../components/EntrepreneurProfile";
import InvestorProfile from "../components/InvestorProfile";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <section className="profile">
        <h2>Featured Entrepreneurs</h2>
        <div className="profiles">
          <EntrepreneurProfile
            id="1"
            name="Jane Doe"
            business="Tech Innovators"
            description="Innovating the future of AI with groundbreaking solutions that address industry challenges."
          />
          <EntrepreneurProfile
            id="2"
            name="John Smith"
            business="Green Energy Co."
            description="Developing sustainable energy solutions to power the future."
          />
          <EntrepreneurProfile
            id="3"
            name="Alice Johnson"
            business="HealthTech Solutions"
            description="Pioneering health technology innovations to improve global healthcare."
          />
          <EntrepreneurProfile
            id="4"
            name="Robert Lee"
            business="EcoLife"
            description="Creating eco-friendly products that make sustainability accessible to all."
          />
          <EntrepreneurProfile
            id="5"
            name="Maria Garcia"
            business="FinTech World"
            description="Revolutionizing financial services with cutting-edge FinTech solutions."
          />
        </div>

        <h2>Featured Investors</h2>
        <div className="profiles">
          <InvestorProfile
            id="1"
            name="Global Ventures"
            focus="Tech, AI"
            pastInvestments="AI Corp, Green Energy Co., Tech Innovators"
          />
          <InvestorProfile
            id="2"
            name="Impact Investors"
            focus="Sustainability, Health"
            pastInvestments="EcoLife, HealthTech Solutions, Green Energy Co."
          />
          <InvestorProfile
            id="3"
            name="Future Capital"
            focus="FinTech, Innovation"
            pastInvestments="FinTech World, Tech Innovators"
          />
          <InvestorProfile
            id="4"
            name="Visionary Fund"
            focus="HealthTech, Biotech"
            pastInvestments="HealthTech Solutions, AI Corp"
          />
          <InvestorProfile
            id="5"
            name="Green Growth Partners"
            focus="Sustainable Energy, Environmental Tech"
            pastInvestments="Green Energy Co., EcoLife"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
