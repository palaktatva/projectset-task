flag = true ;
function accoridun_modal( ) {

    if(jQuery(window).width() <= 1199){
        if(flag){
        jQuery(".tab-accordium-content-wrapper .heading-block .list-wrapper ul a").each(function(){ 
                var _link = jQuery(this).attr("data-link");
                jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' +_link+ '"]').detach().appendTo(jQuery(this).closest('li')); 
                jQuery(this).closest("li").find('.inner-content').removeClass('.active');           
                jQuery(this).closest("li:not(.active)").find('.inner-content[data-target= "' +_link+ '"]').slideUp(0);                     
                jQuery(this).closest("li.active").find('.inner-content[data-target= "' +_link+ '"]').slideDown();         

            });
            jQuery('.tab-accordium-content-wrapper').find('.tab-accordiun-content-block').remove(); 
            flag = false;
            }
        }

    else {

    if(!flag){
        jQuery('.tab-accordium-content-wrapper').append('<div class="tab-accordiun-content-block"></div>');
        jQuery(".tab-accordium-content-wrapper .heading-block .list-wrapper ul li a").each(function(){
            var _link = jQuery(this).attr("data-link");
            jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' +_link+ '"]').detach().appendTo(jQuery(".tab-accordiun-content-block"));
            var item = jQuery(this).closest("li").attr('class');
            if(item == undefined){
                jQuery("li:first-child").addClass('active');
                jQuery(".inner-content:first-child").fadeIn(0);
            } 
            else{
                jQuery('.inner-content[data-target= "' +_link+ '"]').fadeIn(0);
                jQuery('.inner-content[data-target= "' +_link+ '"]').siblings().fadeOut(0);
            }          
        });


        // var item = jQuery("li").attr('class');
        // if(item.length === 0){
        //  jQuery("li:first-child").addClass('active');
         
        // }

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
    jQuery(this).closest("li").find('.inner-content[data-target= "' +_link+ '"]').stop(true , true).slideToggle();
    jQuery(this).closest('li').siblings().find('.inner-content').slideUp();
    jQuery(this).closest('li').toggleClass('active');
    jQuery(this).closest('li').siblings().removeClass('active');
}
else {
    
        var _link = jQuery(this).attr('data-link');
        jQuery(this).closest('li').addClass('active');
        jQuery(this).closest('li').siblings().removeClass('active');
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').fadeIn(0);
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().fadeOut(0);
        // jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find("video").get(0).pause();       
        // jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find("video").removeAttr('controls');
        // jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find(".button-wrapper").show();
        // var defaultposter = jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find("video").attr('poster');
        // jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find("video").attr('poster', defaultposter);
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().each(function(){
          var defaultposter = jQuery(this).find('video').attr('poster');
        //   console.log(defaultposter);
          jQuery(this).find("video").removeAttr('controls');
          jQuery(this).find(".button-wrapper").show();
          jQuery(this).find("video").get(0).pause();  
          jQuery(this).find("video").attr('poster', defaultposter);
        });
        // jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find("video").attr('poster', defaultposter);
        
    }

});
   

       jQuery('.video-content .image-wrapper span').click(function () {
        jQuery(this).closest(".video-content").find(".button-wrapper").hide();
        jQuery(this).closest(".video-content").find("video").removeAttr("poster").attr('controls',true).get(0).play();
    });



});

jQuery(window).resize(function () {
	accoridun_modal();
});
