$('.comments__page .catalog_rew .win1').click(function(){
	$('#comment_modal').arcticmodal()
});

$('.comments__page .catalog_rew .win2').click(function(){
	$('#comment_modal2').arcticmodal()
});

$('.comments__page .catalog_rew .win3').click(function(){
	$('#comment_modal3').arcticmodal()
});

$('.comments__page .catalog_rew .win4').click(function(){
	$('#comment_modal4').arcticmodal()
});

$('.comments__page .catalog_rew .win5').click(function(){
	$('#comment_modal5').arcticmodal()
});

$('.comments__page .catalog_rew .win6').click(function(){
	$('#comment_modal6').arcticmodal()
});

$('.comments__page .catalog_rew .win7').click(function(){
	$('#comment_modal7').arcticmodal()
});

$('.comments__page .catalog_rew .win8').click(function(){
	$('#comment_modal8').arcticmodal()
});

$('.comments__page .catalog_rew .win9').click(function(){
	$('#comment_modal9').arcticmodal()
});

$('.comments__page .catalog_rew .win10').click(function(){
	$('#comment_modal10').arcticmodal()
});

$('.epm_big_banner').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	nav:true,
	navText:false,
	dots:true,
	
});

$(".phone").mask("+7(999)999-99-99");



$('#epm_header .epm_bottom_menu .ph1').click(function(){
	 $("#epm_header .epm_bottom_menu nav").slideToggle('');
});
 
$('.btn11').click (function(){
  $(this).toggleClass('open');
  $('#epm_header .epm_menu_H_top').slideToggle();
});

$('.epm_but_search_top').click (function(){
  $(this).hide();
  $('#epm_header .epm_top_menu form').toggleClass('active');
});


$(document).ready(function(){
$('#epm_header .epm_bottom_menu nav > ul > li > span > em').click(function(){
	$(this).parent().parent().find('ul').slideToggle(); 
});
 
});

$(document).ready(function() {

	$(".fancybox").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

});
