import SectionTitle from '@/components/utils/section_title';
import MissionBg from '@/assets/images/mission_bg.png';
import Image from 'next/image';
import CustomButton from '@/components/button';
import { useTranslations } from 'next-intl';

export default function MissionSection() {
  const t = useTranslations();

  return (
    <section id="mission" className="w-full flex flex-col items-center gap-6">
      <SectionTitle title={t('mission.title')} />

      <div className="pb-5 relative min-h-[200px] bg-gradient-to-l flex flex-col items-center from-primary-400 to-primary overflow-hidden lg:rounded-xl w-full max-w-5xl">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-secondary via-secondary to-primary opacity-60" />

        <Image alt="Imagem" src={MissionBg} className="absolute inset-0 z-0 object-cover w-full h-full" fill draggable={false} priority />

        <div className="relative px-2 z-20 flex justify-center h-full w-full text-white-instituto md:pt-6">
          <p className="text-5xl mt-8 drop-shadow-instituto md:text-6xl md:mt-5">&ldquo;</p>
          <p className=" text-center drop-shadow-instituto max-w-[860px] text-lg md:text-2xl lg:text-3xl py-8">{t('mission.mission')}</p>
          <p className="text-5xl mt-8  drop-shadow-instituto md:text-6xl md:mt-5">&rdquo;</p>
        </div>

        <CustomButton styleType="white" className="z-20 opacity-100">
          {t('global.see_more')}
        </CustomButton>
      </div>
    </section>
  );
}
