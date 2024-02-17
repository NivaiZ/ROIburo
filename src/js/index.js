import { mapContactsInit } from "./modules/mapContactsInit";
import { contactsSliderInit } from "./modules/contactsSliderInit";
import { mapTitleInit } from "./modules/mapTitleInit";
import { teamsSliderInit } from "./modules/teamsSliderInit";
import { copyTextClipboardInit } from "./modules/copyTextClipboard";

function handleDOMContentLoaded() {
  mapContactsInit();
  contactsSliderInit();
  mapTitleInit();
  teamsSliderInit();
  copyTextClipboardInit();
}
addEventListener("DOMContentLoaded", handleDOMContentLoaded);
