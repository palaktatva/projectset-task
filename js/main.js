flag = true ;
function accoridun_modal( ) {

    if(jQuery(window).width() < 1199){
        if(flag){
        jQuery(".tab-accordium-content-wrapper .heading-block .list-wrapper ul li a").each(function(){ 
                var _link = jQuery(this).attr("data-link");
                jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' +_link+ '"]').detach().appendTo(jQuery(this).closest('li'));                        
                // jQuery(this).closest("li:not(.active)").find('.inner-content[data-target= "' +_link+ '"]').slideUp(0);                     
                // jQuery(this).closest("li.active").find('.inner-content[data-target= "' +_link+ '"]').slideDown();         

            });
            jQuery('.tab-accordium-content-wrapper .heading-block .list-wrapper ul li.active .inner-content').slideDown();
            jQuery('.tab-accordium-content-wrapper .heading-block .list-wrapper ul li.active').siblings().find(".inner-content").slideUp();
            jQuery('.tab-accordium-content-wrapper').find('.tab-accordiun-content-block').remove(); 
            flag = false;
            }
        }

    else {

    if(!flag){
        var _current_link  = jQuery('.tab-accordium-content-wrapper .heading-block .list-wrapper ul li.active a').attr("data-link")
        jQuery('.tab-accordium-content-wrapper').append('<div class="tab-accordiun-content-block"></div>');
        jQuery(".tab-accordium-content-wrapper .heading-block .list-wrapper ul li a").each(function(){
            var _link = jQuery(this).attr("data-link");
            jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' +_link+ '"]').detach().appendTo(jQuery(".tab-accordiun-content-block"));
            // var item = jQuery(this).closest("li").attr('class');
            // if(item == undefined){
            //     jQuery("li:first-child").addClass('active').siblings().removeClass('active');
            //     jQuery(".inner-content:first-child").fadeIn(0).siblings().fadeOut(0)
            // } 
            // else{
                
            //     jQuery('.inner-content[data-target= "' +_link+ '"]').siblings().fadeOut(0);
            //     jQuery('.inner-content[data-target= "' +_link+ '"]').fadeIn(0);
            // }          
        });
        setTimeout(function(){
            if(_current_link==undefined){
                jQuery('.heading-block .list-wrapper ul li:first-child').addClass('active');
                jQuery('.inner-content:first-child').fadeIn();
            }
            else{
                jQuery('.inner-content[data-target= "' +_current_link+ '"]').siblings().fadeOut(0);
                jQuery('.inner-content[data-target= "' +_current_link+ '"]').fadeIn(0);
            }

        });
        flag = true;
    }

    } 
}


jQuery(document).ready(function () {

accoridun_modal();
    jQuery(".inner-content:first-child").fadeIn(0);
    jQuery('.tab-accordium-content-wrapper .heading-block .list-wrapper ul li a').click(function (e) {
    e.preventDefault();
    if(jQuery(window).width() < 1199){
    var _link = jQuery(this).attr('data-link');
    jQuery(this).closest("li").find('.inner-content[data-target= "' +_link+ '"]').stop(true , true).slideToggle(500);
    jQuery(this).closest('li').siblings().find('.inner-content').stop(true , true).slideUp(500);
    jQuery(this).closest('li').toggleClass('active');
    jQuery(this).closest('li').siblings().removeClass('active');
    jQuery(this).closest('li').siblings().find('.inner-content').each(function(){
jQuery(this).find("video").removeAttr('controls');
          jQuery(this).find(".button-wrapper").show();
          jQuery(this).find("video").get(0).pause();
          jQuery(this).find(".video-content").removeClass("video-control");
    });
}
else {
    
        var _link = jQuery(this).attr('data-link');
        jQuery(this).closest('li').addClass('active');
        jQuery(this).closest('li').siblings().removeClass('active');
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').fadeIn(0);
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().fadeOut(0);  
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().each(function(){       
          jQuery(this).find("video").removeAttr('controls');
          jQuery(this).find(".button-wrapper").show();
          jQuery(this).find("video").get(0).pause();
          jQuery(this).find(".video-content").removeClass("video-control");
           //   var defaultposter = jQuery(this).find('video').attr('poster');
           //   jQuery(this).find("video").attr('poster', defaultposter);
           //   console.log(defaultposter);
        
        });
        
    }

});
   

       jQuery('.video-content .image-wrapper span').click(function () {
        jQuery(this).closest(".video-content").find(".button-wrapper").hide();
        jQuery(this).closest(".video-content").find("video").removeAttr("poster").attr('controls',true).get(0).play();
        jQuery(this).closest(".video-content").addClass("video-control");
    });



});

jQuery(window).resize(function () {
	accoridun_modal();
});
