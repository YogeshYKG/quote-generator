import React,{ useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect';



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
        }, quoteText.length * 80*2);
        return () => clearTimeout(timeout);

        
    }, [quoteText]);

  return (
    <div className="QuoteCard ">
        <div className="relative flex flex-col justify-center items-center ring-4 ring-indigo-500 mx-auto bg-indigo-700 rounded-lg p-8 w-[90%] min-w-[80%] sm:w-[40rem] sm:min-w-[30rem] transition-all shadow-lg">
            <div className="Heading text-2xl font-bold text-white mb-4 ">
                <h1>Quote Of The Day</h1>
            </div>
            <div className="w-full h-px bg-gray-300"></div>
            <div className={`mt-4 text-center text-xl italic text-white font-medium mb-4`}>
                {animate ? (
                    <Typewriter
                        options={{
                        delay: 50, // Typing speed
                        deleteSpeed: 30, // Deletion speed
                        }}
                        onInit={(typewriter) => {
                        typewriter
                            .typeString(quoteText)
                            .callFunction(() => {
                                console.log("Typing completed!");
                            })
                            .start();
                        }}
                    />
                ) : (
                    <span>{
                        <Typewriter
                            options={{
                            delay: 50,
                            deleteSpeed: 30,
                            cursor: "|",
                            }}
                            onInit={(typewriter) => {
                            typewriter
                                .typeString(quoteText)
                                .deleteAll()
                                .callFunction(() => console.log("Quote deleted!"))
                                .start();
                            }}
                        />    
                        
                    }</span>
                )}
            </div>
            <div className="w-full h-px bg-gray-300 mb-4"></div>
            <div className="flex flex-row justify-between items-center w-full">
                
                <div className="Author text-lg text-white font-semibold">
                    {'- ' + author}
                </div>

                <div className="flex flex-row justify-evenly items-center w-1/6">
                    <button 
                        onClick={Refresh} 
                        className="items-center justify-center text-2xl text-white material-symbols-rounded"
                    >
                        Cached
                    </button>
                    <a 
                        href="https://github.com/YogeshYKG/quote-generator"
                        target="_blank"
                        className="items-center justify-center text-2xl text-white material-symbols-rounded"
                    >
                        dataset_linked
                    </a>

                    <a 
                        href="https://portfolio-six-beige-67.vercel.app/"
                        target="_blank"
                        className="items-center justify-center text-2xl text-white material-symbols-rounded"
                    >
                        account_circle
                    </a>
                    
                    
                </div>
                


            </div>
        </div>
    </div>
  )
}

export default QuoteCard
