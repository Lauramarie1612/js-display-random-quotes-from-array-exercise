"use strict";

// Arrays med citater
const quotesListe = [
  {
    author: "Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    author: "Maya Angelou",
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    author: "Steve Jobs",
    quote: "Innovation distinguishes between a leader and a follower.",
  },
];

// Funktion til at få et tilfældigt citat
function getRandomQuote() {
  if (quotesListe.length === 0) {
    const errorMsg = "No quotes available!!!";
    document.getElementById("quotes").innerHTML = `<p>${errorMsg}</p>`;
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotesListe.length);
  return quotesListe[randomIndex];
}

function displayRandomQuote() {
  const randomQuote = getRandomQuote();
  let quoteDetails = "";

  if (randomQuote) {
    quoteDetails = `
      <p>"${randomQuote.quote}"</p>
      <p><em>- ${randomQuote.author}</em></p>
    `;
  }

  document.getElementById("quotes").innerHTML = quoteDetails;
}
