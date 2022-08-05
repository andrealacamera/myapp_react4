import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import COMMON_EN from '../src/assets/locales/en-US/common.json';
import COMMON_IT from '../src/assets/locales/it-IT/common.json';

const resources = {
  en: {
    translation: COMMON_EN
  },
  it: {
    translation: COMMON_IT
  },
}
console.log(resources)
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'it',
  });

export default i18n;