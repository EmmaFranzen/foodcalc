import Head from 'next/head';
import Image from 'next/image'
import logo from '../public/foodcalc_start.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col items-center flex-1 px-20 py-10 text-white">
        <h1 className="text-6xl font-bold mt-5 mb-5">fOOdcalc</h1>
        <p className="text-xl mb-5 font-bold">Testa din måltid</p>
        <Image src={logo} alt="Picture of the author" />
        <Link href="/second">
          <button class="my-10 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-10 border border-white hover:border-transparent rounded">
            Nästa
          </button>
        </Link>
        <div className="grid grid-cols-2 gap-5">
          <div >
          </div>
        </div>
      </main>
    </div>
  );
}