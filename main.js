

const quotesOfTheDay = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    
  ];
function generateRandomQuote() {
   
  
    const randomIndex = Math.floor(Math.random() * quotesOfTheDay.length);
    const quote = quotesOfTheDay[randomIndex];
  
    // Update the innerHTML of quoteOfTheDay element
    document.getElementById("quoteOfTheDay").innerHTML = "Quote of the Day: " + quote;
    console.log("Quote of the Day: " + quote);
  }
  
  // Attach event listener to the button
  document.getElementById("generateQuoteBtn").addEventListener("click", generateRandomQuote);
  
  
  generateRandomQuote();
  