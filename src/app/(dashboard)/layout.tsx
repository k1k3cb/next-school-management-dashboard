import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-screen flex'>
      {/* LEFT */}
      <div className='w-[15%] md:w-[8%] lg:w-[16%]  xl:w-[15%] p-4 '>
        <Link
          href='/'
          className='flex items-center justify-center lg:justify-start gap-2 '
        >
          <Image src='/logo.png' alt='logo' width={32} height={32} />
          <span className='hidden lg:block'>SchoolName</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className='w-[85%] md:w-[92%] lg:w-[84%] xl:w-[85%] bg-[#F7F8FA] overflow-scroll '>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
