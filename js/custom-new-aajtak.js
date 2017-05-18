$(document).ready(function(){
		var photo_ga_len = $('#photo_gallery .belt li').length;
		var photo_ga_width = $('#photo_gallery .belt li').width();
		alert(photo_ga_width);
		//var photo_ga_width1 = $('#photo_gallery .belt ul li').width()+10;
		var photo_ga_ulwidth = photo_ga_width1 * photo_ga_len;
		$('#photo_gallery .belt ul').css('width', photo_ga_ulwidth);
		
		var photo_ga_counter = 0;

		$('#photo_gallery > .belt > .right_arrow').click(function(){
		
			if (photo_ga_counter <= photo_ga_len-4 )
			{
				$('#photo_gallery .belt ul').animate({
					left : '-='+ photo_ga_width1
				});
				
				photo_ga_counter+=1;
				$('#photo_gallery > .belt > .left_arrow').show();
			}
			
			else
			{
				$(this).hide();
			}
		});
		
		
		$('#photo_gallery > .belt > .left_arrow').click(function(){
			if (photo_ga_counter == 0 )
			{
				$(this).hide();
			}
			
			else
			{
				$('#photo_gallery .belt ul').animate({
					left : '+='+ photo_ga_width1
				});
				
				photo_ga_counter-=1;
				$('#photo_gallery > .belt > .right_arrow').show();
			}
		});
		
		$('#photo_gallery > .belt > ul > li').click(function(){
			var photo_crrent_src = $(this).children('img').attr('kickerimage');
			var photo_crrent_cnt = $(this).children('img').attr('alt');
			var photo_crrent_url = $(this).children('img').attr('story_url');
			$('#photo_gallery .big_img a').children('img').attr('src', photo_crrent_src);
			$('#photo_gallery .big_img a').children('.big_caption').html(photo_crrent_cnt);
			$('#photo_gallery .big_img a').attr('href', photo_crrent_url);
		
		});
});

/****Breaking News Close*******/
$(document).ready(function(){
$('.close-icon').click(function(){
		$(this).parent().hide();
		});
});


/****Share Icon****/
$(document).ready(function(){
$(".share_btn").hover(function(){
	$(this).next().css("display","block")
	});
});


jQuery(document).ready(function ($) {
	var count = 1;
	var slideCount = $('#photoSlider ul li').length;
	var slideWidth = $('#photoSlider ul li').width();
	var slideHeight = $('#photoSlider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	$('#photoSlider').css({ width: slideWidth, height: slideHeight });
	$('#photoSlider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('#photoSlider ul li:last-child').prependTo('#photoSlider ul');
	$('span#totalphoto').text(slideCount);
    function moveLeft() {
        $('#photoSlider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#photoSlider ul li:last-child').prependTo('#photoSlider ul');
            $('#photoSlider ul').css('left', '');
        });
    };
    function moveRight() {
        $('#photoSlider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#photoSlider ul li:first-child').appendTo('#photoSlider ul');
            $('#photoSlider ul').css('left', '');
        });
    };
     $('.control_prev').click(function () {
		if(count==1){
			count = slideCount;
			$('span#photocunt').text(count);
		}else{
	    count--
		$('span#photocunt').text(count);
	    }
        moveLeft();
    });
    $('.control_next').click(function () {
			if(count==slideCount){
			count = 1;
			$('span#photocunt').text(count);
		}else{
	    count++
		$('span#photocunt').text(count);
	    }
        moveRight();
    });
 });

jQuery(document).ready(function ($) {
	
	var slideCount = $('.m-gallery ul li').length;
	var slideWidth = $('.m-gallery ul li').width();
	var slideHeight = $('.m-gallery ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	$('.m-gallery').css({ width: slideWidth, height: slideHeight });
	$('.m-gallery ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('.m-gallery ul li:last-child').prependTo('.m-gallery ul');
    function moveLeft() {
        $('.m-gallery ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('.m-gallery ul li:last-child').prependTo('.m-gallery ul');
            $('.m-gallery ul').css('left', '');
        });
    };
    function moveRight() {
        $('.m-gallery ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('.m-gallery ul li:first-child').appendTo('.m-gallery ul');
            $('.m-gallery ul').css('left', '');
        });
    };
    $('.moviecontrol_prev').click(function () {
        moveLeft();
    });
    $('.moviecontrol_next').click(function () {
        moveRight();
    });
 });



jQuery(document).ready(function ($) {	
	//second slider=============
	var count = 1;
	var slideCount = $('#onlywebslider ul li').length;
	var slideWidth = $('#onlywebslider ul li').width();
	var slideHeight = $('#onlywebslider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	$('#onlywebslider').css({ width: slideWidth, height: slideHeight });
	$('#onlywebslider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('#onlywebslider ul li:last-child').prependTo('#onlywebslider ul');
	$('span#totalwebphoto').text(slideCount);
    function moveLeft() {
        $('#onlywebslider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#onlywebslider ul li:last-child').prependTo('#onlywebslider ul');
            $('#onlywebslider ul').css('left', '');
        });
    };
    function moveRight() {
        $('#onlywebslider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#onlywebslider ul li:first-child').appendTo('#onlywebslider ul');
            $('#onlywebslider ul').css('left', '');
        });
    };
    $('.control_prev1').click(function () {
		if(count==1){
			count = slideCount;
			$('span#webphotocunt').text(count);
		}else{
	    count--
		$('span#webphotocunt').text(count);
	    }
        moveLeft();
    });
    $('.control_next1').click(function () {
			if(count==slideCount){
			count = 1;
			$('span#webphotocunt').text(count);
		}else{
	    count++
		$('span#webphotocunt').text(count);
	    }
        moveRight();
    });
	
	
	
 });

  jQuery(document).ready(function ($) {
	var slideWidth = $('.program-nav-edu ul li').width();
	$('.program-nav-edu ul li:last-child').prependTo('#slider ul');
    function moveLeft() {
        $('.program-nav-edu ul').animate({
            left: + slideWidth
        }, 300, function () {
            $('.program-nav-edu ul li:last-child').prependTo('.program-nav-edu ul');
            $('.program-nav-edu ul').css('left', '');
        });
    };
    function moveRight() {
        $('.program-nav-edu ul').animate({
            left: - slideWidth
        }, 300, function () {
            $('.program-nav-edu ul li:first-child').appendTo('.program-nav-edu ul');
            $('.program-nav-edu ul').css('left', '');
        });
    };
    $('#priv-arrow').click(function () {
        moveLeft();
    });

    $('#nxt-arrow').click(function () {
        moveRight();
    });

});

