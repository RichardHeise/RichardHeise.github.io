import React from 'react'
import Image from "next/image"

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold"> 
                    Richard Fernando Heise Ferreira 
                </h1>
                <p className="text-[#e6e6e6] text-lg mb-6 lg:text-xl">
                    Testando a criação do portifolio
                </p>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#235585] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/letterboxd.png"
                        alt="profile pic"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div className="lg:flex">
                <button className="sm:ml-4 px-8 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black whitespace-nowrap">
                    Hire Me
                </button>
                <button className="sm:mt-4 px-8 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white whitespace-nowrap">
                    Download CV
                </button>
            </div>
        </div>
    </section>
  )
}

export default HeroSection