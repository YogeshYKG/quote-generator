import React, {useState, useEffect} from 'react'
import QuoteCard from './QuoteCard';

const Quote = () => {
    // // Initially, quote is empty
    const [quote, setQuote] = useState({});
    const [loading, setLoading] = useState(true);
    const fetchQuote = async () => {
        try {
          const response = await fetch('https://dummyjson.com/quotes/random'); // API endpoint
          const data = await response.json();
          setQuote({ quoteText: data.quote, author: data.author });
        } catch (error) {
          console.error('Error fetching quote:', error);
        } finally {
          setLoading(false);
        }
      };

    useEffect(() => {
        fetchQuote();
    }, []);

    const refreshQuote = () => {
        setLoading(true); // Set loading state while fetching
        setQuote({}); // Clear the current quote
        fetchQuote(); // Fetch a new quote
      };
    
    if (loading) {
        return <div>Loading...</div>;
    }

  return (
    <div className='bg-gray-800 h-screen  '>
      <div className="flex justify-center items-center h-screen">
        {quote.quoteText && quote.author && (
            <QuoteCard
            quoteText={quote.quoteText}
            author={quote.author}
            Refresh={refreshQuote}
            />
        )}
      </div>
    </div>
  )
}

export default Quote
