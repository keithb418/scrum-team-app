let rootElement = document.getElementById("root");

export const handleResize = () => {
  window.addEventListener("resize", () => {
    rootElement.style = `height: ${window.innerHeight}px`;
  });

  window.dispatchEvent(new Event("resize"));
};