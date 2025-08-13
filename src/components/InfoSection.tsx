import type React from "react"

export const InfoSection: React.FC = () => {
    return (
        <div className="bg-[#094B72] text-white p-8 lg:p-12 flex flex-col justify-center">
            <div className="max-w-md">
                <h2 className="text-3xl font-bold mb-6">Únete a Nuestra Firma Legal</h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                    Accede a servicios legales de excelencia con más de 15 años de experiencia brindando asesoría jurídica
                    integral a empresas y particulares.
                </p>
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Confidencialidad Garantizada</h3>
                            <p className="text-blue-100 text-sm">
                                Protegemos tu información con los más altos estándares de seguridad.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Equipo Especializado</h3>
                            <p className="text-blue-100 text-sm">Abogados expertos en diferentes áreas del derecho a tu servicio.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Atención 24/7</h3>
                            <p className="text-blue-100 text-sm">Consultas urgentes atendidas en cualquier momento del día.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Resultados Comprobados</h3>
                            <p className="text-blue-100 text-sm">Más de 500 casos exitosos respaldan nuestra experiencia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}