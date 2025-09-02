import CustomButton from '@/components/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section id="hero" className="flex justify-center items-center flex-col lg:min-h-dvh py-52 bg-primary overflow-hidden relative">
      <div className="px-4 lg:w-5xl z-20">
        <div className="flex justify-center md:justify-normal gap-6 items-center">
          <Image
            quality={100}
            src="/images/logo_instituto_light.svg"
            alt="Instituto Logo"
            className="drop-shadow-lg"
            draggable={false}
            width={58}
            height={96}
            priority
          />
          <h1 className="text-3xl w-[108px] md:w-auto font-times-new-roman md:text-5xl text-white-instituto drop-shadow-lg">
            {t('global.instituto_pelo_ser')}
          </h1>
        </div>

        <p className="text-base text-white-instituto mt-8 md:mt-6 drop-shadow-lg font-light text-center md:text-start md:text-lg md:w-[530px]">
          {t('hero.description')}
        </p>

        <div className="mt-14 md:mt-10 flex flex-col gap-4 md:flex-row md:gap-10">
          <CustomButton styleType="green">{t('global.support_our_cause')}</CustomButton>
          <CustomButton styleType="white">{t('global.need_help')}</CustomButton>
        </div>
      </div>
      <Image
        src="/images/circle_with_star.svg"
        alt="Circle with star"
        className="z-0 min-w-2xl min-h-[796px] rotate-[160deg] md:rotate-180 absolute -top-2/3 md:-top-2/3 lg:-top-1/2 -right-96 "
        draggable={false}
        width={796}
        height={672}
      />
      <Image
        src="/images/circle_with_star.svg"
        alt="Circle with star"
        className="z-10 absolute min-w-2xl min-h-[796px] rotate-12 -translate-x-2/3 -bottom-[402px] md:-translate-x-1/2 md:-bottom-2/3 lg:-bottom-1/2 left-0"
        draggable={false}
        width={796}
        height={672}
      />
    </section>
  );
}
