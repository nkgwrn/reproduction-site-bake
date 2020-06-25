const philosophyPanel = () => {
  const PhilosophyPanels = document.querySelectorAll(".js-philosophy-panel");

  PhilosophyPanels.forEach((panel) => {
    panel.addEventListener("click", () => {
      panel.classList.toggle("is-open");
    });
  });
};

export default philosophyPanel;
