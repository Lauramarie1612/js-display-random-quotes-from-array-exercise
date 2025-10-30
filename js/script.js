"use strict";

//Objekter i tuborgklammerne, og den skarpe klamme indikerer at vi gerne vil have en array/liste. Author og quote er proporties og navnet og quotesne er values. Values inde i "" er strings.

const quotesListe = [
  { author: "René Descartes", quote: "I think, therefore I am." },
  {
    author: "William Shakespeare",
    quote: "To be, or not to be: that is the question.",
  },
  {
    author: "Franklin D. Roosevelt",
    quote: "The only thing we have to fear is fear itself.",
  },
  {
    author: "Mark Twain",
    quote:
      "The two most important days in your life are the day you are born... and the day you find out why.",
  },
];

//Funktion uden parameter
function getRandomQuote() {
  //Tjekker om listen er tom, og laver en fejlbesked hvis den er det
  if (quotesListe.length === 0) {
    const errorMsg = "No quotes available!!!";
    document.getElementById("quotes").innerHTML = <p>${errorMsg}</p>;
    return;
  }

  // Hvis der ER quotes, vælg et tilfældigt index
  const randomIndex = Math.floor(Math.random() * quotesListe.length);

  // Returner quote-objektet fra arrayet
  return quotesListe[randomIndex];
}

//Ny funktion uden parameter
function displayRandomQuote() {
  const randomQuote = getRandomQuote();

  if (!randomQuote) return;

  // Opretter HTML struktur til quote + author
  let quoteDetails = "";
  quoteDetails += `
        <p>${randomQuote.quote}</p>
        <h4>${randomQuote.author}</h4>
    `;

  // Finder <p id="quotes"> og sætter indholdet
  document.getElementById("quotes").innerHTML = quoteDetails;
}

//Tilføjer event til knappen
const displayQuoteBtn = document.getElementById("displayQuoteBtn");
displayQuoteBtn.addEventListener("click", displayRandomQuote);
