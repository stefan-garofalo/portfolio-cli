import Link from "next/link"

export default function Header({ className }) {
  return (
    <header className="sticky top-0 w-full flex-between py-6 px-10 backdrop-blur-md bg-black/20 border-b border-slate-500 text-xl">
      <div>Find me on:</div>
      <nav className="flex gap-12 font-bold">
        <Link href="#experience" className="border-b-[3px] border-transparent transition-all hover:border-purple">Experience</Link>
        <Link href="#projects" className="border-b-[3px] border-transparent transition-all hover:border-blue">Projects</Link>
        <Link href="#skills" className="border-b-[3px] border-transparent transition-all hover:border-green">Skills</Link>
      </nav>
    </header>
  )
}