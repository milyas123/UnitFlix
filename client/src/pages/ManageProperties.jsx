import Footer from "@/components/common/Footer"
import Navbar from "@/components/common/Navbar"
import CTA from "@/components/manageProperties/CTA"
import Hero from "@/components/manageProperties/Hero"
import PropertyActivities from "@/components/manageProperties/PropertyActivities"
import PropertyIntro from "@/components/manageProperties/PropertyIntro"
import Testimonials from "@/components/manageProperties/Testimonials"

const ManageProperties = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <PropertyIntro />
        <PropertyActivities />
        <Testimonials />
        <CTA />
        <Footer />
    </div>
  )
}

export default ManageProperties