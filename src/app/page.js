import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import AboutSection from '../components/layout/About';
export default function Home() {
  return (
    <>
      <Hero />
      {/* <HomeMenu /> */}
      <AboutSection/>
    </>
  )
}
