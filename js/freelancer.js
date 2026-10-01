/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Browser/Android back button closes the open portfolio modal
$(function() {
    var closingFromHistory = false;

    $('.portfolio-modal').on('show.bs.modal', function() {
        if (!history.state || history.state.modal !== this.id) {
            history.pushState({ modal: this.id }, '', '#' + this.id);
        }
    }).on('hide.bs.modal', function() {
        // Closed via X / Close button / Esc: drop the history entry we added
        if (!closingFromHistory && history.state && history.state.modal === this.id) {
            history.back();
        }
    });

    $(window).on('popstate', function() {
        var target = history.state && history.state.modal;
        closingFromHistory = true;
        $('.portfolio-modal.in').not('#' + target).modal('hide');
        closingFromHistory = false;
        if (target) {
            $('#' + target).modal('show'); // forward button reopens
        }
    });
});
