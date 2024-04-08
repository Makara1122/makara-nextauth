import { Inter, Suwannaphum } from "next/font/google";

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
  });
  
  export const suwannaphum = Suwannaphum({
    subsets: ['khmer'],
    display: 'swap',
    weight: '400', // Add the missing weight property
    variable: '--font-suwannaphum'
  });