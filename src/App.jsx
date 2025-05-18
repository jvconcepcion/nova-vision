import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import FeatureSection from "@/components/FeatureSection"
import Workflow from "@/components/Workflow"
import Footer from "@/components/Footer"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"

const App = () => {
  return (
    <>
      <Navbar />
      <div id="main" className="max-w-7xl mx-auto pt-20 px-6 overflow-hidden">
        <HeroSection />
        <span id="feature" />
        <FeatureSection />
        <span id="workflow" />
        <Workflow />
        <span id="pricing" />
        <Pricing />
        <span id="testimonials" />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
