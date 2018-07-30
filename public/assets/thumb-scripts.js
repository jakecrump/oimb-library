

let start = 0;
let end = 30;

const highRes = (url)=>{
	const cutLink = url.split('thumbnails');
	return `${cutLink[0]}media/medium-images${cutLink[1]}`;
}

const updateInfo = (beg, end)=>{
	$.getJSON('http://localhost:3000/assets/results.json', (bod)=>{
		for (let i in bod){
			if (i <= end && i > beg){

				$('.image-wrapper').append(`
					<a target="_blank" href="/?image=${parseInt(i)+1}"><div class="oimb-image">
					    <img src="${bod[i].img}">
					</div>`)
			}
		}
	})
}

const init = ()=>{

	updateInfo(0, 30)
	
}



$(document).ready(()=>{

	init();




	$('button').on('click', ()=>{
		start +=30;
		end +=30;
		updateInfo(start, end)

	});
})
