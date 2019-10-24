/*

	Template Name: Coreplex
    Template URI: http://hastech.company/
    Description: This is html5 template
    Author: HasTech
    Author URI: http://hastech.company/
    Version: 1.0

*/
/*================================================
[  Table of contents  ]
================================================
	
	01. TOP Menu Stick
	02. jQuery Mobile MeanMenu
	03. Mian Slider Active
	04. Magnific Popup For Video
	05. Venobox
	06. Counter Up
	07. Client Owl Cursol Active
	08. Brand Owl Active
	09. scrollUp
	10. Mailchimp Active
	11. WOW Active
	
================================================*/

(function ($) {
 "use strict";
	
	/*------ 01. TOP Menu Stick ------*/
	$(window).on('scroll',function() {    
	   var scroll = $(window).scrollTop();
	   if (scroll < 245) {
		$("#sticky-header").removeClass("sticky");
	   }else{
		$("#sticky-header").addClass("sticky");
	   }
	});
	
    
    /*------ 04. Magnific Popup For Video ------*/
	$('.popup-youtube').magnificPopup({
		type: 'iframe'
	});
	
    
	/*------ 02. jQuery Mobile MeanMenu ------*/
	jQuery('#mobile-nav').meanmenu();
 
	/*------ 03. Mian Slider Active ------*/
	$('.hero-slider').slick({
		arrows: false,
		autoplay: false,
		autoplaySpeed: 5000,
		infinite: true,
		slidesToShow: 1,
		dots: false,
		dotsClass:'slick-dots',
	});
 
 
	
	
	/*------ 05. Venobox ------*/
	$('.venobox').magnificPopup({
	  type: 'image',
	  gallery: {
			  enabled: true, // set to true to enable gallery
			}
	});
	
	
	/*------ 06. Counter Up ------*/
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	
	/*------ 07. Client Owl Cursol Active ------*/
	$('.client-owlcursol').owlCarousel({
		stagePadding: 475,
		loop:true,
		margin:30,
		nav:false,
		dots:true,
		responsive:{
			0:{
				stagePadding: 0,
				margin:0,
				items:1
			},
			600:{
				stagePadding: 100,
				margin:10,
				items:1
			},
			1000:{
				stagePadding: 150,
				margin:10,
				items:1,
			},
			1200:{
				stagePadding: 250,
				margin:10,
				items:1,
				
			},
			1920:{
				items:1,
			}
		}
	})
	
	
	/*------ 08. Brand Owl Active ------*/
	$('.brand-logo-active').owlCarousel({
	  loop: true,
	  margin: 30,
	  autoplay: false,
	  nav: false,
	  dots:false,
	  navText:["<i class='arrow_carrot-left'></i>","<i class='arrow_carrot-right'></i>"],
	  responsive: {
		0: {
		  items: 2
		},
		600: {
		  items: 4
		},
		1000: {
		  items: 6
		}
	  }
	})
	
	/*------ 09. scrollUp ------*/
	$.scrollUp({
		scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
	
	/*------ 10. Mailchimp Active ------*/
	$('#mc-form').ajaxChimp({
		 language: 'en',
		 callback: mailChimpResponse,
		 // ADD YOUR MAILCHIMP URL BELOW HERE!
		 url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
		});
		function mailChimpResponse(resp) {
		 
		 if (resp.result === 'success') {
		  $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
		  $('.mailchimp-error').fadeOut(400);
		  
		 } else if(resp.result === 'error') {
		  $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
		 }  
		}
	
 
})(jQuery);  