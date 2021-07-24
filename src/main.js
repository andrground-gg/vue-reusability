import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles.css';
import localizationPlugin from './localizationPlugin.js';

const en = {
  app: {
    title: 'Custom plugins',
    changeLangBtn: 'Change language'
  }
}
const ru = {
  app: {
    title: 'Кастомные плагины',
    changeLangBtn: 'Поменять язык'
  }
}
const ro = {
  app: {
    title: 'Pluginuri personalizate',
    changeLangBtn: 'Schimbă limba'
  }
}

const app = createApp(App);
app.provide('languages', [{name: 'en', ...en}, {name: 'ru', ...ru}, {name: 'ro', ...ro}]);
app.use(localizationPlugin, {en, ru, ro});
app.mount('#app');
