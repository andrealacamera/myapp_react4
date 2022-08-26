# myapp_react4

created on 2022-08-05, updated on 2022-08-26


## Introduction

- Initialize vite app `npm create vite@latest myapp_react4`

- Install [TailwindCss](https://tailwindcss.com/docs/guides/vite)

- Add Router `npm i react-router-dom@6` and configure (see [myapp_react3](https://github.com/andrealacamera/myapp_react3))

- Install react-icons `npm install react-icons --save`


## Setup i18next

Add i18next `npm install react-i18next i18next i18next-browser-languagedetector --save`. See [instructions](https://react.i18next.com/guides/quick-start) or follow these steps.

1. Create new `/src/assets/locales/{lng}/common.json` files, where each `{lng}` is the language to use, and fill with the translations.

2. Add `/src/i18.js`, beside the `main.jsx` file, and import the JSON translations. In order to import several files (different namespaces), check [this page](https://www.i18next.com/how-to/add-or-load-translations) or [this one](https://www.i18next.com/overview/api#addresourcebundle). In the example here below, we set user language by using the `i18next-browser-languagedetector` package, see the [guide](https://react.i18next.com/latest/using-with-hooks). 

```js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

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
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'it',
    supportedLngs: ['en', 'it'],
  });

export default i18n;
```
_Note that the default namespace is **translation**_

3. Import i18n file on `main.jsx`
```js
...
import './i18n';
...
```

## Use i18next

1. `useTranslation` hook. See the [documentation](https://react.i18next.com/latest/usetranslation-hook);
2. `withTranslation` higher order components (HOC). See the [documentation](https://react.i18next.com/latest/withtranslation-hoc);
3. Render prop `<Translation>`. See the [documentation](https://react.i18next.com/latest/translation-render-prop);
4. Use the `<Trans>` component. See the [documentation](https://react.i18next.com/latest/trans-component).

