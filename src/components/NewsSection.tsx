"use client"

import type React from "react"
import { useState } from "react"
import {NewsSectionCards} from "@/components/NewsSectionCards";
import imgNovedades from '../assets/ImagenNovedadesPage.jpg'

export const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const articles = [
    {
      id: 1,
      title: "Artículo 1",
      text:"Environmental legal issues might occur since the planned business activities are designed, Environmental legal issues might occur since...",
      date: "2025/08/02",
    },
    {
      id: 2,
      title: "Artículo 2",
      text:"Environmental legal issues might occur since the planned business activities are designed, Environmental legal issues might occur since...",
      date: "2025/08/02",
    },
    {
      id: 3,

      title: "Artículo 3",
      text:"Environmental legal issues might occur since the planned business activities are designed, Environmental legal issues might occur since...",
      date: "2025/08/02",
    },
    {
      id: 4,

      title: "Artículo 4",
      text:"Environmental legal issues might occur since the planned business activities are designed, Environmental legal issues might occur since...",
      date: "2025/08/02",
    },
    {
      id: 5,
      title: "Artículo 5",
      text:"Environmental legal issues might occur since the planned business activities are designed, Environmental legal issues might occur since...",
      date: "2025/08/02",
    },
  ]
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 >= articles.length ? 0 : prevIndex + 3))
  }
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 < 0 ? Math.max(0, articles.length - 3) : prevIndex - 3))
  }
  const visibleArticles = articles.slice(currentIndex, currentIndex + 3)
  return (
    <section id="articulos" className="relative min-h-screen bg-[#ffD597] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M0 400C200 300 400 500 600 400C800 300 1000 500 1200 400" stroke="white" strokeWidth="2" />
          <path d="M0 300C200 200 400 400 600 300C800 200 1000 400 1200 300" stroke="white" strokeWidth="1.5" />
          <path d="M0 500C200 400 400 600 600 500C800 400 1000 600 1200 500" stroke="white" strokeWidth="1.5" />
          <path d="M0 200C200 100 400 300 600 200C800 100 1000 300 1200 200" stroke="white" strokeWidth="1" />
          <path d="M0 600C200 500 400 700 600 600C800 500 1000 700 1200 600" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Artículos</h2>
          </div>


          <div className="relative flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-4 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50"
              disabled={currentIndex === 0}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex justify-center items-stretch gap-4 max-w-6xl mx-auto px-16">
              {visibleArticles.map((article) => (
                <div key={article.id} className="flex-1 min-w-0">
                  <NewsSectionCards url={imgNovedades} title={article.title} text={article.text} date={article.date} />
                </div>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-4 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50"
              disabled={currentIndex + 3 >= articles.length}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
