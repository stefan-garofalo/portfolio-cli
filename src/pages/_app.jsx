import '@/styles/globals.css'
import { JetBrains_Mono } from '@next/font/google'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={`${jetBrainsMono.className} min-h-screen bg-dark text-white`}>
      <Component {...pageProps} />
    </main>
  )
}
