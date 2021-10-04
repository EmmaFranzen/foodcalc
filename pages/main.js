import Head from 'next/head';
import Image from 'next/image'
import main from '../public/main.png'
import historyImg from '../public/foodcalc_history.png'
import History from '../components/History'
import { useState, useEffect } from 'react';

export default function Home() {
    const [datas, setDatas] = useState([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]);
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);


    const [not, setNot] = useState(0);
    const [flask, setFlask] = useState(0);
    const [kyckling, setKyckling] = useState(0);
    const [lax, setLax] = useState(0);
    const [sill, setSill] = useState(0);
    const [torsk, setTorsk] = useState(0);
    const [rakor, setRakor] = useState(0);
    const [vego, setVego] = useState(0);
    const [co2, setCo2] = useState(0);

    const updateFieldChanged = index => e => {

        let newArr = [...datas]; // copying the old datas array
        newArr[index] = e.target.value;
        setDatas(newArr); // ??
    }

    const updateHistory = index => e => {

        let newArr = [...history]; // copying the old datas array
        let val = Math.round((datas[0] * 0.01 + datas[1] * 0.0075 + datas[2] * 0.05 + datas[3] * 0.035 + datas[4] * 0.030 + datas[5] * 0.025 + datas[6] * 0.040 + datas[7] * 0.02) * 100) / 100;
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        newArr.push({ val, date, time });
        setHistory(newArr); // ??
    }

    const updateShowHistory = index => e => {

        let val = !showHistory;
        setShowHistory(val); // ??
    }

    return (
        <div className="rounded-lg shadow bg-transparent drawer drawer-mobile h-52 min-h-screen" >
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div className="flex flex-col items-start justify-center drawer-content">
                <label for="my-drawer-2" class="btn bg-black drawer-button lg:hidden mt-16 ml-3"><svg
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
                </svg></label>

                {!showHistory ?
                    <div className="text-l text-center min-h-screen">
                        <Image src={main} alt="Picture of the author" />
                        <div className="bg-gray-100 p-5 text-black text-center mx-8 border-black rounded-lg	">
                            <h1 className="text-xl font-bold">Uträkning</h1>
                            <p className="text-l">Din tallrik har klimatpåverkan på {Math.round((datas[0] * 0.01 + datas[1] * 0.0075 + datas[2] * 0.05 + datas[3] * 0.035 + datas[4] * 0.030 + datas[5] * 0.025 + datas[6] * 0.040 + datas[7] * 0.02) * 100) / 100} kg koldioxidekvivalenter. Ett bra resultat hamnar på under 0,5 kg.</p>
                        </div>
                        <button className="my-10 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-10 border border-white hover:border-transparent rounded" onClick={updateHistory()}>
                            Spara
                        </button>
                    </div>
                    :
                    <div className="text-xs text-center text-white min-h-screen justify-center">
                        <Image src={historyImg} alt="Picture of the author" />
                        {history.map((data, index) => {
                            return (
                                <div className="bg-gray-100 p-5 text-black text-center mx-8 border-black rounded-lg " key={index}>
                                    <p>{data.date}</p>
                                    <p>{data.time}</p>
                                    <h1>{data.val} kg koldioxidekvivalenter.</h1>
                                </div>
                            );
                        })}
                        <button className="my-10 bg-black hover:bg-black text-white font-semibold hover:text-white py-2 px-10 border border-white hover:border-transparent rounded" onClick={updateShowHistory()}>
                            Börja om
                        </button>
                    </div>
                }
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                {!showHistory ?
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content text-center">
                        <label for="not">Nötkött</label>
                        <input name="not" type="range" max="100" className="range py-5" value={datas[0]}
                            onChange={updateFieldChanged(0)} />
                        <label for="flask">Fläskkött</label>
                        <input name="flask" type="range" max="100" className="range py-5" value={datas[1]}
                            onChange={updateFieldChanged(1)} />
                        <label for="kyckling">Kyckling</label>
                        <input name="kyckling" type="range" max="100" className="range py-5" value={datas[2]}
                            onChange={updateFieldChanged(2)} />
                        <label for="lax">Lax</label>
                        <input name="lax" type="range" max="100" className="range py-5" value={datas[3]}
                            onChange={updateFieldChanged(3)} />
                        <label for="sill">Sill</label>
                        <input name="sill" type="range" max="100" className="range py-5" value={datas[4]}
                            onChange={updateFieldChanged(4)} />
                        <label for="torsk">Torsk</label>
                        <input name="torsk" type="range" max="100" className="range py-5" value={datas[5]}
                            onChange={updateFieldChanged(5)} />
                        <label for="rakor">Räkor</label>
                        <input name="rakor" type="range" max="100" className="range py-5" value={datas[6]}
                            onChange={updateFieldChanged(6)} />
                        <label for="vego">Vegokött</label>
                        <input name="vego" type="range" max="100" className="range py-5" value={datas[7]}
                            onChange={updateFieldChanged(7)} />
                        <button class="my-10 bg-black hover:bg-black text-white font-semibold hover:text-white py-2 px-10 border border-white hover:border-transparent rounded" onClick={updateShowHistory()}>
                            Historik
                        </button>
                    </ul>
                    :
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content text-center">
                        <button class="my-10 bg-black hover:bg-black text-white font-semibold hover:text-white py-2 px-10 border border-white hover:border-transparent rounded" onClick={updateShowHistory()}>
                            Börja om
                        </button>
                    </ul>
                }
            </div>
        </div>
        /*
            <div>
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
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content text-center min-h-100vh">

                        <label for="not">Nötkött</label>
                        <input name="not" type="range" max="100" className="range py-5" value={datas[0]}
                            onChange={updateFieldChanged(0)} />
                        <label for="flask">Fläskkött</label>
                        <input name="flask" type="range" max="100" className="range py-5" value={datas[1]}
                            onChange={updateFieldChanged(1)} />
                        <label for="kyckling">Kyckling</label>
                        <input name="kyckling" type="range" max="100" className="range py-5" value={datas[2]}
                            onChange={updateFieldChanged(2)} />
                        <label for="lax">Lax</label>
                        <input name="lax" type="range" max="100" className="range py-5" value={datas[3]}
                            onChange={updateFieldChanged(3)} />
                        <label for="sill">Sill</label>
                        <input name="sill" type="range" max="100" className="range py-5" value={datas[4]}
                            onChange={updateFieldChanged(4)} />
                        <label for="torsk">Torsk</label>
                        <input name="torsk" type="range" max="100" className="range py-5" value={datas[5]}
                            onChange={updateFieldChanged(5)} />
                        <label for="rakor">Räkor</label>
                        <input name="rakor" type="range" max="100" className="range py-5" value={datas[6]}
                            onChange={updateFieldChanged(6)} />
                        <label for="vego">Vegokött</label>
                        <input name="vego" type="range" max="100" className="range py-5" value={datas[7]}
                            onChange={updateFieldChanged(7)} />
                    </ul>

                </div>
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <main className="flex flex-col items-center flex-1 px-15 py-10 text-white">
                        <Image src={main} alt="Picture of the author" />
                        <div className="bg-gray-100 p-5 text-black text-center mx-8 border-black rounded-lg	">
                            <h2>Uträkning</h2>
                            <p>Din tallrik har klimatpåverkan på {Math.round((datas[0] * 0.01 + datas[1] * 0.0075 + datas[2] * 0.05 + datas[3] * 0.035 + datas[4] * 0.030 + datas[5] * 0.025 + datas[6] * 0.040 + datas[7] * 0.02) * 100) / 100} kg koldioxidekvivalenter. Ett bra resultat hamnar på under 0,5 kg.</p>
                        </div>
                        <button class="my-10 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-10 border border-white hover:border-transparent rounded">
                            Spara
                        </button>
                    </main>
                </div>
            </div>*/
    );
}