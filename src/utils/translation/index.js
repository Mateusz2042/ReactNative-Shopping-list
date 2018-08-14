import pl from './locales/pl';
import en from './locales/en';
import it from './locales/it';

const I18n = require('react-native-i18n').default;

export const translate = content => I18n.t(content);

export const getLanguages = () => [
  { key: 'pl', value: translate('polish') },
  { key: 'en', value: translate('english') },
  { key: 'it', value: translate('italian') },
];

export const setI18nLocale = (language) => {
  I18n.locale = language;
};

export const init = (settingsLocale, setLocale) => {
  I18n.fallbacks = true;
  I18n.translations = {
    pl,
    en,
    it,
  };

  if (!settingsLocale) {
    const deviceLocale = I18n.locale;

    const locale = getLanguages().find(l => deviceLocale.includes(l.key)) || {
      key: 'en',
    };

    setLocale(locale.key);
    setI18nLocale(locale.key);
  } else {
    setI18nLocale(settingsLocale);
  }
};
