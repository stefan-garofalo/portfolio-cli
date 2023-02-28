import Link from "next/link"
import { useRouter } from "next/router"

export default function Header({ className }) {
  const router = useRouter()
  const hash = router.asPath.split('#').at(-1)
  return (
    <header className="sticky top-0 w-full flex-between py-6 px-10 backdrop-blur-md bg-black/20 border-b border-slate-500 text-lg">
      <div>Find me on:</div>
      <nav className="flex gap-12 font-bold">
        <Link href="#experience" className={`
          border-b-[3px] border-transparent transition-all hover:border-purple
          ${hash === 'experience' && 'border-purple'}
        `}>Experience</Link>
        <Link href="#projects" className={`
          border-b-[3px] border-transparent transition-all hover:border-blue
          ${hash === 'projects' && 'border-blue'}
        `}>Projects</Link>
        <Link href="#skills" className={`
          border-b-[3px] border-transparent transition-all hover:border-green
          ${hash === 'skills' && 'border-green'}
        `}>Skills</Link>
      </nav>
    </header>
  )
}