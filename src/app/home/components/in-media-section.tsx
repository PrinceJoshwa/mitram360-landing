export default function InMediaSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-500 mb-12">In the Media</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="text-center opacity-60 hover:opacity-80 transition-opacity">
              <div className="text-2xl font-bold text-gray-500 mb-2">Entrepreneur</div>
            </div>
            <div className="text-center opacity-60 hover:opacity-80 transition-opacity">
              <div className="text-lg font-bold text-gray-500 mb-2">BW</div>
              <div className="text-sm font-bold text-gray-500">BUSINESSWORLD</div>
            </div>
            <div className="text-center opacity-60 hover:opacity-80 transition-opacity">
              <div className="text-lg font-bold text-gray-500 mb-1">Outlook</div>
              <div className="text-2xl font-bold text-gray-500">MONEY</div>
            </div>
            <div className="text-center opacity-60 hover:opacity-80 transition-opacity">
              <div className="text-2xl font-bold text-gray-500">YOURSTORY</div>
            </div>
            <div className="text-center opacity-60 hover:opacity-80 transition-opacity">
              <div className="text-lg font-bold text-gray-500 mb-1">The</div>
              <div className="text-xl font-bold text-gray-500">Economic Times</div>
            </div>
            <div className="text-center opacity-60 hover:opacity-80 transition-opacity">
              <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto flex items-center justify-center mb-2">
                <span className="text-white font-bold text-sm">ZEE</span>
              </div>
              <div className="text-sm font-bold text-gray-500">BUSINESS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
