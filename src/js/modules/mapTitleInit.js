export function mapTitleInit() {
  const map = document.querySelector(".contacts__map");
  console.log(map);
  if (map) {
    map.addEventListener("click", () => {
      map.classList.remove("contacts__map--noactive");
    });
  }
}
