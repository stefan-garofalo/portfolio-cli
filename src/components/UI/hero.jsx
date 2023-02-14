import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <div className={`flex-center flex-col py-16`}>
      <TypeAnimation
        sequence={['Stefan Garofalo']}
        wrapper="h1"
        className="mb-3 text-7xl font-extrabold"
        cursor={false}
      />
      <TypeAnimation
        sequence={['FRONT END DEVELOPER, TECH ENTHUSIAST']}
        wrapper="h2"
        className="mb-10 text-xl"
        cursor={false}
      />
      <p className='w-1/2 text-center prose-xl'>
        Ever in love with <span className='font-bold text-turquoise'>simple</span> yet <span className='font-bold text-purple'>effective</span> solutions.
        <br/>
        I strive to create <span className='font-bold text-blue'>state of the art</span> web applications making use of the <span className='font-bold text-green'>latest</span> technologies,
        always pursuing <span className='font-bold text-red'>innovation</span> thanks to my endless <span className='font-bold text-yellow'>curiosity</span>, knowing there is always something new to learn.
      </p>
    </div>
  )
}