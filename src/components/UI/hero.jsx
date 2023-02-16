import { TypeAnimation } from "react-type-animation"

export default function Hero({ className }) {
  return (
    <div className={`${className} flex-center flex-col py-16`}>
      <TypeAnimation
        sequence={['Stefan Garofalo']}
        wrapper="h1"
        className="mb-3 text-7xl font-extrabold"
        cursor={false}
      />
      <TypeAnimation
        sequence={['FRONT END DEVELOPER, TECH ENTHUSIAST']}
        wrapper="h2"
        className="text-xl"
        cursor={false}
      />
    </div>
  )
}