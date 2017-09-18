import React from 'react';
import { Link } from 'react-router-dom';
import './about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p> This is the very first version for LeoManga </p>
      <p> This is an example of a bad link. Click <Link to="/badlink">here</Link> to see the 404 page. </p>
    </div>
  );
};

export default AboutPage;
