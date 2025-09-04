import SectionTitle from '@/components/utils/section_title';
import { useTranslations } from 'next-intl';

interface InfoData {
  count: string;
  description: string;
}

export default function NumbersSection() {
  const t = useTranslations();

  return (
    <section id="numbers" className="w-full flex flex-col items-center gap-10">
      <SectionTitle title={t('numbers.title')} />

      <div className="flex gap-14 flex-wrap justify-center">
        <SingleDataDisplay count={'660'} description="Jovens Beneficiados" />
        <SingleDataDisplay count={'810'} description="Horas de Voluntariado" />
        <SingleDataDisplay count={'05'} description="Ações de Impacto" />
        <SingleDataDisplay count={'05'} description="Áreas de Atuação" />
      </div>
    </section>
  );
}

function SingleDataDisplay(data: InfoData) {
  const { count, description } = data;

  return (
    <div className="relative flex flex-col items-center max-w-48 text-center gap-2">
      <div className="absolute rounded-[50%] w-56 h-18 border-secondary border-2 z-0 rotate-[-160deg] mt-6" />
      <p className="z-10 text-5xl text-primary font-extrabold">{count}</p>
      <p className="z-10 text-2xl font-bold">{description}</p>
    </div>
  );
}
