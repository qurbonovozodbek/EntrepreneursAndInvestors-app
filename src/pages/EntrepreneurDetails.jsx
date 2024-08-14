import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import alice from "../assets/image/Alice.jpg";
import john from "../assets/image/John.jpg";
import Jane from "../assets/image/Jane.jpg";
import robert from "../assets/image/robert.jpg";
import global from "../assets/image/global.jpg";
import invest from "../assets/image/invest.jpg";
import future from "../assets/image/future.jpg";
import fund from "../assets/image/fund.jpg";
import { CiLinkedin } from "react-icons/ci";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";


const sampleData = {
  1: {
    name: "Jane Doe",
    business: "Tech Innovators",
    bio: "Jane is a leading innovator in AI technology, specializing in creating cutting-edge solutions for various industries. With a background in computer science and a passion for technology, she has driven numerous successful projects.",
    achievements: [
      "Founded Tech Innovators in 2018",
      "Winner of the AI Excellence Award 2022",
      "Speaker at Tech Innovators Conference 2023",
      "Developed the AI-driven analytics tool used by top Fortune 500 companies",
      "Published multiple research papers on machine learning and AI advancements",
    ],
    contact: "jane.doe@example.com",
    profilePicture: Jane,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janedoe",
      twitter: "https://twitter.com/janedoe",
      website: "https://www.techinnovators.com",
    },
  },
  2: {
    name: "John Smith",
    business: "Green Energy Co.",
    bio: "John is passionate about sustainable energy solutions and has been working on groundbreaking projects in renewable energy. His efforts have been pivotal in advancing green technology and promoting sustainable practices.",
    achievements: [
      "Co-founded Green Energy Co. in 2015",
      "Developed the SolarMax technology",
      "Recipient of the Green Energy Innovator Award 2021",
      "Implemented large-scale solar farms across multiple countries",
      "Advocated for environmental policies in various international forums",
    ],
    contact: "john.smith@example.com",
    profilePicture: john,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/johnsmith",
      twitter: "https://twitter.com/johnsmith",
      website: "https://www.greenenergyco.com",
    },
  },
  3: {
    name: "Alice Johnson",
    business: "HealthTech Solutions",
    bio: "Alice is a pioneer in health technology, focusing on innovative solutions to improve patient care and streamline medical processes. Her work has significantly impacted the healthcare industry.",
    achievements: [
      "Founded HealthTech Solutions in 2017",
      "Launched a groundbreaking telemedicine platform",
      "Named Healthcare Innovator of the Year 2023",
      "Secured over $50 million in funding for health tech projects",
      "Collaborated with leading hospitals and medical institutions globally",
    ],
    contact: "alice.johnson@example.com",
    profilePicture: alice,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/alicejohnson",
      twitter: "https://twitter.com/alicejohnson",
      website: "https://www.healthtechsolutions.com",
    },
  },
  4: {
    name: "Robert Lee",
    business: "EduTech Ventures",
    bio: "Robert is dedicated to transforming education through technology. His company focuses on developing digital tools and platforms that enhance learning experiences for students and educators.",
    achievements: [
      "Co-founded EduTech Ventures in 2016",
      "Developed a popular online learning platform used by millions of students",
      "Recipient of the Education Technology Award 2022",
      "Partnered with schools and universities worldwide to implement tech solutions",
      "Authored a book on the future of education technology",
    ],
    contact: "robert.lee@example.com",
    profilePicture: robert,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/robertlee",
      twitter: "https://twitter.com/robertlee",
      website: "https://www.edutechventures.com",
    },
  },
  5: {
    name: "Global Ventures",
    business: "Venture Capital Firm",
    bio: "Global Ventures is a leading venture capital firm specializing in early-stage investments in technology, healthcare, and green energy sectors. The firm supports startups with funding and strategic guidance.",
    achievements: [
      "Invested in over 100 startups globally",
      "Managed a portfolio worth $2 billion",
      "Achieved an average return on investment of 30% annually",
      "Recognized as one of the top VC firms in 2023 by Forbes",
      "Collaborated with major tech and industry leaders to foster innovation",
    ],
    contact: "contact@globalventures.com",
    profilePicture: global,
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/globalventures",
      twitter: "https://twitter.com/globalventures",
      website: "https://www.globalventures.com",
    },
  },
  6: {
    name: "Impact Investors",
    business: "Social Impact Investment",
    bio: "Impact Investors focuses on funding startups and organizations that aim to generate positive social and environmental impact alongside financial returns. Their portfolio includes a variety of projects in sustainable development and social innovation.",
    achievements: [
      "Invested in over 50 social enterprises globally",
      "Launched the Impact Fund with $500 million in capital",
      "Partnered with NGOs and governments to promote sustainable initiatives",
      "Recognized as a leader in impact investing by the Global Impact Forum",
      "Advocated for the integration of social responsibility in business practices",
    ],
    contact: "contact@impactinvestors.com",
    profilePicture: invest,
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/impactinvestors",
      twitter: "https://twitter.com/impactinvestors",
      website: "https://www.impactinvestors.com",
    },
  },
  7: {
    name: "Future Capital",
    business: "Investment Firm",
    bio: "Future Capital is at the forefront of investing in emerging technologies such as artificial intelligence, blockchain, and biotechnology. Their mission is to support the next generation of tech leaders and innovators.",
    achievements: [
      "Backed over 70 tech startups in the AI and blockchain sectors",
      "Managed assets totaling $1.5 billion",
      "Led the Series A funding round for multiple successful tech companies",
      "Hosted the Future Tech Conference, bringing together top innovators",
      "Featured in TechCrunch as a top VC firm to watch in 2024",
    ],
    contact: "info@futurecapital.com",
    profilePicture: future,
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/futurecapital",
      twitter: "https://twitter.com/futurecapital",
      website: "https://www.futurecapital.com",
    },
  },
  8: {
    name: "Visionary Fund",
    business: "Private Equity Firm",
    bio: "Visionary Fund is a private equity firm specializing in large-scale investments in technology, healthcare, and renewable energy. Their strategic approach focuses on long-term growth and sustainability.",
    achievements: [
      "Managed investments exceeding $3 billion across various industries",
      "Successfully exited multiple high-profile investments with significant returns",
      "Ranked among the top 10 private equity firms by Global Finance Magazine",
      "Partnered with Fortune 500 companies to drive innovation",
      "Committed to ESG principles, integrating sustainability into their investment strategy",
    ],
    contact: "contact@visionaryfund.com",
    profilePicture: fund,
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/visionaryfund",
      twitter: "https://twitter.com/visionaryfund",
      website: "https://www.visionaryfund.com",
    },
  },
};

function EntrepreneurDetails() {
  const { id } = useParams();
  const entrepreneur = sampleData[id] || {};

  return (
    <>
    <Header />
    <div className="entrepreneur-details-page">
      <div className="profile-details">
        <div className="profile-header">
          <img
            src={entrepreneur.profilePicture}
            alt={entrepreneur.name}
            className="profile-picture"
          />
          <div className="profile-info">
            <h2>{entrepreneur.name}</h2>
            <h3>{entrepreneur.business}</h3>
            <p className="bio">{entrepreneur.bio}</p>
            <ul className="achievements">
              {entrepreneur.achievements &&
                entrepreneur.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
            <p className="contact">
              Contact:{" "}
              <a href={`mailto:${entrepreneur.contact}`}>
                {entrepreneur.contact}
              </a>
            </p>
            {entrepreneur.socialLinks && (
              <div className="social-links">
                {entrepreneur.socialLinks.linkedin && (
                  <a
                    href={entrepreneur.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CiLinkedin></CiLinkedin>
                  </a>
                )}
                {entrepreneur.socialLinks.twitter && (
                  <a
                    href={entrepreneur.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter/>
                  </a>
                )}
                {entrepreneur.socialLinks.website && (
                  <a
                    href={entrepreneur.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CgWebsite/>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default EntrepreneurDetails;
