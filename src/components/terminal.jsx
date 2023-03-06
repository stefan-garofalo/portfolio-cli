import { useState } from "react"
import { motion } from "framer-motion"

import commands from '@/config/commands.json'

export default function Terminal() {
  const [command, setCommand] = useState('')
  const [entered, setEntered] = useState(false)

  function enterCommand(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      setCommand(commands[e.target.value] || 'Command not found: ' + e.target.value + '. Type "help" for a list of available commands.')
      setEntered(true)
    }
  }

  function changeValue(e) {
    if (entered) {
      e.target.value = ''
      setEntered(false)
    }
    setCommand(e.target.value)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: -300 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="contain space-y-[10vh]"
    >
      <div className='w-full px-[10%] text-center prose-2xl'>
        Ever in love with <span className='font-bold text-turquoise'>simple</span> yet <span className='font-bold text-purple'>effective</span> solutions.
        <br/>
        I strive to create <span className='font-bold text-blue'>state of the art</span> web applications making use of the <span className='font-bold text-green'>latest</span> technologies,
        always pursuing <span className='font-bold text-red'>innovation</span> thanks to my endless <span className='font-bold text-yellow'>curiosity</span>, knowing there is always something new to learn.
      </div>
      <div>
        <label htmlFor="terminal" className="text-xl">Speaking of which... a <b>simpler</b> and <b>faster</b> approach to get right to the point</label>
        <div name="terminal" className="relative h-[45vh] mt-2 rounded-xl border border-slate-500 bg-black/20"> 
          <input className="w-full text-lg bg-transparent cursor-text" onKeyPress={enterCommand} value={command} onChange={changeValue}/>
          {/* <span className="font-bold text-red text-lg absolute top-0 left-0">
            guest
            <span className="text-blue">@portfolio-cli:</span>
            <span className="text-white">~</span>
          </span> */}
        </div>
      </div>
    </motion.section>
  )
}