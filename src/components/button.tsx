import { cn } from '@/util/util';
import { HTMLAttributes } from 'react';

interface CustomButtonProps extends HTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'white' | 'green';
}

export default function CustomButton({ styleType = 'white', ...props }: CustomButtonProps) {
  let customStyle =
    'py-2 rounded-lg uppercase font-semibold drop-shadow-lg hover:cursor-pointer hover:scale-105 duration-75 lg:w-72 lg:text-base md:w-64 text-sm';

  switch (styleType) {
    case 'primary':
      customStyle += ' bg-primary text-white-instituto';
      break;
    case 'white':
      customStyle += ' bg-white-instituto text-primary';
      break;
    case 'green':
      customStyle += ' bg-green-instituto text-white-instituto';
      break;
  }

  return <button {...props} className={cn(customStyle, props.className)}></button>;
}
