function QuoteController() {

	var quoteService = new QuoteService()
	var quote =	quoteService.getQuote(drawQuote)
	console.log(quote)
	function drawQuote(quote) {
		var template = ''
		var quoteElem = document.getElementById('quote')
		template += `
                <h1>${quote.quote}</h1>
                `
		quoteElem.innerHTML = template
	}
}
