import HeroSection from "./components/hero-section"
import FutureOfLendingSection from "./components/future-of-lending-section"
import ChannelPartnersSection from "./components/channel-partners-section"
import LendingPartnersSection from "./components/lending-partners-section"
import InMediaSection from "./components/in-media-section"
import OfferingsSection from "./components/offerings-section"
import TestimonialsSection from "./components/testimonials-section"
import PresenceSection from "./components/presence-section"
// import BlogsSection from "./components/blogs-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"
import Header from "./components/header"

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FutureOfLendingSection />
      <ChannelPartnersSection />
      <LendingPartnersSection />
      <InMediaSection />
      <OfferingsSection />
      <TestimonialsSection />
      <PresenceSection />
      {/* <BlogsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  )
}
