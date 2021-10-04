import Head from 'next/head';

export default function Header() {

    return (
        <Head>
            <title>foodcalc</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;400;700&display=swap" rel="stylesheet" />
            <meta name="description" content="Testa din måltid!" />
            <meta name="theme-color" content="#1E700A" />
            <html lang="sv" />
            <meta property="og:title" content="fOOdcalc"></meta>
            <meta property="og:description" content="Testa din måltid!"></meta>
        </Head>
    )
}