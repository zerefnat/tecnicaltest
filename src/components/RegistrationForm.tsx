"use client"

import { useState } from "react"
import { InfoSection } from "./InfoSection"
import { InputForm } from "./InputForm"

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }))
        }
    }
    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.name.trim()) {
            newErrors.name = "El nombre es requerido"
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "El nombre debe tener al menos 2 caracteres"
        }

        if (!formData.email.trim()) {
            newErrors.email = "El email es requerido"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "El email no es válido"
        }

        if (!formData.password) {
            newErrors.password = "La contraseña es requerida"
        } else if (formData.password.length < 8) {
            newErrors.password = "La contraseña debe tener al menos 8 caracteres"
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirma tu contraseña"
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Las contraseñas no coinciden"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            console.log("Form submitted:", formData)
            alert("¡Cuenta creada exitosamente!")
        }
    }
    return (
        <section className="min-h-screen bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                <InfoSection />

                <div className="flex items-center justify-center p-8 lg:p-12">
                    <div className="w-full max-w-md">
                        <div className="mb-6">
                            <a
                                href="/"
                                className="inline-flex items-center text-[#094B72] hover:text-[#0a5282] transition-colors duration-200"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Regresar
                            </a>
                        </div>

                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-[#094B72] mb-2">Crear Cuenta</h1>
                            <p className="text-gray-600">
                                Completa el formulario para acceder a nuestros servicios legales
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <InputForm
                                label="Nombre Completo"
                                type="text"
                                placeholder="Ingresa tu nombre completo"
                                value={formData.name}
                                onChange={(value) => handleInputChange("name", value)}
                                error={errors.name}
                                required
                                name="name"
                            />

                            <InputForm
                                label="Correo Electrónico"
                                type="email"
                                placeholder="ejemplo@correo.com"
                                value={formData.email}
                                onChange={(value) => handleInputChange("email", value)}
                                error={errors.email}
                                required
                                name="email"
                            />

                            <InputForm
                                label="Contraseña"
                                type="password"
                                placeholder="Mínimo 8 caracteres"
                                value={formData.password}
                                onChange={(value) => handleInputChange("password", value)}
                                error={errors.password}
                                required
                                name="password"
                            />

                            <InputForm
                                label="Confirmar Contraseña"
                                type="password"
                                placeholder="Repite tu contraseña"
                                value={formData.confirmPassword}
                                onChange={(value) => handleInputChange("confirmPassword", value)}
                                error={errors.confirmPassword}
                                required
                                name="confirmPassword"
                            />

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <p className="text-sm text-blue-800">
                                    Al registrarte, aceptas nuestros términos de servicio y política de privacidad.
                                    Tu información estará protegida bajo estricta confidencialidad profesional.
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#094B72] hover:bg-[#0a5282] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                            >
                                Crear Cuenta
                            </button>

                            <p className="text-center text-sm text-gray-600">
                                ¿Ya tienes cuenta?{" "}
                                <a href="#" className="text-[#094B72] hover:underline font-medium">
                                    Inicia sesión aquí
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}