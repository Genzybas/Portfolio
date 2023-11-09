let width = window.innerWidth;
let navbar = document.getElementsByTagName('nav');
let lios = document.getElementsByClassName('lios');
let hire = document.getElementsByClassName('hire');
let whatsapp = document.getElementsByClassName('fa-whatsapp');
let arrowup = document.getElementsByClassName('fa-angle-up');
let navlinks = document.querySelector('.navlinks');
let links = document.querySelectorAll('.links');
let menu = document.getElementsByClassName('fa-bars');
let close = document.getElementsByClassName('fa-xmark');

window.onload = function () {
	if (width <= 768) {
		links.forEach((i) => {
			i.addEventListener('click', () => {
				navlinks.classList.remove('navactive');
				close[0].style.display = 'none';
				menu[0].style.display = 'block';
			});
		});
	}
};
window.onresize = () => {
	if (width > 768) {
		location.reload();
	}
};
window.addEventListener('scroll', () => {
	if (window.scrollY > 100 && width < 481) {
		navbar[0].style.padding = '15px';
		navbar[0].style.background = '#f9004d';
		lios[0].style.color = 'white';
	} else if (window.scrollY > 100 && width <= 768 && width > 481) {
		navbar[0].style.padding = '15px 30px';
		navbar[0].style.background = '#f9004d';
		lios[0].style.color = 'white';
	} else if (window.scrollY > 100 && width > 768) {
		navbar[0].style.background = '#f9004d';
		navbar[0].style.padding = '15px 50px';
		lios[0].style.color = 'white';
		links.forEach((i) =>
			i.addEventListener('mouseover', () => {
				i.style.color = 'white';
			})
		);
	} else if (window.scrollY < 100 && width <= 768) {
		navbar[0].style.background = 'none';
		navbar[0].style.padding = '15px`';
		lio[0].style.color = 'rgb(15, 179, 56)';
	} else if (window.scrollY < 100 && width > 768) {
		navbar[0].style.background = 'none';
		navbar[0].style.padding = '30px 50px';
		lio[0].style.color = 'rgb(15, 179, 56)';
		links.forEach((i) =>
			i.addEventListener('mouseover', () => {
				i.style.color = 'rgb(15, 179, 56)';
			})
		);
		links.forEach((i) =>
			i.addEventListener('mouseleave', () => {
				i.style.color = 'white';
			})
		);
	} else {
		navbar[0].style.padding = '15px';
		navbar[0].style.background = 'none';
	}
	if (window.scrollY > 500) {
		hire[0].style.display = 'none';
		whatsapp[0].style.display = 'block';
	} else {
		hire[0].style.display = 'unset';
		whatsapp[0].style.display = 'none';
	}
	
	window.scrollY >= screen.availHeight
		? (arrowup[0].style.display = 'block')
		: (arrowup[0].style.display = 'none');
});

function pressMenu() {
	navlinks.classList.add('navactive');
	close[0].style.display = 'block';
	menu[0].style.display = 'none';
}
function pressClose() {
	navlinks.classList.remove('navactive');
	close[0].style.display = 'none';
	menu[0].style.display = 'block';
}


var slideIndex = 1;
showSlides(slideIndex);

function slides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("projects-grid");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


