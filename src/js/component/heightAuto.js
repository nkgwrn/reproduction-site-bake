const heightAuto = () => {
  $("html,body").animate({ scrollTop: 0 }, "1");
  $("body")
    .delay(2500)
    .queue(function () {
      $(this).addClass("is-active");
    });
};

export default heightAuto;
