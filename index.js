var rp = require('request-promise');

module.exports = function(options) {
  if (typeof(options)==="object" && options.url){
    options = {
      uri: options.url
    };
  }

  options = options || {}

  options.method = 'HEAD';
  options.followAllRedirects = true;
  options.followOriginalHttpMethod = true;

  return rp(options)
  			.then((res)=>{
  				const code = res.statusCode
    			if (code >= 400) {
      				return (new Error('Received invalid status code: ' + code));
    			}

    			var len = res['content-length'];
    			if (!len) {
      				return (new Error('Unable to determine file size'));
    			}
    			else
    				return (res['content-length']);

  			})
  			.catch(function (err) {
        		return err;
    		});
}
