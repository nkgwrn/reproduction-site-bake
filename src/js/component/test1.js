function test1() {
  //TODO: 黄色い部分のアニメーション
  console.log("test1");
  const openYellow = document.getElementById("js-opening");
  window.addEventListener("load", function () {
    openYellow.classList.add("is-active");
  });
}

export { test1 };
