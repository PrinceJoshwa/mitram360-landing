import Header from "../home/components/header"
import Footer from "../home/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function BecomeOurPartnerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="pt-8">
              <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-6">Become our Partner!</h1>
              <p className="text-xl text-gray-700 mb-8">and be a part of the lending revolution</p>

              <div className="space-y-6 text-gray-600 text-lg">
                <p className="leading-relaxed">
                  We are at the center of lending revolution in India and delivering at scale.
                </p>
                <p className="leading-relaxed">
                  The lending industry is undergoing a transformation and continues to present new and untapped
                  possibilities.
                </p>
                <p className="leading-relaxed">
                  Much exciting work lies ahead. Join Mitram360 now and supercharge your lending business digitally.
                </p>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <p className="text-gray-700 mb-8 text-center font-medium">
                Please fill the form below and we will give you a call back
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">First name *</label>
                    <Input className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">Last name *</label>
                    <Input className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">Email *</label>
                    <Input
                      type="email"
                      className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">Firm/Organization Name</label>
                    <Input className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">Phone number *</label>
                    <Input className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
                  </div>
                  <div className="flex items-center space-x-2 pb-1">
                    <Checkbox id="callback" className="border-gray-300" />
                    <label htmlFor="callback" className="text-sm text-gray-700">
                      Request call back
                    </label>
                  </div>
                </div>

                {/* Partner Type Selection */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="partner-type"
                      id="channel-partner"
                      className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <label htmlFor="channel-partner" className="text-sm font-medium text-gray-700">
                      Channel Partner
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="partner-type"
                      id="lending-partner"
                      className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <label htmlFor="lending-partner" className="text-sm font-medium text-gray-700">
                      Lending Partner
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Message</label>
                  <Textarea
                    className="min-h-[100px] border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    rows={4}
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="recaptcha" className="border-gray-300 mt-1" />
                  <label htmlFor="recaptcha" className="text-sm text-gray-700 leading-relaxed">
                    I'm not a robot
                  </label>
                </div>

                <p className="text-xs text-gray-500 italic text-center leading-relaxed">
                  Fields marked with an asterisk (*) are required.
                </p>

                <div className="text-center">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
