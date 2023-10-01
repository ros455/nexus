import { getDictionary } from '@/lib/dictionary'
import MainPage from '@/compomemts/MainPage'

export default async function Home({params: { lang }}) {
  const { page } = await getDictionary(lang)
  return (
    <>
      <MainPage lang={lang}/>
    </>
  )
}
