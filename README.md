# filesizer

## Install
	$ npm install filesizer
## Usage
	const filesizer = require('filesizer');

	filesizer({url:'https://cdn0.froala.com/assets/editor/docs/server/meta-social/nodejs-7203227add554dae909cdc3ba03764e7.png'}).then((size) => {
		console.log(size);
	});
## API
	filesizer(urlObject)
	Returns  a Promise.
	
	urlObject
	type: Object

	urlObject ={url:'http://unicorn.com/foo.jpg'};

	url
	Type: string
