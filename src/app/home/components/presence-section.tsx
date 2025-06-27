export default function PresenceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl relative overflow-hidden shadow-2xl">
              {/* Isometric Map Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative transform -rotate-12">
                  {/* Main map platform */}
                  <div className="w-80 h-60 bg-gradient-to-br from-blue-300 to-blue-400 rounded-2xl shadow-2xl relative overflow-hidden">
                    {/* India map outline (simplified) */}
                    <div className="absolute inset-4">
                      <div className="w-full h-full relative">
                        {/* Location markers */}
                        <div className="absolute top-8 left-12 w-4 h-4 bg-red-500 rounded-full shadow-lg animate-pulse">
                          <div className="absolute inset-0 bg-red-400 rounded-full animate-ping"></div>
                        </div>
                        <div className="absolute top-16 right-16 w-3 h-3 bg-red-400 rounded-full shadow-lg animate-pulse delay-300">
                          <div className="absolute inset-0 bg-red-300 rounded-full animate-ping"></div>
                        </div>
                        <div className="absolute bottom-20 left-20 w-3 h-3 bg-red-400 rounded-full shadow-lg animate-pulse delay-700">
                          <div className="absolute inset-0 bg-red-300 rounded-full animate-ping"></div>
                        </div>
                        <div className="absolute bottom-12 right-12 w-4 h-4 bg-red-500 rounded-full shadow-lg animate-pulse delay-1000">
                          <div className="absolute inset-0 bg-red-400 rounded-full animate-ping"></div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-400 rounded-full shadow-lg animate-pulse delay-500">
                          <div className="absolute inset-0 bg-red-300 rounded-full animate-ping"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* City Icons at bottom */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between">
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg mb-2 mx-auto flex items-center justify-center backdrop-blur-sm">
                    <div className="w-6 h-6 bg-white/40 rounded"></div>
                  </div>
                  <div className="text-sm font-medium">Bengaluru</div>
                </div>
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg mb-2 mx-auto flex items-center justify-center backdrop-blur-sm">
                    <div className="w-6 h-6 bg-white/40 rounded"></div>
                  </div>
                  <div className="text-sm font-medium">Hyderabad</div>
                </div>
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg mb-2 mx-auto flex items-center justify-center backdrop-blur-sm">
                    <div className="w-6 h-6 bg-white/40 rounded"></div>
                  </div>
                  <div className="text-sm font-medium">Pune</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Our Presence</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Mitram360 is now 25+ cities strong!</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We have now partnered with 100+ Banks & NBFCs with initial presence in Delhi NCR region i.e. Delhi,
              Greater Noida, Gurgaon, Ghaziabad, Faridabad. Now we are in Mumbai, Thane, Navi Mumbai, Ahmedabad, Pune,
              Hyderabad, Chennai, Bengaluru, Dehradun, Jaipur, Lucknow and more
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
