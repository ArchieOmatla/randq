import "./App.css";
import { useState } from "react";
//import { createRoot } from "react-dom/client";
import { FaQuoteLeft, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { BsDash } from "react-icons/bs";

const QUOTES = [
  { quote: "Stop crying", author: "Archibold" },
  { quote: "Why you crying", author: "Archie" },
  { quote: "Cry later when i am not around", author: "Mr.Thula" },
  { quote: "Seriously stop crying", author: "Omatla" },
  { quote: "I am not a shoulder to cry on", author: "Sir Archibold" },
  { quote: "Should I call your mum", author: "Mr. Archibold" },
  { quote: "Maybe your dad could comfort you", author: "Mr Omatla" },
  { quote: "Ok I am leaving", author: "Sir Archie of House Thula" },
  { quote: "It has been nice knowing you", author: "Sir Archie" },
  { quote: "Maybe a glass of water", author: "Sir Omatla" },
  { quote: "Call me when you done crying", author: "Blackman Thula" },
];

function randInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const [index, randNum] = useState(randInt(10));
  document.querySelector("body").className = "scheme" + index;

  function handleClick() {
    randNum(randInt(10));
    let strg = "scheme" + index;
    document.querySelector("body").className = "";
    document.querySelector("body").classList.add(strg);
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

/*const container = document.getElementById("quote-box");
const root = createRoot(container);
root.render(<App />);*/

export default App;
