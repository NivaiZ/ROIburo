export function mapTitleInit() {
  const map = document.querySelector(".contacts__map");
  if (map) {
    map.addEventListener("click", () => {
      map.classList.remove("contacts__map--noactive");
    });
  }
}
