// $('.carousel').carousel({
//   interval: 2000
// })

// let apiKey = "nXuvwT4RGM9p5B4nnyuEgeW47LbBHhJbbEdIWgQEdahbbsZucKalkVR-zNSxSXTnWJnbI9t-aYET6t7aq7aeOu1pABA67El7utK8mea7V0JsGQsdQONVmLMNI_8sXXYx";
// var request = new XMLHttpRequest();
// request.addValue("Bearer nXuvwT4RGM9p5B4nnyuEgeW47LbBHhJbbEdIWgQEdahbbsZucKalkVR-zNSxSXTnWJnbI9t-aYET6t7aq7aeOu1pABA67El7utK8mea7V0JsGQsdQONVmLMNI_8sXXYx", forHTTPHeaderField: "Authorization");
// request.open('GET', 'https://api.yelp.com/v3/categories/{alias}', true);
// request.onload = function() {
//
//   var data = JSON.parse(this.response);
//   console.log(data);

  // if (request.status >= 200 && request.status < 400){
  //   data.forEach(search => {
  //     console.log(search.location)
  //   })
  // } else {
  //   console.log('error')
  // }
// }
// request.send();


// 'use strict';
// const yelp = require('yelp-fusion');
//
// // Place holder for Yelp Fusion's API Key. Grab them
// // from https://www.yelp.com/developers/v3/manage_app
// const apiKey = '<YOUR_API_KEY>';
//
// const searchRequest = {
//   term:'Four Barrel Coffee',
//   location: 'san francisco, ca'
// };
//
// const client = yelp.client(apiKey);
//
// client.search(searchRequest).then(response => {
//   const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);
// }).catch(e => {
//   console.log(e);
// });
