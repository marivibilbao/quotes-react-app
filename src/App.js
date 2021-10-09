import { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const url = "http://localhost:5000/quotes/random";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  }, []);

  return (
    <div>
      <header className="App-header">
        <p className="Quote-text">{quote}</p>
        <p className="Quote-author">{author}</p>
        {/* <button type="button" class="btn btn-secondary">Quote Random</button> */}
      </header>
    </div>
  );
}

export default App;
