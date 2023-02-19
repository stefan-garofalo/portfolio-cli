import dynamic from 'next/dynamic'
import { JetBrains_Mono } from '@next/font/google'

import '@/styles/globals.css'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={`${jetBrainsMono.className} min-h-screen bg-dark text-white`}>
      <Component {...pageProps} />
    </div>
  )
}
