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
            PORTFOLIO.initialize.pageTransition();
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
        },

        pageTransition: function(){
			if($body.hasClass('no-transition') ) { return true; }

			if(!$().animsition ) {
				$body.addClass('no-transition');
				console.log('pageTransition: Animsition not Defined.');
				return true;
			}

			window.onpageshow = function(event) {
				if(event.persisted) {
					window.location.reload();
				}
			};

			var animationIn = $body.attr('data-animation-in'),
				animationOut = $body.attr('data-animation-out'),
				durationIn = $body.attr('data-speed-in'),
				durationOut = $body.attr('data-speed-out'),
				loaderTimeOut = $body.attr('data-loader-timeout'),
				loaderStyle = $body.attr('data-loader'),
				loaderColor = $body.attr('data-loader-color'),
				loaderStyleHtml = $body.attr('data-loader-html'),
				loaderBgStyle = '',
				loaderBorderStyle = '',
				loaderBgClass = '',
				loaderBorderClass = '',
				loaderBgClass2 = '',
				loaderBorderClass2 = '';

			if(!animationIn ) { animationIn = 'fadeIn'; }
			if(!animationOut ) { animationOut = 'fadeOut'; }
			if(!durationIn ) { durationIn = 1500; }
			if(!durationOut ) { durationOut = 800; }
			if(!loaderStyleHtml ) { loaderStyleHtml = '<div class="css3-spinner-bounce1" /><div class="css3-spinner-bounce2" /><div class="css3-spinner-bounce3" />'; }

			if(!loaderTimeOut ) {
				loaderTimeOut = false;
			} else {
				loaderTimeOut = Number(loaderTimeOut);
			}

			if(loaderColor) {
				if( loaderColor == 'theme' ) {
					loaderBgClass = ' bgcolor';
					loaderBorderClass = ' border-color';
					loaderBgClass2 = ' class="bgcolor"';
					loaderBorderClass2 = ' class="border-color"';
				} else {
					loaderBgStyle = ' style="background-color:'+ loaderColor +';"';
					loaderBorderStyle = ' style="border-color:'+ loaderColor +';"';
				}
				loaderStyleHtml = '<div class="css3-spinner-bounce1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-bounce2'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-bounce3'+ loaderBgClass +'"'+ loaderBgStyle +'></div>'
			}

			if( loaderStyle == '2' ) {
				loaderStyleHtml = '<div class="css3-spinner-flipper'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
			} else if( loaderStyle == '3' ) {
				loaderStyleHtml = '<div class="css3-spinner-double-bounce1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-double-bounce2'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
			} else if( loaderStyle == '4' ) {
				loaderStyleHtml = '<div class="css3-spinner-rect1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect2'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect3'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect4'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect5'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
			} else if( loaderStyle == '5' ) {
				loaderStyleHtml = '<div class="css3-spinner-cube1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-cube2'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
			} else if( loaderStyle == '6' ) {
				loaderStyleHtml = '<div class="css3-spinner-scaler'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
			} else if( loaderStyle == '7' ) {
				loaderStyleHtml = '<div class="css3-spinner-grid-pulse"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
			} else if( loaderStyle == '8' ) {
				loaderStyleHtml = '<div class="css3-spinner-clip-rotate"><div'+ loaderBorderClass2 + loaderBorderStyle +'></div></div>';
			} else if( loaderStyle == '9' ) {
				loaderStyleHtml = '<div class="css3-spinner-ball-rotate"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
			} else if( loaderStyle == '10' ) {
				loaderStyleHtml = '<div class="css3-spinner-zig-zag"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
			} else if( loaderStyle == '11' ) {
				loaderStyleHtml = '<div class="css3-spinner-triangle-path"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
			} else if( loaderStyle == '12' ) {
				loaderStyleHtml = '<div class="css3-spinner-ball-scale-multiple"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
			} else if( loaderStyle == '13' ) {
				loaderStyleHtml = '<div class="css3-spinner-ball-pulse-sync"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
			} else if( loaderStyle == '14' ) {
				loaderStyleHtml = '<div class="css3-spinner-scale-ripple"><div'+ loaderBorderClass2 + loaderBorderStyle +'></div><div'+ loaderBorderClass2 + loaderBorderStyle +'></div><div'+ loaderBorderClass2 + loaderBorderStyle +'></div></div>';
			}

			$wrapper.animsition({
				inClass : animationIn,
				outClass : animationOut,
				inDuration : Number(durationIn),
				outDuration : Number(durationOut),
				loading : true,
				loadingParentElement : 'body',
				loadingClass : 'css3-spinner',
				loadingHtml : loaderStyleHtml,
				unSupportCss : [
			 	'animation-duration',
			 	'-webkit-animation-duration',
			 	'-o-animation-duration'
				],
				overlay : false,
				overlayClass : 'animsition-overlay-slide',
				overlayParentElement : 'body',
				timeOut: loaderTimeOut
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

    PORTFOLIO.documentOnLoad = {
		init: function() {
			PORTFOLIO.initialize.pageTransition();
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
        $wrapper = $('#wrapper'),
        $backToTop = $('#backtotop'),
        $navigationButton = $('#navigation_button');
    
    $(document).ready(PORTFOLIO.documentOnReady.init);
    $window.load(PORTFOLIO.documentOnLoad.init );
}) (jQuery);


