import 'server-only'

const dictionaries = {
  ua: () => import('@/dictionaries/ua.json').then(module => module.default),
  en: () => import('@/dictionaries/en.json').then(module => module.default)
}

export const getDictionary = async (locale) => dictionaries[locale]()
