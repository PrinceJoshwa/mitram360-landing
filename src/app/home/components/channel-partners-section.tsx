import { Button } from "@/components/ui/button"
import { Building2, Shield, Headphones, Zap } from "lucide-react"

export default function ChannelPartnersSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl relative overflow-hidden shadow-2xl">
              {/* Mobile App Interface Mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Phone mockup */}
                  <div className="w-64 h-[480px] bg-gray-900 rounded-[3rem] shadow-2xl relative">
                    <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
                      {/* Status bar */}
                      <div className="h-8 bg-gray-100 flex items-center justify-between px-4">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-600">9:41</div>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                        </div>
                      </div>

                      {/* App header */}
                      <div className="h-16 bg-blue-600 flex items-center justify-center">
                        <div className="text-white font-bold text-lg">Mitram360</div>
                      </div>

                      {/* App content */}
                      <div className="p-4 space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-20 bg-orange-100 rounded-lg flex items-center justify-center">
                            <div className="text-orange-600 text-xs font-semibold">Loan Applications</div>
                          </div>
                          <div className="h-20 bg-blue-100 rounded-lg flex items-center justify-center">
                            <div className="text-blue-600 text-xs font-semibold">Disbursals</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-12 bg-green-100 rounded"></div>
                          <div className="h-12 bg-yellow-100 rounded"></div>
                          <div className="h-12 bg-red-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-cyan-400 rounded-full opacity-80 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-400 rounded-full opacity-60 animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-orange-500 mb-6">For Channel Partners</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              You run your business. We empower you with digital tools and banking integrations, with 100% data
              security.
            </p>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Drive Business Digitally</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Completely digital loan journeys with digital operations management suite to grow you lending
                    business
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Strong Lenders Portfolio</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Never let your customer go without credit. 100+ banks and NBFCs offer loans through Mitram360
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-7 h-7 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Dedicated Customer Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get instant help from our Customer Success Managers in every step of your digital transformation
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Fastest Payout in Industry</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Trusted by large banks, our payout management system shortens your payout cycle by 50%
                  </p>
                </div>
              </div>
            </div>
            <Button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold">
              KNOW MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
