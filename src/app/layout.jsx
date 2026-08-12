import './globals.css';
import LenisProvider from '@/lib/lenis-provider';
import CustomCursor from '@/components/ui/custom-cursor';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JAMSHED | Web Developer',
  description: 'A modern portfolio showcasing my skills in frontend development, backend integration, and interactive UI/UX design using React, Next.js, and modern web technologies.',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="h-full">
      <body suppressHydrationWarning className={`${inter.className} min-h-full flex flex-col`}>
        <Navigation />
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
