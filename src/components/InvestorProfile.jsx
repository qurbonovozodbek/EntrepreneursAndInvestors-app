import React from 'react';
import { Link } from 'react-router-dom';

function InvestorProfile({ id, name, focus, pastInvestments }) {
  return (
    <div className="profile-card">
      <h3>{name}</h3>
      <p>Focus: {focus}</p>
      <p>Past Investments: {pastInvestments}</p>
      <Link to={`/investor/${id}`}><button>View Profile</button></Link>
    </div>
  );
}

export default InvestorProfile;
