import Header from "../home/components/header"
import Footer from "../home/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Our Vision Section */}
      <section id="about" className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
                Our
                <br />
                Visio
                <span className="relative inline-block">
                  <span className="text-orange-500">n</span>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full"></div>
                </span>
              </h1>
            </div>
            <div>
              <p className="text-xl text-white leading-relaxed">
                To bridge the credit gap in India by making the offline channel efficient and transparent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Democratize Access to Financial products by empowering financial intermediaries via technology to unlock
                growth through digital distribution
              </p>
            </div>
            <div className="text-right">
              <h2 className="text-6xl md:text-7xl font-bold text-blue-900 mb-8">
                Our
                <br />M
                <span className="relative inline-block">
                  <span className="text-orange-500">i</span>
                  <div className="absolute -top-2 -right-1 w-4 h-4 bg-orange-500 rounded-full"></div>
                </span>
                ssion
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 py-20 overflow-hidden">
        {/* Team photo background */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-blue-900/80 to-blue-600/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
                Who
                <br />
                we are
                <span className="text-orange-500">.</span>
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-white leading-relaxed">
                Mitram360 is a one-stop shop for all your lending needs covering secured & unsecured loan products
                currently. It enables verified and trusted channel partners to send digitized loan applications with
                detailed risk assessment to lenders.
              </p>
              <p className="text-lg text-white leading-relaxed">
                We are helping banks and NBFCs grow quickly by driving efficiency & building superior customer
                experience. Mitram360 Platform that enables hassle-free, paperless digitization of multiple financial
                products on one platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Began Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-right mb-16">
            <h2 className="text-6xl md:text-7xl font-bold text-blue-900 mb-4">
              How
              <br />
              it began
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-orange-500 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-0 h-0 border-l-[20px] border-l-orange-500 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {/* Timeline Item 1 */}
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-4 relative">
                  <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2"></div>
                  <h3 className="text-sm font-semibold text-orange-500 mb-2">
                    50+ Bank Codes recieved on the platform
                  </h3>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-400">DEC</div>
                  <div className="text-2xl font-bold text-gray-400">2021</div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-4 relative">
                  <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2"></div>
                  <h3 className="text-sm font-semibold text-orange-500 mb-2">Expansion to Western & Southern India</h3>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-400">JAN</div>
                  <div className="text-2xl font-bold text-gray-400">2022</div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-4 relative">
                  <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2"></div>
                  <h3 className="text-sm font-semibold text-orange-500 mb-2">
                    New Branches in Mumbai, Ahmedabad Pune & Bangalore
                  </h3>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-400">FEB</div>
                  <div className="text-2xl font-bold text-gray-400">2022</div>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-4 relative">
                  <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2"></div>
                  <h3 className="text-sm font-semibold text-orange-500 mb-2">
                    ₹3000 Cr+ Loan files processed on the platform
                  </h3>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-400">MAR</div>
                  <div className="text-2xl font-bold text-gray-400">2022</div>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-4 relative">
                  <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2"></div>
                  <h3 className="text-sm font-semibold text-orange-500 mb-2">
                    Incorporation of Mitram360 into Mitram360 FinBiz Pvt Ltd
                  </h3>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-400">APR</div>
                  <div className="text-2xl font-bold text-gray-400">2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Tribe Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Want to join the tribe?</h2>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
            Know About Open Positions
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
