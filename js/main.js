function playVideo(){
    jQuery("video").trigger('play');
}

jQuery(document).ready(function () {
    jQuery('.tab-accordium-content-wrapper .heading-block .list-wrapper ul li a').click(function (e) {
        e.preventDefault();
        var _link = jQuery(this).attr('data-link');
        jQuery(this).closest('li').addClass('active');
        jQuery(this).closest('li').siblings().removeClass('active');
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').addClass('active');
        jQuery(this).closest('.tab-accordium-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().removeClass('active');

    });

    jQuery('.video-content .image-wrapper span').click(function () {
        jQuery(".video-content .button-wrapper").hide();
        jQuery("video").removeAttr('poster');
        jQuery('video').attr('controls',true);
        playVideo();
    });

});

