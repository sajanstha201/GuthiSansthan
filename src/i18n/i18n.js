import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import englishTranslation from './locales/english.json'
import nepaliTranslation from './locales/nepali.json'
import newariTranslation from './locales/newari.json'
import mithilaTranslation from './locales/mithila.json'
i18n
.use(initReactI18next)
.init({
    resources:{
        'english':{translation:englishTranslation},
        'nepali':{translation:nepaliTranslation},
        'newari':{translation:newariTranslation},
        'mithila':{translation:mithilaTranslation}
    },
    lng:'english',
    fallbackLng:'english',
    interpolation: {
        escapeValue: false
      }
})
export default i18n