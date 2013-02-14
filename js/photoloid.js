$(document).ready(function(){
 
	var $photos1 = '<div id="photos1" class="click">' + $('#photos1').html() + '</div>';
  	var $photos2 = '<div id="photos2" class="click">' + $('#photos2').html() + '</div>';
	var $photos3 = '<div id="photos3" class="click">' + $('#photos3').html() + '</div>';
	var $photos4 = '<div id="photos4" class="click">' + $('#photos4').html() + '</div>';
    var $width = $('img').width();
	var $body = $('body').width();
	var $margin = ($body - $width)/3;
	
	$('#photo-album').empty();
	$('#photo-album').css({'width':$width,'margin':'4% '+$margin}).append($photos1).append($photos2).append($photos3).append($photos4).fadeIn();
	
	$(document).on('click','.click',function(){
	            
		var $id = $(this).attr('id');
		var $originaltop = parseFloat($(this).css('top'));
		var $originalleft = parseFloat($(this).css('left'));
		var $top = $originaltop - 40;
        var $left = $originalleft - 40;

		switch($id)
			{
				case 'photos1': $('#photos1').animate({top: $top + 'px',left: $left +'px'},100);break;
				case 'photos2': $('#photos2').animate({top: $top + 'px',left: $left +'px'},100);break;
				case 'photos3': $('#photos3').animate({top: $top + 'px',left: $left +'px'},100);break;
				case 'photos4': $('#photos4').animate({top: $top + 'px',left: $left +'px'},100);break;
			}
			
		setTimeout(function(){

			$('#photo-album').empty();
			$('#photo-album').css({'width':$width,'margin':'4% '+$margin});
			
			switch($id)
				{
					case 'photos1': 	$('#photo-album').append($photos1);
										$('#photos1').css({'top': $top + 'px', 'left': $left + 'px'});
										$('#photo-album').append($photos2).append($photos3).append($photos4);
										$('#photos2').css({'top': $originaltop + 'px', 'left': $originalleft + 'px'});
										$('#photos3').css({'top': $originaltop + 'px', 'left': $originalleft + 'px'});
										$('#photos4').css({'top': $originaltop + 'px', 'left': $originalleft + 'px'});
										$('#photos1').animate({top: $originaltop + 'px', left: $originalleft + 'px'},25);
										break;
										
					case 'photos2': 	$('#photo-album').append($photos2);
										$('#photos2').css({'top': $top +'px' ,'left': $left + 'px'});
										$('#photo-album').append($photos3).append($photos4).append($photos1);
										$('#photos3').css({'top':$originaltop + 'px','left':$originalleft + 'px'});
										$('#photos4').css({'top':$originaltop + 'px','left':$originalleft + 'px'});
										$('#photos1').css({'top':$originaltop + 'px','left':$originalleft + 'px'});
										$('#photos2').animate({top: $originaltop + 'px',left: $originalleft + 'px'},25);
										break;
                    					
					case 'photos3': 	$('#photo-album').append($photos3);
										$('#photos3').css({'top': $top +'px' ,'left': $left + 'px'});
										$('#photo-album').append($photos4).append($photos1).append($photos2);
										$('#photos4').css({'top':$originaltop + 'px','left':$originalleft + 'px'});
										$('#photos1').css({'top':$originaltop + 'px','left':$originalleft + 'px'});
										$('#photos2').css({'top':$originaltop + 'px','left':$originalleft + 'px'});
										$('#photos3').animate({top: $originaltop + 'px',left: $originalleft + 'px'},25);
										break;
										
				 	case 'photos4': 	$('#photo-album').append($photos4);
										$('#photos4').css({'top': $top +'px' ,'left': $left + 'px'});
										$('#photo-album').append($photos1).append($photos2).append($photos3);
										$('#photos1').css({'top':$originaltop + 'px','left':$originalleft + 'px'});
										$('#photos2').css({'top':$originaltop + 'px','left':$originalleft + 'px'});
										$('#photos3').css({'top':$originaltop + 'px','left':$originalleft + 'px'});
										$('#photos4').animate({top: $originaltop + 'px',left: $originalleft + 'px'},25);
										break;
					
				}
		},400);
	});
});