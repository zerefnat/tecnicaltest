
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {HeroSection} from "@/components/HeroSection";
import {AboutSection} from "@/components/AboutSection";
import {ServicesSection} from "@/components/ServicesSection";
import {TeamSection} from "@/components/TeamSection";
import {NewsSection} from "@/components/NewsSection";
import {CommentsSection} from "@/components/CommentsSection";

export default function Home() {
  return (
       <>
          <Header/>
          <main>
              <HeroSection/>
              <AboutSection/>
              <ServicesSection/>
              <TeamSection/>
              <NewsSection/>
              <CommentsSection/>
          </main>
          <Footer/>
      </>
  );
}
