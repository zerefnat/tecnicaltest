"use client"
import React from "react";
import Image from "next/image";
import logo from '../assets/Logo.png'



export const Footer=()=> {
    return (
        <footer id="contacto" className="bg-[#E3EBF8] text-gray-700 py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-6 md:mb-8">
                    <div className="space-y-4 md:space-y-6">
                        <Image
                            src={logo}
                            alt="TuApostille"
                            width={120}
                            height={48}
                            className="h-12 w-auto object-contain"
                        />
                        <p className="text-gray-600 max-w-sm leading-relaxed text-sm md:text-base">
                            Agenda tu consulta hoy y empieza a resolver tus asuntos legales con confianza.
                        </p>
                        <div>
                            <h4 className="text-[#094B72] font-semibold mb-2 text-sm md:text-base">Dirección</h4>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                Calle Principal 123
                                <br />
                                Madrid, España 28001
                                <br />
                                +34 900 123 456
                            </p>
                        </div>
                        <div className="flex space-x-3 md:space-x-4">
                            <a
                                href="#"
                                className="w-8 h-8 md:w-10 md:h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-[#094B72] hover:text-[#094B72] transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-x-twitter text-sm md:text-lg"></i>
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 md:w-10 md:h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-[#094B72] hover:text-[#094B72] transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f text-sm md:text-lg"></i>
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 md:w-10 md:h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-[#094B72] hover:text-[#094B72] transition-colors duration-300"
                                aria-label="YouTube"
                            >
                                <i className="fab fa-youtube text-sm md:text-lg"></i>
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 md:w-10 md:h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-[#094B72] hover:text-[#094B72] transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram text-sm md:text-lg"></i>
                            </a>
                        </div>
                    </div>
                    <div className="lg:pl-8 xl:pl-12">
                        <h3 className="text-[#094B72] text-lg md:text-xl font-semibold mb-4 md:mb-6">Enlaces Relacionados</h3>
                        <ul className="space-y-2 md:space-y-3">
                            <li>
                                <a
                                    href="#quienes-somos"
                                    className="text-gray-600 hover:text-[#094B72] transition-colors duration-300 text-sm md:text-base block py-1"
                                >
                                    ¿Quiénes somos?
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#equipo"
                                    className="text-gray-600 hover:text-[#094B72] transition-colors duration-300 text-sm md:text-base block py-1"
                                >
                                    Nuestro Equipo
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#servicios"
                                    className="text-gray-600 hover:text-[#094B72] transition-colors duration-300 text-sm md:text-base block py-1"
                                >
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contacto"
                                    className="text-gray-600 hover:text-[#094B72] transition-colors duration-300 text-sm md:text-base block py-1"
                                >
                                    Contacto
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#novedades"
                                    className="text-gray-600 hover:text-[#094B72] transition-colors duration-300 text-sm md:text-base block py-1"
                                >
                                    Novedades
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-300 pt-4 md:pt-6">
                    <p className="text-center text-gray-600 text-xs md:text-sm">
                        © 2025 Medialityc. Todos los derechos reservados
                    </p>
                </div>
            </div>
        </footer>
    )
}