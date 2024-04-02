flag = true ;
function accoridun_modal( ) {

    if(jQuery(window).width() <= 1199){
        if(flag){
        jQuery(".tab-accordium-content-wrapper .heading-block .list-wrapper ul a").each(function(){ 
                var _link = jQuery(this).attr("data-link");
                jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' +_link+ '"]').detach().appendTo(jQuery(this).closest('li'));               
                jQuery(this).closest("li:not(.active)").find('.inner-content[data-target= "' +_link+ '"]').slideUp();

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
        });

        flag = true;
    }

    } 
}


jQuery(document).ready(function () {

accoridun_modal();

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
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').addClass('active');
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().removeClass('active');
        jQuery(this).closest('.tab-accordium-content-wrapper.active');
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find("video").get(0).pause();       
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find("video").removeAttr('controls');
        // var defaultposter = jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find("video").attr("data-poster");
        // jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find("video").attr('poster', defaultposter);        
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find(".button-wrapper").show();
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
