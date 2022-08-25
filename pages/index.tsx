import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import Navbar from '../Components/organisms/navbar';
import MainBanner from '../Components/organisms/MainBanner';
import TransactionStep from '../Components/organisms/TransactionStep';
import FeaturedGame from '../Components/organisms/FeaturedGame';
import Reached from '../Components/organisms/Reached';
import Story from '../Components/organisms/Story';
import Footer from '../Components/organisms/Footer';

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);
  return (
    <>
    <Head>
      <title>StoreGG - Get a New Experience in Gaming</title>
      <meta name="description" content="Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati"
      />
      <meta property="og-title" content="StoreGG - Get a New Experience in Gaming" />
      <meta property="og-description" content="Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati"
      />
      <meta property="og-image" content="https://image" />
      <meta property="og-url" content="https://storegg.com" />
    </Head>
    <Navbar />
    <MainBanner />
    <TransactionStep />
    <FeaturedGame />
    <Reached />
    <Story />
    <Footer />
    </>
  );
}
