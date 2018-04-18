// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the 'printQuote' function is called
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
//generate a random number to pull a random quote from the "quotes" array
function getRandomQuote() {
  let RNG = Math.floor(Math.random() * 10);
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
  document.getElementById("loadQuote").style.background = bgColor;
}
//sets printQuote on a 30 second timer
function timer() {
  window.setInterval(printQuote, 30000);
}

timer();
