"use client"

import React, { useState } from "react";
import { CommentsSectionCards } from "./CommentsSectionCards";
import userFoto from '../assets/ImageComenPage.png'

export const CommentsSection = () => {
    const [currentPage, setCurrentPage] = useState(0);

    // Sample comments data - replace with your actual data
    const comments = [
        {
            id: 1,
            comment: "Excelente servicio, muy profesionales y atentos a todos los detalles. Recomiendo totalmente sus servicios.",
            userName: "María González"
        },
        {
            id: 2,
            comment: "La atención fue excepcional desde el primer momento. Resolvieron todas mis dudas de manera clara y eficiente.",
            userName: "Carlos Rodríguez"
        },
        {
            id: 3,
            comment: "Muy satisfecha con el resultado. El equipo demostró gran conocimiento y experiencia en el área.",
            userName: "Ana Martínez"
        },
        {
            id: 4,
            comment: "Proceso muy transparente y comunicación constante. Definitivamente volveré a trabajar con ellos.",
            userName: "Luis Hernández"
        },
        {
            id: 5,
            comment: "Superaron mis expectativas en todos los aspectos. Altamente recomendados para cualquier proyecto.",
            userName: "Patricia Silva"
        },
        {
            id: 6,
            comment: "Atención personalizada y resultados de calidad. Un equipo realmente comprometido con la excelencia.",
            userName: "Roberto López"
        },
        {
            id: 7,
            comment: "Increíble experiencia de principio a fin. Profesionalismo y calidad en cada detalle del servicio.",
            userName: "Carmen Jiménez"
        }
    ];

    // Calculate pages (3 comments per page)
    const commentsPerPage = 3;
    const totalPages = Math.ceil(comments.length / commentsPerPage);

    // Get current page comments
    const startIndex = currentPage * commentsPerPage;
    const currentComments = comments.slice(startIndex, startIndex + commentsPerPage);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Lo que dicen nuestros clientes
                    </h2>
                </div>

                {/* Comments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {currentComments.map((comment) => (
                        <CommentsSectionCards
                            key={comment.id}
                            comment={comment.comment}
                            userPhoto={userFoto}
                            userName={comment.userName}
                        />
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                                currentPage === index
                                    ? 'bg-orange-500'
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Ir a página ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};