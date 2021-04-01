$(document).ready(function () {
	/* Webp */
	function testWebP(callback) {
		var webP = new Image();

		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};

		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {
		if (support == true) {
			document.querySelector('body').classList.add('webp');
		}
	});

	/* Menu */
	var linkWithArrow = document.querySelector('.header-navigation__link--whith-arrow');
	var listSubMenu = document.querySelector('.header-navigation__list-submenu');
	linkWithArrow.addEventListener("click", function (e) {
		listSubMenu.classList.toggle('is-active');
	});
	document.documentElement.addEventListener("click", function (e) {
		if (!e.target.closest('.header-navigation')) {
			listSubMenu.classList.remove('is-active');
		}
	});

var iconMenu = document.querySelector(".icon-menu");

if (iconMenu != null) {
	var delay = 500;
	var body = document.querySelector("body");
	var menuBody = document.querySelector(".header-navigation__list");
	iconMenu.addEventListener("click", function (e) {
		if (!body.classList.contains('_wait')) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
}

function menu_close() {
	var iconMenu = document.querySelector(".icon-menu");
	var menuBody = document.querySelector(".header-navigation__list");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================

//BodyLock
function body_lock(delay) {
	var body = document.querySelector("body");

	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}

function body_lock_remove(delay) {
	var body = document.querySelector("body");

	if (!body.classList.contains('_wait')) {
		var lock_padding = document.querySelectorAll("._lp");
		setTimeout(function () {
			for (var index = 0; index < lock_padding.length; index++) {
				var el = lock_padding[index];
				el.style.paddingRight = '0px';
			}

			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);
		body.classList.add("_wait");
		setTimeout(function () {
			body.classList.remove("_wait");
		}, delay);
	}
}

function body_lock_add(delay) {
	var body = document.querySelector("body");

	if (!body.classList.contains('_wait')) {
		var lock_padding = document.querySelectorAll("._lp");

		for (var index = 0; index < lock_padding.length; index++) {
			var el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.page').offsetWidth + 'px';
		}

		body.style.paddingRight = window.innerWidth - document.querySelector('.page').offsetWidth + 'px';
		body.classList.add("_lock");
		body.classList.add("_wait");
		setTimeout(function () {
			body.classList.remove("_wait");
		}, delay);
	}
}
//=================

	/*Убирание placeholder*/
	$('input, textarea').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '');
	});
	$('input, textarea').blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});

	/*работа фиксированного хедера*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 10) {
			$("header").addClass('fixedtop');
		}
		else {
			$("header").removeClass('fixedtop');
		}
	});

	/*модалка*/
	if ($('.popup-open').length) {
		$('.popup-open').magnificPopup({
			removalDelay: 300,
			fixedContentPos: true,
			callbacks: {
				beforeOpen: function () {
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			midClick: true
		});
	}

	/*Перетягивание контента*/
	if ($('.draggable-container').length) {
		$(".draggable-container").draggable({
			scroll: true,
			axis: "x",
		});
	}


	/*Закрытие модалки*/
	$('.modal-cancel-btn').click(function (e) {
		e.preventDefault();
		$(".mfp-close").click();
	});

	// Слайдер отзывов
	if ($('.reviews-slider').length) {
		$('.reviews-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: true,
			speed: 700,
			responsive: [
				{
					breakpoint: 1019,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	}

	/*Табы карт*/
	$(".maps-tabs_link").click(function (e) {
		e.preventDefault();
		var $searchId = $($(this).attr("href"));
		$(".maps-tabs_link").not($(this)).removeClass("active-map");
		$(this).addClass("active-map");
		$(".maps-tabs_content").not($searchId).css("display", "none");
		$searchId.css("display", "block");
	});

});


var $carousel2 = $('.experts-slider');

function showSliderScreen2($widthScreen) {
	if ($widthScreen > "768") {
		if (!$carousel2.hasClass('slick-initialized')) {
			$carousel2.slick({
				slidesToShow: 4,
				slidesToScroll: 2,
				arrows: true,
				responsive: [
					{
						breakpoint: 1019,
						settings: {
							slidesToShow: 3,
						}
					}
				]
			});
		}
	} else {
		if ($carousel2.hasClass('slick-initialized')) {
			$carousel2.slick('unslick');
		}
	}
}
var widthScreen = $(window).width();
$(window).ready(showSliderScreen2(widthScreen)).resize(
	function () {
		var widthScreen = $(window).width();
		showSliderScreen2(widthScreen);
	}
);
