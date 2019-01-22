var btn = document.getElementById('btn');
btn.onclick = function () {
	var text = document.querySelector ('p.intro');
	text.classList.add('red');
	var img = document.querySelector ('.desktop');
	img.style.display = 'none';
}

$(function () {
	$(window).scroll(function() {
	    $('#learn .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.skill-free').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});

$(window).scroll(function() {
		$('.skill-change').each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+650) {
						$(this).addClass("fadeInUp");
					}
				});
			});
$(window).scroll(function() {
		$('.skill-know').each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+650) {
						$(this).addClass("fadeInUp");
					}
				});
			});
	$(window).scroll(function() {
			$('.title-write').each(function(){
					var imagePos = $(this).offset().top;

					var topOfWindow = $(window).scrollTop();
					if (imagePos < topOfWindow+650) {
							$(this).addClass("fadeInLeft");
					}
			});
	});
	$(window).scroll(function() {
			$('.input').each(function(){
					var imagePos = $(this).offset().top;

					var topOfWindow = $(window).scrollTop();
					if (imagePos < topOfWindow+650) {
							$(this).addClass("fadeInLeft");
					}
			});
	});
	$(window).scroll(function() {
			$('.btn-form').each(function(){
					var imagePos = $(this).offset().top;

					var topOfWindow = $(window).scrollTop();
					if (imagePos < topOfWindow+650) {
							$(this).addClass("fadeInRight");
					}
			});
	});
})
