import React from 'react';
import { Link } from 'react-router-dom';

function EntrepreneurProfile({ id, name, business, description, image }) {
  return (
    <div className="profile-card">
      <h3>{name}</h3>
      <h4>{business}</h4>
      <p>{description}</p>
      <Link to={`/entrepreneur/${id}`}><button>View Profile</button></Link>
    </div>
  );
}

export default EntrepreneurProfile;
