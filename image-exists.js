/*! 
 * Image Exists, https://tpkn.me
 */
"use strict";
function ImageExists(input, options, complete){
   if(typeof input !== 'string' && !Array.isArray(input)){
      throw new TypeError('Images list must be an array');
   }
   if(typeof complete !== 'function'){
      throw new TypeError('No callback function');
   }

   function Request(url, options, cb){
      let { timeout = 1000 } = options;

      let request = new XMLHttpRequest();
      request.timeout = timeout;
      request.open('HEAD', url);

      request.onreadystatechange = function(){
         if(request.readyState != 4) return;
         if(request.status != 200){
            cb(true, url);
            return
         }
         
         cb(null, url);
      }

      request.send();
   }

   if(Array.isArray(input)){
      let done = 0;
      let results = [];

      for (let i = 0, len = input.length; i < len; i++) {
         Request(input[i], options, (err, result) => {
            done++;
            if(!err){
               results.push(result);
            }
            if(done == input.length - 1){
               complete(null, results);
            }
         });
      }

   }else{
      Request(input, options, complete);
   }
}


if(typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
   module.exports = ImageExists;
}else{
   if(typeof define === 'function' && define.amd){
      define([], function(){
         return ImageExists;
      });
   }else{
      window.ImageExists = ImageExists;
   }
}
