import React from "react"
import Image from "next/image";

export const NewsSectionCards: React.FC<{
    url: string;
    title: string;
    text: string;
    date: string
}> = ({ url, title, text, date }) => {
    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-sm border border-gray-100 p-6 sm:p-8 m-2 sm:m-4 text-center hover:opacity-90">
            <div className="mb-4 sm:mb-6">
                <Image
                    src={url || "/placeholder.svg?height=200&width=300&query=business meeting"}
                    alt="News Image"
                    className="mx-auto w-full h-auto rounded-lg"
                />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 font-serif">
                {title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 sm:mb-6 px-1 sm:px-2">
                {text}
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 sm:mb-6 px-1 sm:px-2">
                {date}
            </p>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Leer más
            </a>
        </div>
    )
}