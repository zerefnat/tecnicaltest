"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import logo from "../assets/Logo.png"

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY && currentScrollY > 25) {
                setIsVisible(false)
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true)
            }
            setLastScrollY(currentScrollY)
        }
        window.addEventListener("scroll", controlHeader)
        return () => window.removeEventListener("scroll", controlHeader)
    }, [lastScrollY])
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    return (
        <header
            className={`flex items-center justify-between px-6 py-4 bg-transparent text-white fixed top-0 left-0 w-full z-125 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <Image src={logo || "/placeholder.svg"} alt="TuApostille" className="h-18 w-auto object-contain" />
            <nav className="hidden md:flex flex-1">
                <ul className="flex justify-end space-x-6 ml-auto">
                    <li>
                        <a href="#quienes-somos" className="hover:underline text-[#094B72] transition-colors">
                            Quienes Somos
                        </a>
                    </li>
                    <li>
                        <a href="#servicios" className="hover:underline text-[#094B72] transition-colors">
                            Nuestros Servicios
                        </a>
                    </li>
                    <li>
                        <a href="#equipo" className="hover:underline text-[#094B72] transition-colors">
                            Nuestro Equipo
                        </a>
                    </li>
                    <li>
                        <a href="#articulos" className="hover:underline text-[#094B72] transition-colors">
                            Articulos
                        </a>
                    </li>
                    <li>
                        <a href="/register"
                           className="bg-[#094B72] hover:opacity-90 text-[#f9f8f9] rounded-full px-4 py-2 text-center transition-colors ">
                            Iniciar sesion
                        </a>
                    </li>
                </ul>
            </nav>
            <button
                onClick={toggleMenu}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                aria-label="Toggle menu"
            >
        <span
            className={`w-6 h-0.5 bg-[#094B72] transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
        ></span>
                <span className={`w-6 h-0.5 bg-[#094B72] transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                <span
                    className={`w-6 h-0.5 bg-[#094B72] transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></span>
            </button>
            <nav
                className={`md:hidden fixed top-20 left-0 w-full bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
                <ul className="flex flex-col py-4">
                    <li>
                        <a
                            href="#quienes-somos"
                            onClick={closeMenu}
                            className="block px-6 py-3 text-[#094B72] hover:bg-gray-50 transition-colors"
                        >
                            Quienes Somos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#servicios"
                            onClick={closeMenu}
                            className="block px-6 py-3 text-[#094B72] hover:bg-gray-50 transition-colors"
                        >
                            Nuestros Servicios
                        </a>
                    </li>
                    <li>
                        <a
                            href="#equipo"
                            onClick={closeMenu}
                            className="block px-6 py-3 text-[#094B72] hover:bg-gray-50 transition-colors"
                        >
                            Nuestro Equipo
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contacto"
                            onClick={closeMenu}
                            className="block px-6 py-3 text-[#094B72] hover:bg-gray-50 transition-colors"
                        >
                            Contacto
                        </a>
                    </li>
                    <li className={`px-6 py-3 ${isMenuOpen ? "bg-blue-500" : "bg-transparent"}`}>
                        <a className="hover:underline hover:bg-blue-700 text-white block text-center">Iniciar Secion</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}