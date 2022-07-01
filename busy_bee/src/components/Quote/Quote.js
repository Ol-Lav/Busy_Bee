import { useState } from 'react';
import data from './data.json';
import './Quote.scss';

const random = Math.floor(Math.random() * data.length + 1);

export const Quote = () => {
  const [quote, setQuote] = useState(random);

  const getQuote = () => {
    const randomIndex = Math.floor(Math.random() * data.length + 1);
    setQuote(randomIndex);
  };

  return (
    <div className="quote">
      <h1 className="quote_title">
        Quote Of The Day
      </h1>
      <p className="quote_text">
        <em>{data[quote].quote}</em>
      </p>
      <p className="quote_author">
        {data[quote].author}
      </p>
      <p className="quote_profession">
        {data[quote].profession}
      </p>
      <button
        onClick={getQuote}
        className="quote_button"
      >
        Get My Quote
    </button>
  </div>
  );
};
