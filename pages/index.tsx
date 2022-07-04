import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Hero from "../components/Hero";
// import AboutSection from "../components/About";
import Services from "../components/Services";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fiji Homes & Properties</title>
        <meta name="description" content="Fiji Homes & Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Hero />
        {/*<AboutSection />*/}
        <Services />
    </div>
  )
}

export default Home
