#!/usr/bin/env node

// 1

// const Xray = require('x-ray');
// const x = Xray({
//   filterns: {
//     trim: function (value) {
// 	    try{
// 	      return typeof value === 'string' ? value.trim().replace(/\s\s+/g, ' ') : value
// 	    }
// 	    catch(err){
// 	    	return value
// 	    }
//     },
//     highRes: function (value) {
// 	    try{
// 		      let cutLink = value.split('thumbnails');
// 		      let highResUrl = `${cutLink[0]}media/medium-images${cutLink[1]}`
// 		      return highResUrl
// 	    }
// 	    catch(err){
// 	    	return value
// 	    }
//     }
//   }
// });


// let url = `https://oregondigital.org/catalog/?page=1&per_page=100&q=oimb&search_field=all_fields&utf8=%E2%9C%93`

// x(url, '.blacklight-info-fedora-afmodel-image', [{
// 	header: 'h5',
//   	img: '.thumbnail-container img@src',
//   	caption: 'dd'
  
// }])
//   .paginate('.pagination ul li:nth-of-type(2) a@href')
//   .limit(73)
//   .write('results.json');

// 2


const express = require('express')
const cheerio = require('cheerio')
const fs = require('fs')

const data = require('./public/assets/results.json');
const app = express();


app.use('/assets', express.static('public/assets'))
 
app.get('/', (req, res)=> {

  res.sendFile('./public/index.html', {root: __dirname})
})

app.get('/thumbnails', (req, res)=>{
	
	res.sendFile('./public/thumbnails.html', {root:__dirname})	

})

 
app.listen(3000)
console.log('opened on localhost:3000')

