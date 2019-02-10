# Image Exists
Check if remote image exists


Pass it an array of images, get the first one that exists. Pure vanilla, using `XMLHttpRequest` API. Does not waste traffic to download the entire file.


## API

```javascript
imageExists(images_list, complete[, options])
```

### images_list   
**Type**: _Array_  
Array of urls


### complete   
**Type**: _Function_  
Callback function


### options   
**Type**: _Object_  
  - **timeout**  <_Number_>  Time to wait for server answer. Default: `1000` ms



## Usage   
```javascript
let images = [
   'https://localhost/fail.jpg', 
   'https://localhost/timeout.gif', 
   'https://localhost/yey.png'
];

let callback = (result) => {
   console.log(result);
}

let options = {
   timeout: 1000
}

imageExists(images, callback, options);
// => { url: 'http://localhost/yey.png', time: 49 }
```
