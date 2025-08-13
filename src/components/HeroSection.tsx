import React from 'react'
import Image from "next/image";
import Abogados from '../assets/AbogadosHeroPages.png'

export const HeroSection = () => {
    return (
        <section className="min-h-screen relative overflow-hidden " style={{ backgroundColor: "#F5F1E8" } }>
            <div
                className="absolute right-0 top-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full opacity-90"
                style={{ backgroundColor: "#A8C8E1" }}
            />
            <div className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-16 py-10 md:py-16 lg:py-20 min-h-screen">
                <div className="flex-1 max-w-2xl">
                    <h1
                        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 md:mb-8"
                        style={{ color: "#094B72" }}
                    >
                        Asesoría Jurídica con Excelencia y Compromiso
                    </h1>

                    <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                        We are here to help you take care of your legality with the best service especially for you.
                    </p>
                    <a
                        className="px-6 md:px-8 py-2 md:py-3 rounded-full text-white font-medium text-base md:text-lg transition-all hover:opacity-90"
                        style={{ backgroundColor: "#094B72" }}
                        href="/register"
                    >
                        Iniciar sesión
                    </a>
                </div>


                <div className="hidden md:flex flex-1 justify-end relative z-20">
                    <div className="relative w-[300px] h-[240px] lg:w-[500px] lg:h-[400px] flex items-center justify-center">
                        <div className="w-full h-full  rounded-lg flex items-center justify-center text-gray-400 text-sm lg:text-base">
                            <Image src={Abogados} alt="Abogados"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}