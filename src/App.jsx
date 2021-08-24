import React, { useState, useEffect } from "react";
import Quote from './components/Quote'
import Spinner from './components/Spinner'

const initialQuote ={
  text: "quote text",
  author: "quote author"
}


function App() {

  const [quote, setQuote] = useState(initialQuote)
  const [loading, setLoading] = useState(true)

  const updateQuote = async ()=>{
    
    setLoading(true)
    const url = "https://www.breakingbadapi.com/api/quote/random"
    const res = await fetch(url);
    const [data] = await res.json();
    const newQuote ={
      text:data.quote,
      author:data.author
    }
    setQuote(newQuote)
    setLoading(false)
    
  }



  useEffect(() => {
    updateQuote()
  }, [])


  return (
    <div className="app">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
      alt="logo"
    />
    <button onClick={()=>updateQuote()}>Get Another</button>
    {
      loading
      ? <Spinner></Spinner>
      : <Quote quote={quote}></Quote>
    }
    
    </div>
  );
}

export default App;
