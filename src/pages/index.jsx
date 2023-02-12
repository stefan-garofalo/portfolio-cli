import Head from 'next/head'

import Hero from '@/components/UI/hero'
import Terminal from '@/components/terminal'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio CLI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <Hero />
        <Terminal/>
      </main>
    </>
  )
}
