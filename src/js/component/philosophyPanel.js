const philosophyPanel = () => {
  const PhilosophyPanels = document.querySelectorAll(".js-philosophy-panel");

  PhilosophyPanels.forEach((panel) => {
    panel.addEventListener("click", () => {
      console.log(panel);
      panel.classList.toggle("is-open");
    });
  });
};

export default philosophyPanel;
