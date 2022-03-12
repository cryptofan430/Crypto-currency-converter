import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';

const Topbar = ({ changeMobileSidebarVisibility, changeSidebarVisibility }) => (
  <div className="topbar">
    <div className="topbar__wrapper">
      <div className="topbar__left">
        <TopbarSidebarButton
          changeMobileSidebarVisibility={changeMobileSidebarVisibility}
          changeSidebarVisibility={changeSidebarVisibility}
        />
        
        <Link className="topbar__logo" to="/" />
        
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/my-account" className="link">
          MY ACCOUNT
        </Link>
        <Link to="/my-gift-codes" className="link">
          MY GIFT CODES
        </Link>
        <Link to="/my-points" className="link">
          MY POINTS
        </Link>
        <Link to="/my-goals" className="link">
          MY GOALS
        </Link>
        <Link to="/faqs" className="link">
          FAQS
        </Link>
        <Link onClick={() => alert('Are you sure?')} to="/" className="link">
          SIGN OUT
        </Link>
      
      </div>
      <div className="topbar__right">
        <TopbarProfile />
      </div>
    </div>
  </div>
);

Topbar.propTypes = {
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
};

export default Topbar;
