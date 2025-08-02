'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Instagram from '../svg/instagram';
import Facebook from '../svg/facebook';
import Whatsapp from '../svg/whatsapp';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/util/util';
import Linkedin from '../svg/linkedin';
import { urls } from '@/util/env';
import ResponsiveMenu from './_components/responsive_menu';

export default function Header() {
  const [aboutMenu, setAboutMenu] = useState(false);

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
    <header
      className={cn('z-20 flex flex-col font-black fixed top-0 w-full duration-1000', hideHeader ? '-translate-y-18' : 'translate-y-0')}
      onMouseLeave={() => setAboutMenu(false)}
    >
      <div className="bg-white-instituto h-18 flex justify-between items-center px-4 py-3 md:px-8">
        <div className="flex gap-4 items-center">
          <Image src="/images/logo_instituto.svg" alt="Logo Instituto Pelo Ser" width={40} height={45} className="h-auto w-auto" />
          <h1 className="hidden font-bold text-xl font-times-new-roman lg:block">INSTITUTO PELO SER</h1>
        </div>

        <nav className="md:flex hidden gap-12 font-normal text-lg text-primary">
          <div className="relative">
            <a className={cn('flex items-center gap-2 hover:cursor-pointer', aboutMenu && 'text-secondary')} onMouseEnter={() => setAboutMenu(true)}>
              <span>O Instituto</span>
              {aboutMenu ? <ChevronUp /> : <ChevronDown />}
            </a>

            {aboutMenu && (
              <div
                className="absolute flex mt-2 flex-col rounded-2xl text-white-instituto py-2 bg-primary w-64"
                onMouseLeave={() => setAboutMenu(false)}
              >
                <a className="flex items-center px-4 py-2 hover:text-terciary" href="">
                  Sobre nós
                </a>
                <a className="flex items-center px-4 py-2 hover:text-terciary" href="">
                  Homenageados
                </a>
              </div>
            )}
          </div>

          <a className="hover:cursor-pointer hover:text-secondary">Newsletter</a>
          <a className="hover:cursor-pointer hover:text-secondary" href='#contact'>Contato</a>
          <a className="hover:cursor-pointer hover:text-secondary hidden lg:block">Voluntariado</a>
        </nav>

        <ResponsiveMenu headerShowing={!hideHeader} />
      </div>

      <div className="flex self-end text-white-instituto font-bold text-sm">
        <button className="bg-green-instituto hover:bg-green-600 px-4 py-0.5 hover:cursor-pointer">
          <p>DOAR</p>
        </button>

        <button className="bg-primary hover:bg-primary-800 px-2 py-0.5 hover:cursor-pointer">
          <p>SEJA VOLUNTÁRIO</p>
        </button>

        <div className="flex items-center gap-2 bg-secondary px-2 py-0.5 hover:cursor-pointer text-white md:px-4 md:gap-1.5">
          <a href={urls.linkedin} target="_blank" className="h-4 w-4 hover:text-gray-200">
            <Whatsapp />
          </a>
          <a href={urls.instagram} target="_blank" className="h-4 w-4 hover:text-gray-200">
            <Instagram />
          </a>
          <a href={urls.facebook} target="_blank" className="h-4 w-4 hover:text-gray-200">
            <Facebook />
          </a>
          <a href={urls.linkedin} target="_blank" className="h-4 w-4 hover:text-gray-200">
            <Linkedin />
          </a>
        </div>
      </div>
    </header>
  );
}
