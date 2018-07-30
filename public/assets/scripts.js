

const highRes = (url)=>{
	const cutLink = url.split('thumbnails');
	return `${cutLink[0]}media/medium-images${cutLink[1]}`;
}

const updateInfo = (i)=>{
	$.getJSON('http://localhost:3000/assets/results.json', (bod)=>{
		$('.image-wrapper img').attr('src', highRes(bod[i-1].img))
	 	$('.info-wrapper h2').text(bod[i-1].header)
	 	$('.info-wrapper p').text(bod[i-1].caption)
	})

	window.history.pushState('page', 'Title', `/?image=${i}`);
}

const init = ()=>{

	if(location.search.split('image=')[1]){
		const userEntered = location.search.split('image=')[1];
		updateInfo(userEntered);
	}

	else{
		updateInfo(1)
	}

	let inx = 1;

	$('.next-btn').on('click', ()=>{
	 	inx++;
	 	if (inx > 7238){
	 		inx = 1;
	 	}

	 	updateInfo(inx);
	})

	$('.prev-btn').on('click', ()=>{
	 	inx--;
	 	if (inx <= 0){
	 		inx = 7238;
	 	}
	 	updateInfo(inx);
	})
}






$(document).ready(()=>{
	init();
})
