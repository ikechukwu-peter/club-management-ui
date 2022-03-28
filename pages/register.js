import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Register from '../components/Register'
import Footer from '../components/Footer'

export default function Registeration() {
    return (
        <div>
            <Head>
                <title>Club Management-Registeration</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <div>
                    <Register />
                    <Footer />
                </div>
            </main>

        </div>
    )
}
