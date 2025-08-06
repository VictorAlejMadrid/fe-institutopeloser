import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getDictionary } from './dictionaries';
import { AppLocale } from '@/util/app_locales';

export default async function Page({ params }: { params: Promise<{ lang: AppLocale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header />
      <div className="h-[200vh] flex items-center justify-center">{dict.contact.title}</div>
      <Footer />
    </>
  );
}
