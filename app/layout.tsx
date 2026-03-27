import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./globals.css";

export const metadata = {
  title: 'Amanda Hotchkiss - Portfolio',
  description: 'Frontend Developer Based in Knoxville, TN, USA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-linear-to-b from-white via-purple-50/20 to-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}