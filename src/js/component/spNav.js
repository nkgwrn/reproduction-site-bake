const spNav = () => {
  $(function () {
    const windowW = $(window).width();
    if (windowW < 768) {
      $(".js-spnav").click(function () {
        $(this).toggleClass("is-open");
        $(".js-gnav").toggleClass("is-open");
      });
    }
  });
};

export default spNav;
