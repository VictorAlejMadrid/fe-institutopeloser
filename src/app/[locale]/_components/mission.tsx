import SectionTitle from '@/components/Utils/section_title';
import MissionBg from '@/assets/images/mission_bg.png';
import Image from 'next/image';

export default function MissionSection() {
  return (
    <section id="mission" className="w-full flex flex-col items-center gap-4">
      <SectionTitle title="Nossa missão" />

      <div className="relative h-fit bg-gradient-to-l from-primary-400 to-primary">
        <Image alt="Imagem" src={MissionBg} className="absolute z-0 object-cover" fill draggable={false} />
        <p className="z-10">
          Empoderar as novas gerações para que sejam agentes de mudança em suas comunidades, construindo um futuro mais justo e inclusivo.
        </p>
      </div>
    </section>
  );
}
