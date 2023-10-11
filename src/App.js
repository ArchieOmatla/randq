import "./App.css";
import { useState } from "react";
//import { createRoot } from "react-dom/client";
import { FaQuoteLeft, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { BsDash } from "react-icons/bs";

const QUOTES = [
  { quote: "Stop crying", author: "Archibold" },
  {
    quote:
      "Imagine being impressed by a bottle of hennessey with no hennessey inside",
    author: "Maero",
  },
  { quote: "Cry later when I am not around", author: "Mr.Thula" },
  { quote: "Seriously stop crying", author: "Omatla" },
  { quote: "I am not a shoulder to cry on", author: "Sir Archibold" },
  { quote: "Should I call your mum", author: "Mr. Archibold" },
  {
    quote:
      "I would rather be disappointed time and again than to live a life where I don't trust anyone",
    author: "Massmor",
  },
  { quote: "Ok I am leaving", author: "Sir Archie of House Thula" },
  { quote: "It has been nice knowing you", author: "Sir Archie" },
  { quote: "Bo a sa bo ya pele", author: "Maero" },
  { quote: "Call me when you done crying", author: "Blackman Thula" },
];

function randInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const [index, randNum] = useState(randInt(QUOTES.length));
  document.querySelector("body").className = "scheme" + index;

  function handleClick() {
    randNum(randInt(QUOTES.length));
    //let strg = "scheme" + cssIndex;
    document.querySelector("body").className = "";
    document.querySelector("body").classList.add("scheme" + index);
  }

  return (
    <div>
      <blockquote>
        <p id="text">
          <FaQuoteLeft />
          {QUOTES[index].quote}
        </p>
        <cite id="author">
          <BsDash />
          {QUOTES[index].author}
        </cite>
      </blockquote>

      <div className="flexclass">
        <div id="socials">
          <a
            id="tweet-quote"
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare className={"scheme" + index} />
          </a>
          <a
            id="facebook"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare className={"scheme" + index} />
          </a>
        </div>

        <MyButton onClick={handleClick} className={"scheme" + index} />
      </div>
    </div>
  );
};

const MyButton = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      New Quote
    </button>
  );
};

export default App;
