import './globals.css';
import LenisProvider from '@/lib/lenis-provider';
import CustomCursor from '@/components/ui/custom-cursor';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Djembar | Software Engineer & Frontend Developer',
  description: 'Premium developer portfolio featuring advanced animations and glassmorphism UI.',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="h-full">
      <body suppressHydrationWarning className={`${inter.className} min-h-full flex flex-col`}>
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
        <ToastContainer/>
      </body>
    </html>
  );
}
