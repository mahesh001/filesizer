var filesizer =require('./index.js');

filesizer({url:'https://cdn0.froala.com/assets/editor/docs/server/meta-social/nodejs-7203227add554dae909cdc3ba03764e7.png'}).then((size) => {
	console.log(size);
});
