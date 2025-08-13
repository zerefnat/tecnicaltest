import React from "react";
import {TeamSectionCards} from "@/components/TeamSectionCards";
import menberTeam1 from '../assets/Teampage1.jpg'
import menberTeam2 from '../assets/Teampage2.jpg'
import menberTeam3 from '../assets/Teampage3.jpg'
import menberTeam4 from '../assets/Teampage4.jpg'
export const TeamSection = () => {
    const team = [
        {
            id: 1,
            url: menberTeam1,
            name:"Anne Hamlin",
            position:"Attorney & Parnet",
        },
        {
            id: 2,
            url: menberTeam2,
            name: "John Doe",
            position: "Senior Consultant",
        },
        {
            id: 3,
            url: menberTeam3,
            name: "Jane Smith",
            position: "Legal Advisor",
        },
        {
            id: 4,
            url: menberTeam4,
            name:"Michael Johnson",
            position: "Project Manager",
        },
    ]

   return (
       <section id="equipo" className="min-h-screen relative overflow-hidden " style={{backgroundColor: "#F5F1E8"}}>
           <div
               className="absolute  right-0 top-75 w-[200px] h-[200px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full opacity-90"
               style={{backgroundColor: "#A8C8E1"}}
           />
           <div
               className="absolute  left-0 bottom-75 w-[200px] h-[200px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full opacity-90"
               style={{backgroundColor: "#A8C8E1"}}
           />
           <div className="absolute inset-0 bg-white/60"></div>
           <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
               <div className="mx-auto max-w-7xl">
                   <div className="text-center mb-16">
                       <h2 className="text-4xl md:text-5xl font-bold text-[#094B72] mb-6">
                           Conoce a nuestro equipo
                       </h2>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                       {team.map((member) => (
                           <TeamSectionCards
                               key={member.id}
                               url={member.url}
                               name={member.name}
                               position={member.position}
                           />
                       ))}
                   </div>
               </div>
               <div className="text-center mt-20">
                   <a className="bg-[#094B72] hover:opacity-90 text-[#f9f8f9] rounded-full px-4 py-2 text-center transition-colors">
                       Ver más
                   </a>

               </div>

           </div>
       </section>
   )
}