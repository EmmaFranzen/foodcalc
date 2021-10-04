import Head from 'next/head';
import Image from 'next/image'
import logo from '../public/foodcalc_start.png';
import Link from 'next/link';

export default function History({ history }) {
    return (
        <div className="text-xs text-center min-h-screen">
            <Image src={main} alt="Picture of the author" />
            <div className="bg-gray-100 p-5 text-black text-center mx-8 border-black rounded-lg	">
                <h1>Uträkning</h1>
            </div>
            <button class="my-10 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-10 border border-white hover:border-transparent rounded" onClick={updateHistory()}>
                Spara
            </button>
        </div>
    );
}