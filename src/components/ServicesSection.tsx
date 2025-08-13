"use client"

import { useState } from "react"
import { ServicesSectionCards } from "@/components/ServicesSectionCards"

const countries = [
    "Nicaragua",
    "Costa Rica",
    "Honduras",
    "Guatemala",
    "El Salvador",
    "Panamá",
    "México",
    "Estados Unidos",
    "Canadá",
    "España",
]

const services = [
    {
        title: "Servicio 1",
        text: "Environmental legal issues might occur since the planned business activities are designed, Environmental legal issues might occur since...",
        isSpecial: true,
        specialLabel: "275 x 96 abrazo",
    },
    {
        title: "Servicio 2",
        text: "Environmental legal issues might occur since the planned business activities are designed, Environmental legal issues might occur since...",
    },
    {
        title: "Servicio 3",
        text: "Environmental legal issues might occur since the planned business activities are designed, Environmental legal issues might occur since...",
    },
    {
        title: "Servicio 4",
        text: "Consultoría legal especializada en derecho corporativo y comercial para empresas en crecimiento...",
    },
    {
        title: "Servicio 5",
        text: "Asesoría en migración y residencia para profesionales que buscan oportunidades internacionales...",
    },
]

export const ServicesSection = () => {
    const [originCountry, setOriginCountry] = useState("Nicaragua")
    const [residenceCountry, setResidenceCountry] = useState("Nicaragua")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showOriginDropdown, setShowOriginDropdown] = useState(false)
    const [showResidenceDropdown, setShowResidenceDropdown] = useState(false)

    const visibleServices = services.slice(currentIndex, currentIndex + 3)

    const nextServices = () => {
        if (currentIndex + 3 < services.length) {
            setCurrentIndex(currentIndex + 1)
        }
    }
    const prevServices = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <section id="servicios" className="relative min-h-screen bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
                    <path d="M0 400C200 300 400 500 600 400C800 300 1000 500 1200 400" stroke="white" strokeWidth="2" />
                    <path d="M0 300C200 200 400 400 600 300C800 200 1000 400 1200 300" stroke="white" strokeWidth="1.5" />
                    <path d="M0 500C200 400 400 600 600 500C800 400 1000 600 1200 500" stroke="white" strokeWidth="1.5" />
                    <path d="M0 200C200 100 400 300 600 200C800 100 1000 300 1200 200" stroke="white" strokeWidth="1" />
                    <path d="M0 600C200 500 400 700 600 600C800 500 1000 700 1200 600" stroke="white" strokeWidth="1" />
                </svg>
            </div>

            <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Nuestros Servicios</h2>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
                            Any solicitors or legal business can submit a listing to our website.
                            <br />
                            Our site is free for UK solicitors or legal business.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                            <div className="relative">
                                <label className="block text-white font-medium mb-2 text-left">País de origen</label>
                                <div className="relative">
                                    <button
                                        onClick={() => setShowOriginDropdown(!showOriginDropdown)}
                                        className="bg-white rounded-lg px-4 py-3 w-64 text-left flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        <span className="text-gray-700">{originCountry}</span>
                                        <svg
                                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${showOriginDropdown ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {showOriginDropdown && (
                                        <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-xl mt-1 z-20 max-h-48 overflow-y-auto">
                                            {countries.map((country) => (
                                                <button
                                                    key={country}
                                                    onClick={() => {
                                                        setOriginCountry(country)
                                                        setShowOriginDropdown(false)
                                                    }}
                                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 first:rounded-t-lg last:rounded-b-lg"
                                                >
                                                    {country}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-white font-medium mb-2 text-left">País de residencia actual</label>
                                <div className="relative">
                                    <button
                                        onClick={() => setShowResidenceDropdown(!showResidenceDropdown)}
                                        className="bg-white rounded-lg px-4 py-3 w-64 text-left flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        <span className="text-gray-700">{residenceCountry}</span>
                                        <svg
                                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${showResidenceDropdown ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {showResidenceDropdown && (
                                        <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-xl mt-1 z-20 max-h-48 overflow-y-auto">
                                            {countries.map((country) => (
                                                <button
                                                    key={country}
                                                    onClick={() => {
                                                        setResidenceCountry(country)
                                                        setShowResidenceDropdown(false)
                                                    }}
                                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 first:rounded-t-lg last:rounded-b-lg"
                                                >
                                                    {country}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-serif">Servicios Disponibles</h3>
                    </div>

                    <div className="relative">
                        <button
                            onClick={prevServices}
                            disabled={currentIndex === 0}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextServices}
                            disabled={currentIndex + 3 >= services.length}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
                            {visibleServices.map((service, index) => (
                                <ServicesSectionCards
                                    key={currentIndex + index}
                                    title={service.title}
                                    text={service.text}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}