# filesizer

##Install
	$ npm install filesizer
##Usage
	const filesizer = require('filesizer');

	filesizer({url:'http://unicorn.com/foo.jpg').then((size) => {
		console.log(size);
	});
##API
	download(urlObject)
	Returns  a Promise.
	urlObject
	type: Object

	urlObject ={url:'http://unicorn.com/foo.jpg'};

	url
	Type: string
