/*  ./components/Navbar.jsx     */
import Head from './Header';
import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
    const [active, setActive] = useState(false);
    const [volume, setVolume] = useState(50);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <Head>
            </Head>
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="flex flex-col items-left justify-center drawer-content p-4">
                <label for="my-drawer">
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </label>
            </div>
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content min-h-100vh">
                    <input type="range" max="100" className="range" value={volume}
                        onChange={(e) => setVolume(e.target.volume)} />
                    <input type="range" max="100" className="range" value={volume}
                        onChange={(e) => setVolume(e.target.volume)} />
                    <input type="range" max="100" className="range" value={volume}
                        onChange={(e) => setVolume(e.target.volume)} />
                    <input type="range" max="100" className="range" value={volume}
                        onChange={(e) => setVolume(e.target.volume)} />
                    <input type="range" max="100" className="range" value={volume}
                        onChange={(e) => setVolume(e.target.volume)} />
                    <input type="range" max="100" className="range" value={volume}
                        onChange={(e) => setVolume(e.target.volume)} />
                    <input type="range" max="100" className="range" value={volume}
                        onChange={(e) => setVolume(e.target.volume)} />
                </ul>
            </div>
        </>
    );
};
