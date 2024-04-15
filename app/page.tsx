import Navbar from '@/app/components/Navbar';
import InfoSection from '@/app/components/InfoSection';
import Resources from '@/app/components/Resources';

export default function Home() {
  return (
    <main className='relative min-h-fill w-full'>
      <div className='relative z-1 text-[#1C1C1C] flex flex-col justify-between w-full py-5 px-5 md:px-40 space-y-20'>
        <Navbar />
        <InfoSection />
        <Resources />
      </div>
    </main>
  );
}
