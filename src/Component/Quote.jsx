import React, {useState, useEffect} from 'react'
import QuoteCard from './QuoteCard';

const Quote = () => {
    // Default quote object
    const [quote, setQuote] = useState({ quoteText: "Fetching quote...", author: "Please wait" });
    const fetchQuote = async () => {
        try {
          const response = await fetch('https://dummyjson.com/quotes/random'); // API endpoint
          const data = await response.json();
          setQuote({ quoteText: data.quote, author: data.author });
        } catch (error) {
          console.error('Error fetching quote:', error);
          setQuote({ quoteText: "Error fetching quote, Try Again!", author: "NA" });
        }
      };

    useEffect(() => {
        fetchQuote();
    }, []);

    const refreshQuote = () => {
        fetchQuote(); // Fetch a new quote
      };

  return (
    <div className='bg-gray-800 h-screen  '>
      <div className="flex justify-center items-center h-screen">

        <QuoteCard
        quoteText={quote.quoteText}
        author={quote.author}
        Refresh={refreshQuote}
        />

      </div>
    </div>
  )
}

export default Quote
