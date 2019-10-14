(function mainThemeScript($, Drupal) {
    Drupal.behaviors.plStarter = {
        attach(context) {
            $('html', context).addClass('js');

            // smooth scrolling script
            $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]').not('[href="#0"]').click(function (event) {
                // On-page links
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 500, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) {
                                // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });
        }
    };
})(jQuery, Drupal);
(function secondaryThemeScript($, Drupal) {
  Drupal.behaviors.demo2 = {
    attach(context) {
      $('html', context).addClass('js2');
    }
  };
})(jQuery, Drupal);
(function shareScript($, Drupal) {
  Drupal.behaviors.share = {
    attach(context) {
      var shareButtons = document.querySelectorAll(".st-custom-button[data-network]");
      for (var i = 0; i < shareButtons.length; i++) {
        var shareButton = shareButtons[i];

        shareButton.addEventListener("click", function (e) {
          var elm = e.target;
          var network = elm.dataset.network;

          console.log("share click: " + network);
        });
      }
    }
  };
})(jQuery, Drupal);
(function searchTogglerScript($, Drupal) {
  Drupal.behaviors.searchToggler = {
    attach(context) {
      $('.search-bar').hide();
      $('.search-toggle').click(function () {
        $('.search-bar').slideToggle("slow", function () {
          $('.search-toggle').toggleClass('open', $(this).is(':visible'));
        });
      });
      $('.search-page .search-bar').show();
    }
  };
})(jQuery, Drupal);
(function pageScript($, Drupal) {
  Drupal.behaviors.page = {
    attach(context) {}
  };
})(jQuery, Drupal);
(function togglerScript($, Drupal) {
  Drupal.behaviors.toggler = {
    attach(context) {
      $('.toggleable').hide();
      $('.toggle').click(function () {
        $('.toggleable').slideToggle("slow", function () {
          $('.toggle').toggleClass('open', $(this).is(':visible'));
        });
      });
    }
  };
})(jQuery, Drupal);
(function horizScript($, Drupal) {
  Drupal.behaviors.horiz = {
    attach(context) {
      $('.menu--horiz a').click(function () {
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.' + theClass).parent('li').addClass('active');
        //Animate
        $('html, body').stop().animate({
          scrollTop: $($(this).attr('href')).offset().top - 160
        }, 400);
        return false;
      });
    }
  };
})(jQuery, Drupal);
//# sourceMappingURL=script.js.map
