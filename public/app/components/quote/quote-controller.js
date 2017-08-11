function QuoteController(){

	// TODO: CHANGE ALL VARIABLES TO QC
	var qs = new QuoteController()

	qs.getQuote(function(quote){
		console.log('What is the quote', quote)
	})
}
