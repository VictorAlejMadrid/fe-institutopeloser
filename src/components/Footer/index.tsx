import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Instagram from '../svg/instagram';
import Linkedin from '../svg/linkedin';
import Facebook from '../svg/facebook';
import Whatsapp from '../svg/whatsapp';
import { urls } from '@/util/env';

export default function Footer() {
  return (
    <footer id='contact' className="bg-secondary w-full flex flex-col items-center text-white">
      <div className="flex p-4 w-full justify-between flex-col gap-10 md:p-8 lg:gap-0 lg:flex-row lg:w-5xl">
        <div className="flex flex-col gap-8 w-full lg:w-96">
          <div className="flex gap-3 items-center">
            <Image src="/images/logo_instituto.svg" alt="Logo Instituto Pelo Ser" width={35} height={45} className="h-auto w-auto" />
            <p className="text-xl text-white-instituto">Juntos fazemos a diferença.</p>
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-base mb-2">Cadastre-se para receber novas notícias!</p>

            <div className="flex flex-col font-normal">
              <p className="text-xs mb-1">E-mail*</p>

              <div className="flex gap-3">
                <input className="focus:outline-none bg-white-instituto py-3 px-2 text-gray-500 text-xs flex-1" placeholder="email@dominio.com" />
                <button className="bg-green-instituto text-base hover:cursor-pointer px-5">ENVIAR</button>
              </div>

              <div className="flex gap-2 mt-3 items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-transparent border-none outline-offset-0 text-transparent focus:ring-0 focus:ring-offset-0"
                />
                <p className="text-xs font-normal">Autorizo receber informes sobre o site</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white-instituto h-[1px] w-full lg:w-[1px] lg:h-52"></div>

        <div className="w-full lg:w-96">
          <p className="mb-1 text-xl">Entre em contato!</p>
          <p className="text-xs mb-6">Estamos pronto para atendê-lo conforme suas necessidades</p>

          <div className="flex gap-5 justify-between flex-col lg:flex-row">
            <div className="flex gap-3 items-center">
              <Mail size={26} />
              <p className="font-semibold text-xs">intitutopeloser@gmail.com</p>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={26} />
              <p className="font-semibold text-xs">+55 51 99246 1343</p>
            </div>
          </div>

          <div className="w-full flex justify-center mt-9">
            <div className="flex h-10 gap-8">
              <a href={urls.instagram} className="h-10 w-10">
                <Instagram />
              </a>
              <a href={urls.linkedin} className="h-10 w-10">
                <Linkedin />
              </a>
              <a href={urls.facebook} className="h-10 w-10">
                <Facebook />
              </a>
              <a href={urls.whatsapp} className="h-10 w-10">
                <Whatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs mb-2">© 2025 Instituto Pelo Ser - 58.416.265/0001-55</p>
    </footer>
  );
}
