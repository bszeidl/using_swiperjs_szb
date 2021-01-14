function pageLoad() {
	const _root = document.querySelector('#root');

	_root.insertAdjacentHTML('afterbegin', '<div class="swiper-container">');
	const _swiperCont = document.querySelector('.swiper-container');
	_swiperCont.insertAdjacentHTML('afterbegin', '<div class="swiper-wrapper">');
	const _swiperWrap = document.querySelector('.swiper-wrapper');
	_swiperWrap.insertAdjacentHTML('afterbegin', '<div class="swiper-slide">Slide 10</div>');
	_swiperWrap.insertAdjacentHTML('afterbegin', '<div class="swiper-slide">Slide 9</div>');
	_swiperWrap.insertAdjacentHTML('afterbegin', '<div class="swiper-slide">Slide 8</div>');
	_swiperWrap.insertAdjacentHTML('afterbegin', '<div class="swiper-slide">Slide 7</div>');
	_swiperWrap.insertAdjacentHTML('afterbegin', '<div class="swiper-slide">Slide 6</div>');
	_swiperWrap.insertAdjacentHTML('afterbegin', '<div class="swiper-slide">Slide 5</div>');
	_swiperWrap.insertAdjacentHTML('afterbegin', '<div class="swiper-slide">Slide 4</div>');
	_swiperWrap.insertAdjacentHTML('afterbegin', '<div class="swiper-slide">Slide 3</div>');
	_swiperWrap.insertAdjacentHTML('afterbegin', '<div class="swiper-slide">Slide 2</div>');
	_swiperWrap.insertAdjacentHTML('afterbegin', '<div class="swiper-slide">Slide 1</div>');
	_swiperCont.insertAdjacentHTML('beforeend', '<div class="swiper-pagination"></div>');
	_swiperCont.insertAdjacentHTML('beforeend', '<button class="swiper-button-next">Prev</button>');
	_swiperCont.insertAdjacentHTML('beforeend', '<button class="swiper-button-prev">Next</button>');
	
	var swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

}

window.addEventListener('load', pageLoad);