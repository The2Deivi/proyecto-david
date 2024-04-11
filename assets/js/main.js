import updateCopyright from "./components/deate_updater.js";
import changeLanguage from "./components/language.js";
import parallax from "./components/parallax.js";
import activeMenu from "./components/selected_menu.js";
import resetToHome from "./helpers/reload_page.js";
import sendEmail from "./helpers/send_form.js";

parallax();

activeMenu();

resetToHome();

updateCopyright();

sendEmail();

// changeLanguage();