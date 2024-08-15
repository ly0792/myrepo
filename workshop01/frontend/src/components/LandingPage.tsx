import React from 'react';

interface LandingPageProps {
  quote: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ quote }) => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <img 
        src="https://m.media-amazon.com/images/I/711cBUvq8SL._AC_SY450_.jpg"
        alt="Sample"
        style={{ width: '400px', height: '300px' }} 
      />
      <h1>{quote}</h1>
      <a href="https://github.com/ly0792/myrepo" target="_blank" rel="noopener noreferrer">
        View Repository
      </a>
    </div>
  );
}

export default LandingPage;
