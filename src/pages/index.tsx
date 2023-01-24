import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mwffq Portfolio</title>
        <meta name="description" content="Muwaffaq Aliyu portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main className='max-w-6xl mx-auto overflow-hidden px-5'>
      <Projects />
      <Contact />
     </main>
    </>
  )
}


