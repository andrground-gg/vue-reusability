export default {
  install(app, options) {
    let currentLang = 'ru';

    const setLang = lang => currentLang = lang;
    const getLang = () => currentLang;
    app.provide('setLang', setLang);
    app.provide('getLang', getLang);

    app.config.globalProperties.$localization = localizationKey => {
      return localizationKey.split('.').reduce((words, key) => {
        return words[key] || 'key is unknown';
      }, options[currentLang]);
    }
  }
}