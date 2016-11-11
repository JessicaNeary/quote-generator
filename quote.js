var quotes = ["Quote1", "quote2", "quote3"]

function pickQuote(quotes){
	return quotes[Math.floor(Math.random()*quote.length)];
}

function showQuote(){
	console.log(pickQuote(quotes));
}
