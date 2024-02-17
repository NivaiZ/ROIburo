import { mapContactsInit } from "./modules/mapContactsInit";
import { contactsSliderInit } from "./modules/contactsSliderInit";
import { mapTitleInit } from "./modules/mapTitleInit";
import { teamsSliderInit } from "./modules/teamsSliderInit";

function handleDOMContentLoaded() {
  mapContactsInit();
  contactsSliderInit();
  mapTitleInit();
  teamsSliderInit();
}
addEventListener("DOMContentLoaded", handleDOMContentLoaded);
