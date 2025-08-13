import React from "react";
import Image from "next/image";

export const TeamSectionCards: React.FC<{url: string; name: string; position: string}> = ({url, name, position}) => {
    return(
        <div className="w-full max-w-sm mx-auto bg-transparent rounded-lg shadow-sm border border-gray-100 p-6 sm:p-8 m-2 sm:m-4 text-center hover:opacity-90 h-full flex flex-col">
            <div className="mb-4 sm:mb-6 flex-shrink-0">
                <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-lg">
                    <Image
                        src={url || "/placeholder.svg?height=300&width=300"}
                        alt="Team Member"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                </div>
            </div>
            <div className="flex-grow flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 font-serif">
                    {name}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed px-1 sm:px-2">
                    {position}
                </p>
            </div>
        </div>
    )
}