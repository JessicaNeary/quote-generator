var quote = '';
var author = '';

function requestQuote() {

	var xhr = new XMLHttpRequest()

	xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      var json = JSON.parse(xhr.responseText);
			quote = json["quote"];
			author = json["author"];
			document.getElementById("quote-display").innerHTML = '"' + quote + '"';
			document.getElementById("author-display").innerHTML = author;
    }
	}

	xhr.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies", true)

	xhr.setRequestHeader("X-Mashape-Key", "D50aO827kvmsh33DHgK3KLy0gOaOp15DkpKjsn7FAZdKRdSOxL")
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
	xhr.setRequestHeader("Accept", "application/json")

	xhr.send()
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function tweet(){

 openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));
}
