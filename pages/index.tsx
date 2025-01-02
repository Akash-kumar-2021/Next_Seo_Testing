import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - My Portfolio</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-4xl font-bold text-center">Welcome to My Portfolio</h1>
        <p className="mt-4 text-center">Discover my projects and skills as a frontend developer.</p>
      </main>
      <Footer />
    </>
  );
}
