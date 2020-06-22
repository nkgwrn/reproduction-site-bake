const test2 = () => {
  console.log("test2");
  const PhilosophyPanels = document.querySelectorAll(".js-philosophy-panel");
  console.log(PhilosophyPanels);

  // window.addEventListener("click", function () {
  //   PhilosophyPanel.classList.add("is-open");
  // });

  PhilosophyPanels.forEach((panel) => {
    panel.addEventListener("click", () => {
      console.log(panel);
      panel.classList.toggle("is-open");
    });
  });

  // function onPageLoad() {
  //   var PhilosophyPanels = document.querySelectorAll('#MyList li');
  //   for (i = 0; i < cols.length; i++)
  //   {
  //     cols[i].addEventListener('click', ListItemClick, false);
  //   }
  // }

  // function ListItemClick(event) {
  //   this.classList.toggle('selected');
  // }
};

export default test2;
