const scrollnavigation = () => {
  $(function () {
    var navLink = $("#gnav li a");
    console.log(navLink);

    var contentsArr = new Array();
    for (var i = 0; i < navLink.length; i++) {
      var targetContents = navLink.eq(i).attr("href");
      if (targetContents.charAt(0) == "#") {
        var targetContentsTop = $(targetContents).offset().top;
        var targetContentsBottom =
          targetContentsTop + $(targetContents).outerHeight(true) - 1;
        contentsArr[i] = [targetContentsTop, targetContentsBottom];
      }
    }

    function currentCheck() {
      var windowScrolltop = $(window).scrollTop();
      for (var i = 0; i < contentsArr.length; i++) {
        if (
          contentsArr[i][0] <= windowScrolltop &&
          contentsArr[i][1] >= windowScrolltop
        ) {
          navLink.removeClass("is-current");
          navLink.eq(i).addClass("is-current");
          i == contentsArr.length;
        }
      }
    }

    $(window).on("load scroll", function () {
      currentCheck();
    });

    navLink.click(function () {
      $("html,body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        500
      );
      return false;
    });
  });
};

export default scrollnavigation;
