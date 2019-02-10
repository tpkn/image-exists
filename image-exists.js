/*! Image Exists, https://tpkn.me */
function ImageExists(images_list, complete, options){
   if(!Array.isArray(images_list)){
      throw new TypeError('Images list must be an array');
   }
   if(typeof complete !== 'function'){
      throw new TypeError('The second argument must be a function');
   }

   // Request timeout
   var timeout = 1000;
   if(options && typeof options.timeout === 'number'){
      timeout = options.timeout;
   }

   loop();

   function loop(){
      var time = Date.now();
      var image_url = images_list.shift();

      var request = new XMLHttpRequest();
      request.timeout = timeout;
      request.open('HEAD', image_url);

      request.onreadystatechange = function(){
         if(request.readyState != 4) return;
         if(request.status != 200){
            if(images_list.length){
               return loop();
            }

            // Return 'null' if list is empty and there is not a single 200 status
            return complete();
         }

         complete({
            url: image_url, 
            ping: (Date.now() - time)
         });
      }

      request.send();
   }
}
