import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [link, setLink] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length > 0) {
      setLink(true);
      setUserData(users[0]); // Assuming the first user is the logged-in one
    }
  }, []);

  const handleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('users');
      setLink(false);
      setOpenDropDown(false);
    }
  };

  return (
    <header className="premium-header">
      <div className="logo">
        <h1>Investor-Entrepreneur Connect</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          {
            link ? (
              <li className="profile-container">
                <Link onClick={handleDropDown} className="profile-button">
                  Profile
                </Link>
                {openDropDown && userData && (
                  <div className={`dropdown ${openDropDown ? 'dropdown-enter' : 'dropdown-exit'}`}>
                    {userData.picture && <img src={userData.picture} alt="Profile" className="profile-picture" />}
                    <p>Name: <span>{userData.name}</span></p>
                    <p>Email: <span>{userData.email}</span></p>
                    <p>Phone: <span>{userData.phone}</span></p>
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                  </div>
                )}
              </li>
            ) : (
              <li><Link to="/signup">Sign up</Link></li>
            )
          }
        </ul>
      </nav>
    </header>
  );
}

export default Header;
