'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Instagram from './svg/instagram';
import Facebook from './svg/facebook';
import Whatsapp from './svg/whatsapp';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/util/util';
import Linkedin from './svg/linkedin';

export default function Header() {
  const [hideHeader, setHideHeader] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      if (scrollDifference > 300) {
        lastScrollY.current = currentScrollY;
        setHideHeader(true);
      } else if (scrollDifference < -100 || currentScrollY <= 100) {
        lastScrollY.current = currentScrollY;
        setHideHeader(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn('flex flex-col font-black fixed top-0 w-full duration-1000', hideHeader ? '-translate-y-[4.25rem]' : 'translate-y-0')}>
      <div className="bg-white-instituto h-[4.25rem] flex justify-between items-center px-8 py-3">
        <div className="flex gap-4 items-center">
          <Image src="/images/logo_instituto.svg" alt="Logo Instituto Pelo Ser" width={40} height={45} className="h-auto w-auto" />
          <h1 className="font-bold text-xl font-times-new-roman">INSTITUTO PELO SER</h1>
        </div>

        <nav className="flex gap-14 font-normal text-lg text-primary">
          <div className="flex items-center gap-2">
            <a>O Instituto</a>
            <ChevronDown />
          </div>
          <a>Newsletter</a>
          <a>Contato</a>
          <a>Voluntariado</a>
        </nav>
      </div>

      <div className="flex self-end text-white-instituto font-bold text-sm">
        <button className="bg-green-instituto px-4 py-0.5 hover:cursor-pointer">
          <p>DOAR</p>
        </button>
        <button className="bg-primary px-4 py-0.5 hover:cursor-pointer">
          <p>SEJA VOLUNTÁRIO</p>
        </button>
        <div className="flex items-center gap-1.5 bg-secondary px-4 py-0.5 hover:cursor-pointer text-white">
          <a href="https://wa.me/+555192461343" target="_blank" className="h-4 w-4">
            <Whatsapp />
          </a>
          <a href="https://www.instagram.com/institutopeloser/" target="_blank" className="h-4 w-4">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61570823157773" target="_blank" className="h-4 w-4">
            <Facebook />
          </a>
          <a href="https://www.linkedin.com/company/instituto-pelo-ser/" target="_blank" className="h-4 w-4">
            <Linkedin />
          </a>
        </div>
      </div>
    </header>
  );
}
