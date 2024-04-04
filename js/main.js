
// tab to accordion jQuery

flag = true;
function accordion_modal() {

    if (jQuery(window).width() < 991) {
        if (flag) {
            jQuery(".tab-accordion-content-wrapper .tab-heading-block li a").each(function () {
                var _link = jQuery(this).attr("data-link");
                jQuery(this).closest('.tab-accordion-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').detach().appendTo(jQuery(this).closest('li'));

            });
            jQuery('.tab-accordion-content-wrapper .tab-heading-block li.active .inner-content').slideDown();
            jQuery('.tab-accordion-content-wrapper .tab-heading-block li.active').siblings().find(".inner-content").slideUp();
            jQuery('.tab-accordion-content-wrapper').find('.tab-accordion-content-block').remove();
            flag = false;
        }
    }

    else {

        if (!flag) {
            var _current_link = jQuery('.tab-accordion-content-wrapper .tab-heading-block li.active a').attr("data-link")
            jQuery('.tab-accordion-content-wrapper').append('<div class="tab-accordion-content-block"></div>');
            jQuery(".tab-accordion-content-wrapper .tab-heading-block li a").each(function () {
                var _link = jQuery(this).attr("data-link");
                jQuery(this).closest('.tab-accordion-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').detach().appendTo(jQuery(".tab-accordion-content-block"));
            });
            setTimeout(function () {
                if (_current_link == undefined) {
                    jQuery('.tab-accordion-content-wrapper .tab-heading-block li:first-child').addClass('active');
                    jQuery('.inner-content:first-child').fadeIn();
                }
                else {
                    jQuery(this).closest('.tab-accordion-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().fadeOut(0);
                    jQuery(this).closest('.tab-accordion-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').fadeIn(0);
                }

            });
            flag = true;
        }

    }
}


jQuery(document).ready(function () {

    accordion_modal();
    jQuery('.tab-accordion-content-wrapper .tab-heading-block li a').click(function (e) {
        e.preventDefault();
        if (jQuery(window).width() < 991) {
            var _link = jQuery(this).attr('data-link');
            jQuery(this).closest("li").find('.inner-content[data-target= "' + _link + '"]').stop(true, true).slideToggle(500);
            jQuery(this).closest('li').siblings().find('.inner-content').stop(true, true).slideUp(500);
            jQuery(this).closest('li').toggleClass('active');
            jQuery(this).closest('li').siblings().removeClass('active');
            jQuery(this).closest('li').siblings().find('.inner-content').each(function () {
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
            jQuery(this).closest('.tab-accordion-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').fadeIn(0);
            jQuery(this).closest('.tab-accordion-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().fadeOut(0);
            jQuery(this).closest('.tab-accordion-content-wrapper').find('.inner-content[data-target= "' + _link + '"]').siblings().each(function () {
                jQuery(this).find("video").removeAttr('controls');
                jQuery(this).find("span").show();
                jQuery(this).find("video").get(0).pause();
                jQuery(this).find(".video-content").removeClass("video-control");
            });

        }

    });

    // video set jQuery
    jQuery('.video-content .poster-image span').click(function () {
        jQuery(this).closest(".video-content").find("span").hide();
        jQuery(this).closest(".video-content").find("video").removeAttr("poster").attr('controls', true).get(0).play();
        jQuery(this).closest(".video-content").addClass("video-control");
    });



});

jQuery(window).resize(function () {
    accordion_modal();
});
