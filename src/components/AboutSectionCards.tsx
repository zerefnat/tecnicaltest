import React from "react";
import Image from "next/image";
export const AboutSectionCards:React.FC<{ url: string; title: string; test: string }>  = ({url,title,test}) => {
    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-sm border border-gray-100 p-6 sm:p-8 m-2 sm:m-4 text-center">
            <div className="mb-4 sm:mb-6">
                <Image
                    src={url || "/placeholder.svg"}
                    alt="Icon"
                    width={64}
                    height={64}
                    className="mx-auto"
                />
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif">
                {title}
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-4 sm:mb-6 px-1 sm:px-2">
                {test}
            </p>

            <a
                href="#servicios"
                className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
            >
                Leer más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    )
}