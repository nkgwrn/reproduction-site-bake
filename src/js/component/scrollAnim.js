const scrollAnim = () => {
  const openingAnims = document.querySelectorAll(".js-opening");

  var scrollAnimFunc = function () {
    for (var i = 0; i < openingAnims.length; i++) {
      var triggerMargin = 500;
      if (
        window.innerHeight >
        openingAnims[i].getBoundingClientRect().top + triggerMargin
      ) {
        openingAnims[i].classList.add("is-active");
      }
    }
  };
  window.addEventListener("load", scrollAnimFunc);
  window.addEventListener("scroll", scrollAnimFunc);
};

export default scrollAnim;
