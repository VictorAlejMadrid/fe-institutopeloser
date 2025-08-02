import { cn } from '@/util/util';
import { ChevronDown, ChevronUp, Menu } from 'lucide-react';
import { useState } from 'react';

export default function ResponsiveMenu({ headerShowing }: { headerShowing: boolean }) {
  const [open, setOpen] = useState(false);
  const [aboutMenu, setAboutMenu] = useState(false);

  return (
    <>
      <button className="text-primary block md:hidden" onClick={() => setOpen((prev) => !prev)}>
        <Menu />
      </button>

      <nav
        className={cn(
          'flex flex-col text-lg text-white-instituto absolute w-full bg-transparent right-0 md:hidden top-18 duration-1000 translate-x-[320px]',
          open && headerShowing ? 'translate-0' : 'translate-x-[320px]'
        )}
      >
        <a
          className={cn(
            'flex justify-between duration-500 bg-primary pb-3 px-4 pt-6 ease-in-out',
            open && headerShowing ? 'translate-0' : 'translate-x-[640px]'
          )}
          onClick={() => setAboutMenu((prev) => !prev)}
        >
          <span>O instituto</span>
          {aboutMenu ? <ChevronUp /> : <ChevronDown />}
        </a>

        {aboutMenu && (
          <div className={cn('flex flex-col pl-8 py-3 gap-6 bg-primary duration-700', open && headerShowing ? 'translate-0' : 'translate-x-[640px]')}>
            <a className="hover:cursor-pointer hover:text-secondary">Sobre nós</a>
            <a className="hover:cursor-pointer hover:text-secondary">Homenageados</a>
          </div>
        )}

        <a
          className={cn(
            'hover:cursor-pointer hover:text-secondary duration-1000 bg-primary py-3 px-4 ease-in-out',
            open && headerShowing ? 'translate-0' : 'translate-x-[640px]'
          )}
        >
          Newsletter
        </a>
        <a
          className={cn(
            'hover:cursor-pointer hover:text-secondary duration-[1500ms] bg-primary py-3 px-4 ease-in-out',
            open && headerShowing ? 'translate-0' : 'translate-x-[640px]'
          )}
        >
          Contato
        </a>
        <a
          className={cn(
            'hover:cursor-pointer hover:text-secondary duration-[1700ms] bg-primary pt-3 px-4 pb-6 ease-in-out',
            open && headerShowing ? 'translate-0' : 'translate-x-[640px]'
          )}
        >
          Voluntariado
        </a>
      </nav>
    </>
  );
}
