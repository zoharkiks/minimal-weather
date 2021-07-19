const fetchQuotes=(setQuote)=>{
    fetch('https://api.quotable.io/random?maxLength=100')
    .then((res) => res.json())
    .then((result)=>setQuote(result))
}

export default fetchQuotes