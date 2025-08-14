import React from "react";
import Image from "next/image";

export const CommentsSectionCards: React.FC<{
    comment: string;
    userPhoto: string;
    userName: string;
}> = ({ comment, userPhoto, userName }) => {
    return (
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="mb-4">
                <p className="text-gray-700 text-sm leading-relaxed italic">
                    &ldquo;{comment}&rdquo;
                </p>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 flex-shrink-0">
                    <Image
                        src={userPhoto || "/placeholder.svg?height=40&width=40"}
                        alt={`${userName} profile`}
                        fill
                        className="object-cover rounded-full"
                        sizes="40px"
                    />
                </div>
                <div>
                    <p className="text-gray-900 font-medium text-sm">{userName}</p>
                </div>
            </div>
        </div>
    );
};