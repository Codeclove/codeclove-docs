import DefaultTheme from 'vitepress/theme';
import HomePortal from './HomePortal.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomePortal', HomePortal);
  },
};
