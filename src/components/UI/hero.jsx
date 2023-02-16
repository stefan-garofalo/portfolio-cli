import { TypeAnimation } from "react-type-animation"

export default function Hero({ className }) {
  return (
    <div className={`${className} flex-center flex-col py-16`}>
      <TypeAnimation
        sequence={['Stefan Garofalo']}
        wrapper="h1"
        className="mb-3 text-7xl 2xl:text-9xl font-extrabold"
        cursor={false}
      />
      <TypeAnimation
        sequence={['FRONT END DEVELOPER, TECH ENTHUSIAST']}
        wrapper="h2"
        className="text-xl 2xl:text-4xl"
        cursor={false}
      />
    </div>
  )
}