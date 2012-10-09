$(document).ready(function() {
  $(window).bind('hashchange', function(event) {
    var tgt = location.hash.replace(/^#?/,'');
    if ( document.getElementById(tgt) ) {
      $.smoothScroll({scrollTarget: '#' + tgt});
      $(".active").removeClass("active");
      $("nav a[href=#" + tgt + "]").parent().addClass("active");
    }
  });

  $(window).trigger('hashchange');

  $("nav a").smoothScroll({
    easing: "swing",
    afterScroll: function() {
      $(this).parent().parent().find(".active").removeClass("active");
      $(this).parent().addClass("active");
      $.bbq.pushState( '#' + this.hash.slice(1) );
    },
    speed: 500
  });

  $("#contactForm").ajaxForm({
    url: 'postmaster.php',
    type: 'post',
    statusCode: {
      404: function() {
        $("#contactFormResponse").html("An error has ocurred. Please fill out all required fields.");
      },
      200: function() {
        $("#contactFormResponse").html("Message sent! Thank you.");
        $("#contactForm .clearable").val("");
      },
      500: function() {
        $("#contactFormResponse").html("An error has ocurred. The server returned a 500 error.");
      }
    }
  });

});