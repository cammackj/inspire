function QuoteController() {

	var quoteService = new QuoteService()
	var quote = quoteService.getQuote(drawQuote)
	function drawQuote(quote) {
		var template = ''
		var quoteElem = document.getElementById('quote')
		template += `
		<h3>Inspirational Quote</h3>
		<blockquote>${quote.quote}</blockquote>
                `
		quoteElem.innerHTML = template
	}
}
