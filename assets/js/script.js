/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {


    $(function () {
        $(document).on('click', function (event) {
            if (!$(event.target).closest('.navbar').length) {
                $('.navbar-collapse.show').length ? $('.navbar-toggler').trigger('click') : null;
            }
        });
    })

    // for select#select-country
    $(function () {
        if ($('#select-country').length) {
            function custom_template(obj) {
                var data = $(obj.element).data();
                var text = $(obj.element).text();
                if (data && data['img_src']) {
                    img_src = data['img_src'];
                    template = $("<span class='img-option'><img src=\"" + img_src + "\" style=\"width:20px;height:12px;\" /> " + text + "</span>");
                    return template;
                }
            }
            $('#select-country').select2({
                minimumResultsForSearch: -1,
                'templateSelection': custom_template,
                'templateResult': custom_template,
            });
        }
    });


    $(function () {
        if ($('#layout-wrapper').length) {
            if (window.matchMedia("(min-width: 992px)").matches) {
                $('#layout-wrapper .layout-list').hover(function () {
                    $(this).siblings().removeClass('active');
                    $(this).toggleClass('active');
                });
            } else {
                if ($("#layout-wrapper").addClass('owl-carousel owl-theme')) {
                    $("#layout-wrapper").owlCarousel({
                        items: 2,
                        margin: 0,
                        nav: false,
                        loop: true,
                        rewind: true,
                        autoplay: false,
                        dots: true,
                        smartSpeed: 1000,
                        autoplayHoverPause: true,
                        autoplayTimeout: 2000,
                        navText: ['<span class="ni ni-chevron-left"></span>', '<span class="ni ni-chevron-right"></span>'],
                        responsive: {
                            0: {
                                items: 1
                            },
                            576: {
                                items: 2
                            },
                            992: {
                                items: 2
                            },
                        }
                    });
                }
            }
        }
    });


    $(function () {
        if ($('.related-post').length) {
            $(".related-post-carousel").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                rewind: true,
                autoplay: true,
                dots: false,
                smartSpeed: 1000,
                autoplayHoverPause: true,
                autoplayTimeout: 2000,
                navText: ['<span class="ni ni-chevron-left"></span>', '<span class="ni ni-chevron-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    },
                }
            });
        }
    });

});
