import React, { useEffect, useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  const [quote, setQuote] = useState<string>('');

  useEffect(() => {
    fetch('https://workshop01-r6pk.onrender.com/api/quotes')
      .then((response) => response.json())
      .then((data) => setQuote(data.quote))
      .catch((error) => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div className="App">
      <LandingPage quote={quote} />
    </div>
  );
}

export default App;
