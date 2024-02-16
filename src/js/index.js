import { initMapContacts } from "./modules/initMapContacts";
import { contactsSlider } from "./modules/contactsSlider";
import { mapTitleInit, maskMapInit } from "./modules/mapTitle";

function handleDOMContentLoaded() {
  initMapContacts();
  contactsSlider();
  mapTitleInit();
}
addEventListener("DOMContentLoaded", handleDOMContentLoaded);
