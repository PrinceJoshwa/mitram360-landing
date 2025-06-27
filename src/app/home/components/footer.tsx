import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-start space-x-3 mb-6">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-lg mb-2">12th Floor, Tower - B,</div>
                <div className="text-blue-200 leading-relaxed">
                  M3M Urbana Business Park
                  <br />
                  Behind M3M Urbana, Sector 67, Gurugram,
                  <br />
                  Haryana 122102
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <div className="font-semibold text-lg mb-4">Give us a call at</div>
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="w-5 h-5" />
                <span className="text-blue-200">+91 78 27 870</span>
              </div>
              <div className="font-semibold text-lg mb-2">or email us at</div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span className="text-blue-200">care@mitram360.com</span>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-4">
              <a href="#" className="block hover:text-orange-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-orange-300 transition-colors">
                Blogs
              </a>
              <a href="#" className="block hover:text-orange-300 transition-colors">
                Grievance Redressal
              </a>
            </div>
          </div>

          <div>
            <div className="space-y-4">
              <a href="#" className="block hover:text-orange-300 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="block hover:text-orange-300 transition-colors">
                FAQs
              </a>
              <a href="#" className="block hover:text-orange-300 transition-colors">
                Contact Us
              </a>
              <a href="#" className="block hover:text-orange-300 transition-colors">
                Promotional Offers
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-200">Copyright 2024 Mitram360® Fintech Pvt Ltd</p>
        </div>
      </div>
    </footer>
  )
}
