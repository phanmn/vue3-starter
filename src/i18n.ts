import { createI18n } from 'vue-i18n';
import viLang from './i18n/vi';

const i18n = createI18n({
  locale: 'vi',
  messages: {
    vi: viLang,
  }
});

export default i18n;