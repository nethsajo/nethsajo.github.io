var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backSpeed: 30,
    smartBackspace: true,

    backDelay: 500,
    startDelay: 1000,

    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,

    loop: true,
    loopCount: Infinity,

    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,

    contentType: 'html'
});

var $ = jQuery.noConflict();

$.fn.inlineStyle = function (prop) {
	return this.prop("style")[$.camelCase(prop)];
};

$.fn.doOnce = function(func) {
	this.length && func.apply(this);
	return this;
}

var PORTFOLIO = PORTFOLIO || {};

(function($) {
	PORTFOLIO.initialize = {
		init: function() {
            PORTFOLIO.initialize.backToTop();
            PORTFOLIO.initialize.smoothScrolling();
            PORTFOLIO.initialize.navigation();
            PORTFOLIO.initialize.redirectSocial();
        },

        backToTop: function() {
            $backToTop.hide();
            $window.scroll(function () {
            if ($(this).scrollTop() > 600) { $backToTop.show(); } else { $backToTop.fadeOut(); }
                return false;
            });

            $backToTop.click(function(event) {
                $('html, body').animate({ scrollTop: 0 }, 500);
                return false;
                event.preventDefault();
            });
        },

        smoothScrolling: function(e) {
            $('a[href*="#"]').on('click', function(e) {
                e.preventDefault();
                $('.navigation_button').toggleClass('active', false);
                $('#portfolio-menu').toggleClass('active', false);
                

                $('html, body').animate({
                    scrollTop: $($(this).attr('href')).offset().top
                }, 600, 'linear');
            });
        },

        navigation: function() {
            $navigationButton.click(function(){
                $navigationButton.toggleClass('active');
                $('#portfolio-menu').toggleClass('active');
            });
        },

        redirectSocial: function() {
            $("#social--icons a").click(function(e){
                $redirect = $(this).attr("href");
                window.location.href = $redirect;
            });
        }
    };

    PORTFOLIO.widget = {
        init: function(){
            PORTFOLIO.widget.counter();
            PORTFOLIO.widget.progress();
        },

        counter: function(){

			if(!$().appear ) {
				console.log('counter: Appear not Defined.');
				return true;
			}

			if(!$().countTo ) {
				console.log('counter: countTo not Defined.');
				return true;
			}

			var $counterEl = $('.counter:not(.counter-instant)');
			if( $counterEl.length > 0 ){
				$counterEl.each(function(){
					var element = $(this);
					var counterElementComma = $(this).find('span').attr('data-comma');
					if(!counterElementComma ) { counterElementComma = false; } else { counterElementComma = true; }
					if($body){
						element.appear( function() {
							PORTOFLIO.widget.runCounter( element, counterElementComma);
						},{accX: 0, accY: -120},'easeInCubic');
					} else {
						PORTFOLIO.widget.runCounter(element, counterElementComma);
					}
				});
			}
        },
        
        runCounter: function(counterElement,counterElementComma ){
			if(counterElementComma == true ) {
				counterElement.find('span').countTo({
					formatter: function (value, options) {
						value = value.toFixed(options.decimals);
						value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
						return value;
					}
				});
			} else {
				counterElement.find('span').countTo();
			}
		},

        progress: function(){

			if(!$().appear ) {
				console.log('progress: Appear not Defined.');
				return true;
			}

			var $progressEl = $('.progress');
			if( $progressEl.length > 0 ){
				$progressEl.each(function(){
					var element = $(this),
						skillsBar = element.parent('li'),
						skillValue = skillsBar.attr('data-percent');

					if($body){
						element.appear(function(){
							if (!skillsBar.hasClass('skills-animated')) {
								element.find('.counter-instant span').countTo();
								skillsBar.find('.progress').css({width: skillValue + "%"}).addClass('skills-animated');
							}
						},{accX: 0, accY: -120},'easeInCubic');
					} else {
						element.find('.counter-instant span').countTo();
						skillsBar.find('.progress').css({width: skillValue + "%"});
					}
				});
			}
		}
    };

    PORTFOLIO.documentOnReady = {
		init: function() {
            PORTFOLIO.initialize.init();
            PORTFOLIO.widget.init();
		}
    };
    
    var $window = $(window),
        $body = $('body'),
        $backToTop = $('#backtotop'),
        $navigationButton = $('#navigation_button');
    
    $(document).ready(PORTFOLIO.documentOnReady.init);
}) (jQuery);


