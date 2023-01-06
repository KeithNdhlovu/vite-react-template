import { initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import moment from 'moment'

import Config from '@relay/helpers/Config'
import afZA from '@relay/i18n/af-ZA.json'
import ar from '@relay/i18n/ar.json'
import en from '@relay/i18n/en.json'
import esUY from '@relay/i18n/es-UY.json'

const defaultLocale = 'en'
moment.locale(i18next.language || defaultLocale)

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: en,
      },
      ar: {
        translations: ar,
      },
      'af-ZA': {
        translations: afZA,
      },
      'es-UY': {
        translations: esUY,
      },
    },
    fallbackLng: 'en',
    debug: Config.env === 'local',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      format(value, format) {
        if (format === 'uppercase') return value.toUpperCase()
        if (value instanceof Date) return moment(value).format(format)
        return value
      },
    },
  })

i18next.format = (key) => {
  return i18next.t('utils.format', { text: i18next.t(key) })
}

export default i18next
