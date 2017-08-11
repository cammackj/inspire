function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService()

	imageService.getImage(drawImage)

	
	function drawImage(image) {
		var template = ''
		var imageElem = document.getElementById('body')
		template += `
                <image src="${image.url}" alt="" class="src"></image>
                `
		imageElem.innerHTML = template
	}

}
