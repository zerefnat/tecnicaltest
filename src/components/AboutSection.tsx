import React from 'react';
import {AboutSectionCards} from './AboutSectionCards';
import IconMision from'../assets/iconsMision-96.png'
import IconVision from'../assets/iconsVision-96.png'
import IconObjetivo from '../assets/icons8-scales-outline-hand-drawn-96.png'
import IconOther from'../assets/iconsOtherElements-96.png'

export const AboutSection = () => {
    return (
        <section className="relative min-h-screen bg-[url('../assets/AboutPage.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/60"></div>
            <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#094B72] mb-6">
                            ¿Quiénes somos?
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Lorem ipsum dolor is aquí va el texto, que puede tenr hasta 3 líneas de extensión
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <AboutSectionCards
                            url={IconMision || "/placeholder.svg?height=80&width=80"}
                            title="Misión"
                            test="Environmental legal issues might occur since the planned business activities are designed"
                        />

                        <AboutSectionCards
                            url={IconVision}
                            title="Visión"
                            test="Environmental legal issues might occur since the planned business activities are designed"
                        />

                        <AboutSectionCards
                            url={IconObjetivo}
                            title="Objetivos"
                            test="Environmental legal issues might occur since the planned business activities are designed"
                        />

                        <AboutSectionCards
                            url={IconOther}
                            title="Otros Elementos"
                            test="Environmental legal issues might occur since the planned business activities are designed"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
