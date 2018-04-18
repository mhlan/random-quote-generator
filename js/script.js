// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the 'printQuote' function is called
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

const quotes = [
  {
    quote:
      "Fairytales don't teach children that monsters exist, they already know that monsters exist. Fairy tales teach children that monsters can be killed.",
    source: "G.K. Chesterton",
    citation: "",
    year: ""
  },
  {
    quote:
      "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
    source: "Douglas Adams",
    citation: "Mostly Harmless",
    year: "1992"
  },
  {
    quote: "Just because you are offended does not mean you're right.",
    source: "Ricky Gervais",
    citation: "Twitter",
    year: "2013"
  },
  {
    quote:
      "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.",
    source: "Bertrand Russell",
    citation: "A Word a Day",
    year: "2002"
  },
  {
    quote:
      "There are two possibilities: either we are alone in the universe or we are not. Both are equally terrifying",
    source: "Arthur C. Clarke",
    citation:
      "Visions: How Science Will Revolutionize the Twenty-First Century",
    year: "1999"
  }
];
//uses a pseudo random number to pull a random quote from the "quotes" array
function getRandomQuote() {
  let RNG = Math.floor(Math.random() * 5);
  return quotes[RNG];
}
//constructs HTML with random quote as a string and displays to page
function printQuote() {
  let randomQuote = getRandomQuote();
  let HTML = "<p class='quote'>" + randomQuote.quote + "</p>";
  HTML += "<p class='source'>" + randomQuote.source;
  if (randomQuote.citation.length > 0) {
    HTML += "<span class='citation'>" + randomQuote.citation + "</span>";
  }
  if (randomQuote.year.length > 0) {
    HTML += "<span class='year'>" + randomQuote.year + "</span>";
  }
  HTML += "</p>";
  document.getElementById("quote-box").innerHTML = HTML;
}
