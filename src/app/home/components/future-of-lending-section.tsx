import { Card, CardContent } from "@/components/ui/card"

export default function FutureOfLendingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-orange-500 mb-4">Digital</h2>
            <h3 className="text-4xl font-bold text-gray-800 mb-8">way to lend</h3>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              We are a digital lending marketplace connecting lenders with offline channels looking to serve their
              customer's credit needs.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ₹14000<span className="text-lg">Cr+</span>
                  </div>
                  <div className="text-sm text-orange-500 font-semibold uppercase tracking-wide">
                    LOAN
                    <br />
                    DISBURSED
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10000+</div>
                  <div className="text-sm text-orange-500 font-semibold uppercase tracking-wide">
                    CHANNEL
                    <br />
                    PARTNERS
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-sm text-orange-500 font-semibold uppercase tracking-wide">
                    LENDING
                    <br />
                    PARTNERS
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl relative overflow-hidden shadow-2xl">
              {/* 3D Isometric Digital Lending Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative transform rotate-12">
                  {/* Main platform/base */}
                  <div className="w-80 h-60 bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg shadow-2xl relative">
                    {/* Security shield */}
                    <div className="absolute -top-8 right-8 w-16 h-20 bg-gradient-to-b from-cyan-300 to-cyan-400 rounded-t-full rounded-b-lg shadow-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                    </div>

                    {/* Building/bank structure */}
                    <div className="absolute -top-12 left-8 w-20 h-24 bg-gradient-to-b from-white to-gray-100 rounded shadow-lg">
                      <div className="grid grid-cols-3 gap-1 p-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                      </div>
                    </div>

                    {/* Laptop/computer */}
                    <div className="absolute bottom-4 left-4 w-24 h-16 bg-gray-800 rounded shadow-lg">
                      <div className="w-full h-12 bg-gradient-to-b from-blue-400 to-blue-500 rounded-t"></div>
                      <div className="w-full h-4 bg-gray-700 rounded-b flex items-center justify-center">
                        <div className="w-8 h-1 bg-gray-600 rounded"></div>
                      </div>
                    </div>

                    {/* Documents/papers stack */}
                    <div className="absolute bottom-4 right-4 space-y-1">
                      <div className="w-16 h-12 bg-white rounded shadow transform rotate-3"></div>
                      <div className="w-16 h-12 bg-gray-100 rounded shadow transform -rotate-2"></div>
                      <div className="w-16 h-12 bg-white rounded shadow transform rotate-1"></div>
                    </div>

                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <line x1="60" y1="40" x2="120" y2="80" stroke="rgba(34, 211, 238, 0.6)" strokeWidth="2" />
                      <line x1="200" y1="60" x2="160" y2="100" stroke="rgba(34, 211, 238, 0.6)" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
