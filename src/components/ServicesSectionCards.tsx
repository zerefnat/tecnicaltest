import React from "react";

export const ServicesSectionCards:React.FC<{ title: string; text: string }>  = ({title,text}) => {
    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-sm border border-gray-100 p-6 sm:p-8 m-2 sm:m-4 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif">
                {title}
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-4 sm:mb-6 px-1 sm:px-2">
                {text}
            </p>

            <a
                href="#contacto"
                className="inline-flex items-center text-sm font-medium bg-[#094B72] hover:opacity-90 text-[#f9f8f9] px-4 py-2 rounded-full transition-colors"
            >
                Ver más
            </a>
        </div>
    )
}