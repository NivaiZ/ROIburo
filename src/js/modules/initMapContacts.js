export async function initMapContacts() {
  const mapExist = document.getElementById("contacts-map");
  if (mapExist) {
    await ymaps3.ready;

    const {
      YMap,
      YMapDefaultSchemeLayer,
      YMapDefaultFeaturesLayer,
      YMapMarker,
    } = ymaps3;

    const map = new YMap(document.getElementById("contacts-map"), {
      location: {
        zoom: 8,
        center: [37.617644, 55.755819],
      },
    });

    map.addChild(new YMapDefaultSchemeLayer());

    map.addChild(new YMapDefaultFeaturesLayer());

    const content = document.createElement("div");
    content.classList.add("contacts__pin");
    content.innerHTML =
      "<img class=contacts__img src=img/pin.svg alt=метка на карте>";

    const marker = new YMapMarker(
      {
        coordinates: [37.617644, 55.755819],
      },
      content
    );

    map.addChild(marker);
  }
}
