import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import englishTranslation from './locales/english.json'
import nepaliTranslation from './locales/nepali.json'
i18n
.use(initReactI18next)
.init({
    resources:{
        'english':{translation:englishTranslation},
        'nepali':{translation:nepaliTranslation}
    },
    lng:'nepali',
    fallbackLng:'nepali',
    interpolation: {
        escapeValue: false
      }
})
export default i18n