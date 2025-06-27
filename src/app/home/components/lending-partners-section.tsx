import { Button } from "@/components/ui/button"
import { Database, Megaphone, Network, Settings } from "lucide-react"

export default function LendingPartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-orange-500 mb-8">For Lending Partners</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Cutting Edge CAM</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our extensive and ever-growing range of APIs provides in-depth file analysis
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Megaphone className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Marketing Engine</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Allows you to create and communicate offers to your channels easily
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Network className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Expand Channel Partner Reach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mitram360 has 1000+ verified channels in over 25+ cities and expanding rapidly
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Settings className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Payout Management System</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Allows you to configure and change channel payouts with enormous flexibility
                  </p>
                </div>
              </div>
            </div>
            <Button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold">
              KNOW MORE
            </Button>
          </div>

          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl relative overflow-hidden shadow-2xl">
              {/* Desktop/Laptop Interface Mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Laptop mockup */}
                  <div className="w-96 h-64 bg-gray-900 rounded-t-2xl shadow-2xl relative">
                    <div className="absolute inset-2 bg-white rounded-t-xl overflow-hidden">
                      {/* Browser header */}
                      <div className="h-8 bg-gray-100 flex items-center px-4 space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-white rounded mx-4 h-5 flex items-center px-2">
                          <div className="text-xs text-gray-400">Mitram360.ai</div>
                        </div>
                      </div>

                      {/* Dashboard content */}
                      <div className="p-4 bg-gradient-to-br from-blue-50 to-white">
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                            <div className="text-blue-600 text-xs font-semibold">Analytics</div>
                          </div>
                          <div className="h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                            <div className="text-orange-600 text-xs font-semibold">Loans</div>
                          </div>
                          <div className="h-16 bg-green-100 rounded-lg flex items-center justify-center">
                            <div className="text-green-600 text-xs font-semibold">Reports</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-200 rounded"></div>
                          <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                          <div className="h-3 bg-gray-200 rounded w-3/5"></div>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <div className="h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg"></div>
                          <div className="h-20 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Laptop base */}
                  <div className="w-96 h-4 bg-gray-800 rounded-b-2xl relative">
                    <div className="absolute inset-x-0 bottom-0 h-2 bg-gray-700 rounded-b-2xl"></div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-cyan-400 rounded-lg opacity-80 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-6 w-8 h-8 bg-orange-400 rounded-full opacity-60 animate-pulse delay-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
