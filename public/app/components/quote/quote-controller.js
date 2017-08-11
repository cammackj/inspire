function QuoteController(){

	// TODO: CHANGE ALL VARIABLES TO QC
	var quoteService = new QuoteService()
	function drawImage(quote) {
		var template = ''
		var quoteElem = document.getElementById('quote')
		template += `
                <h1>${quote.quote}</h1>
                `
		quoteElem.innerHTML = template
	}
	quoteService.getQuote(function(quote){
		console.log('What is the quote', quote)
		quoteService.getQuote(drawQuote)
	})
}
