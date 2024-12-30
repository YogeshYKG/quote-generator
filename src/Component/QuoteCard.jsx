import React,{ useState, useEffect } from 'react'


const QuoteCard = ({ 
    quoteText = "No quote available.", 
    author = "Unknown Author", 
    Refresh 

}) => {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(false);
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 5);
        return () => clearTimeout(timeout);

        
    }, [quoteText]);

  return (
    <div className="QuoteCard ">
        <div className="relative flex flex-col justify-center items-center ring-4 ring-indigo-500 mx-auto bg-indigo-700 rounded-lg p-8 max-w-2xl shadow-lg">
            <div className="Heading text-2xl font-bold text-white mb-4 ">
                <h1>Quote Of The Day</h1>
            </div>
            <div className="w-full h-px bg-gray-300"></div>
            <div className={`QuoteText mt-4 ${animate ? 'typewriter' : ''} text-center text-xl italic text-white mb-4 break-words `}>
                {quoteText}
            </div>
            <div className="w-full h-px bg-gray-300 mb-4"></div>
            <div className="flex flex-row justify-between items-center w-full">
                
                <div className="Author text-lg text-white font-semibold">
                    {'- ' + author}
                </div>

                <div className="flex justify-between items-center w-1/6">
                    <button 
                        onClick={Refresh} 
                        className="flex items-center justify-center text-2xl text-white material-symbols-rounded"
                    >
                        Cached
                    </button>
                
                    {/* <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                            `"${quoteText}" - ${author}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                    >
                        Tweet
                    </a> */}

                    {/* <div 
                        href="/"
                        className=""
                    >

                    </div> */}
                </div>
                


            </div>
        </div>
    </div>
  )
}

export default QuoteCard
