// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the 'printQuote' function is called
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
//dataset for each quote, their author, and citation and year if available
const quotes = [
  {
    quote:
      "Fairytales don't teach children that monsters exist, they already \
      know that monsters exist. Fairy tales teach children that monsters \
      can be killed.",
    source: "G.K. Chesterton",
    citation: "",
    year: NaN,
    tags: "Literature"
  },
  {
    quote:
      "A common mistake that people make when trying to design something \
      completely foolproof is to underestimate the ingenuity of complete \
      fools.",
    source: "Douglas Adams",
    citation: "Mostly Harmless",
    year: 1992,
    tags: "Humor"
  },
  {
    quote: "Just because you are offended does not mean you're right.",
    source: "Ricky Gervais",
    citation: "Twitter",
    year: 2013,
    tags: "Humor"
  },
  {
    quote:
      "The whole problem with the world is that fools and fanatics are \
      always so certain of themselves, and wiser people so full of doubts.",
    source: "Bertrand Russell",
    citation: "A Word a Day",
    year: 2002,
    tags: "Philosophy"
  },
  {
    quote:
      "There are two possibilities: either we are alone in the universe or \
      we are not. Both are equally terrifying",
    source: "Arthur C. Clarke",
    citation:
      "Visions: How Science Will Revolutionize the Twenty-First Century",
    year: 1999,
    tags: "Science"
  }
];
//generate a random number to pull a random quote from the "quotes" array
function getRandomQuote() {
  let RNG = Math.floor(Math.random() * 5);
  return quotes[RNG];
}
//constructs HTML with random quote as a string and displays to page
//if the values in citation/year don't pass check, doesn't generate...
//...corresponding HTML
function printQuote() {
  let randomQuote = getRandomQuote();
  let HTML = "<p class='quote'>" + randomQuote.quote + "</p>";
  HTML += "<p class='source'>" + randomQuote.source;
  if (randomQuote.citation.length > 0) {
    HTML += "<span class='citation'>" + randomQuote.citation + "</span>";
  }
  if (randomQuote.year > 0) {
    HTML += "<span class='year'>" + randomQuote.year + "</span>";
  }
  HTML += "</p>";
  HTML +=
    "<p class='tags'>Filed under <span id='tag'>" +
    randomQuote.tags.toLowerCase() +
    "</span>.</p>";
  document.getElementById("quote-box").innerHTML = HTML;
  setBgColor();
}
//generates random color and sets it to background
function setBgColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
}

function timer() {
  window.setInterval(printQuote, 30000);
}
timer();
