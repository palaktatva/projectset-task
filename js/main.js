function tab_to_accoridun( ) {
    if(jQuery(window).width() < 1199){
        jQuery(".tab-accordium-content-wrapper .heading-block .list-wrapper ul li.active").each(function(){      
                jQuery(".inner-content.active").detach().appendTo(jQuery(this).closest("li"));
                jQuery(".tab-accordiun-content-block").remove();
        });
    }    

     
}

jQuery(document).ready(function () {

tab_to_accoridun();


    jQuery('.tab-accordium-content-wrapper .heading-block .list-wrapper ul li a').click(function (e) {
        e.preventDefault();
        var _link = jQuery(this).attr('data-link');
        jQuery(this).closest('li').addClass('active');
        jQuery(this).closest('li').siblings().removeClass('active');
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').addClass('active');
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().removeClass('active');
        jQuery(this).closest('.tab-accordium-content-wrapper.active');
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find("video").get(0).pause();       
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find("video").removeAttr('controls');
        var defaultposter = jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find("video").attr("data-poster");
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find("video").attr('poster', defaultposter);        
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().find(".button-wrapper").show();
        
    });

    jQuery('.video-content .image-wrapper span').click(function () {
        jQuery(this).closest(".video-content").find(".button-wrapper").hide();
        jQuery(this).closest(".video-content").find("video").removeAttr("poster").attr('controls',true).get(0).play();
    });



});

jQuery(window).resize(function () {
	tab_to_accoridun();
});
