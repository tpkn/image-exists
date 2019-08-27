# Image Exists
Check if remote image exists

## Features
 - Ping single remote image or an array of images
 - **Does not consume time and traffic downloading the whole image**
 - Cross browser (almost), pure vanilla js


## API

```javascript
ImageExists(input[, options], complete)
```

### input   
**Type**: _String_ | _Array_  
Single url, or an array of urls


### options.timeout   
**Type**: _Number_  
**Default**: `1000` ms   
Wait for a server response


### complete   
**Type**: _Function_  
Callback function   


## Usage   
```javascript
let images = [
   'https://localhost/fail.jpg', 
   'https://localhost/timeout.gif', 
   'https://localhost/yey.png'
];

ImageExists(images, { timeout: 1000 }, (err, result) => {
	if(err){
		// ...
		return
	}

   console.log(result);
});
// => { url: 'http://localhost/yey.png', time: 49 }
```
