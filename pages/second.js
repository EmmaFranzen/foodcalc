import Head from 'next/head';
import Image from 'next/image'
import world from '../public/foodcalc_world.png'
import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <main className="flex flex-col items-center flex-1 px-16 py-10 text-white">
                <h1 className="text-4xl font-bold mt-5 mb-5 text-center">Hur funkar det?</h1>
                <Image src={world} alt="Picture of the author" />
                <p className="text-l mb-5 font-bold mt-5 mb-5 text-center">Du använder reglagen för att
                    fylla i mängderna livsmedel
                    i din måltid. Termometern
                    visar hur mycket klimatutsläpp
                    din måltid leder till och så får
                    du också information om hur
                    den biologiska mångfalder
                    ligger till för varje livsmedel.</p>
                <Link href="/main">
                    <button class="my-10 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-10 border border-white hover:border-transparent rounded">
                        Prova
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