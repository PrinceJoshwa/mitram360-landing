import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-400 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Customer Success Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-5xl font-bold mb-8">Our Customer Success Stories</h2>
            <div className="flex items-center space-x-4 mb-8">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 w-12 h-12">
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 w-12 h-12">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
            <blockquote className="text-xl mb-8 leading-relaxed">
              "I've been associated with Mitram360 for more than 6 months. I could never see the{" "}
              <span className="font-bold">transparency</span> with other corporate channels the way I've seen with
              Mitram360 as far as login files and other detailed information goes. It is also helping us{" "}
              <span className="font-bold">bridge the gap with the timely payment of payouts.</span>"
            </blockquote>
            <div className="text-lg">
              <div className="font-semibold">Mr. Bharat, Channel Partner</div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/testimonial.jpg"
                alt="Customer testimonial - Mr. Bharat"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-12">Let's hear from them</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black rounded-xl aspect-video flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                Mr. Vikas Giri, Delhi keeps track...
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="bg-black rounded-xl aspect-video flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                Jatin, Financial Adviser & Partn...
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="bg-black rounded-xl aspect-video flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                Channel Partner Testimonial | P...
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
