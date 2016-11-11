var quotes = ["quote1", "quote2", "quote3"]

function requestQuote() {
	console.log("Request quote")

	var xhr = new XMLHttpRequest()

	xhr.onreadystatechange = function() {
	    if (xhr.readyState == XMLHttpRequest.DONE) {
	        var json = JSON.parse(xhr.responseText);
					var quote = json["quote"];
					var author = json["author"];
					console.log(quote)
	    }
	}

	xhr.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies", false)

	xhr.setRequestHeader("X-Mashape-Key", "D50aO827kvmsh33DHgK3KLy0gOaOp15DkpKjsn7FAZdKRdSOxL")
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
	xhr.setRequestHeader("Accept", "application/json")

	xhr.send()
}

function pickQuote(quotes){
	return quotes[Math.floor(Math.random() * quotes.length)];
}

function showQuote() {
	console.log("Show quote")

	var quote = pickQuote(quotes);

	console.log(quote);

	document.getElementById("quote-display").innerHTML = quote;

}
