import { Card, CardContent } from "@/components/ui/card"
import { FileText, Link, Smartphone, Globe, Building, Shield } from "lucide-react"

export default function OfferingsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">Our Offerings</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Credit Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Get automated CAM in under 1 hour with more than 250+ API integrations including ITR, GST, financials
                etc. giving you complete file analysis in real time
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Link className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Lender Integrations</h3>
              <p className="text-gray-600 leading-relaxed">
                Directly share file in bank's system with zero manual intervention. Mitram360 has direct Loan Origination
                System (LOS) integrations with all large Indian banks
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mitram360 App</h3>
              <p className="text-gray-600 leading-relaxed">
                Create completely digital loan journeys and get rid of your paper files. Mitram360 property documents
                easily on web and mobile
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Channel Portal</h3>
              <p className="text-gray-600 leading-relaxed">
                A web portal to manage your entire business operations and team's performance. Mitram360 enables you to
                drive business growth through complete digitization
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Lender Portal</h3>
              <p className="text-gray-600 leading-relaxed">
                Lender Portal allows Banks and NBFCs to receive digital files allowing lenders to manage their entire
                sourcing and credit operations in a complete digital manner
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Your data and customers will always be yours with 360 degree protection. Our platform is ISO 27001:2013
                certified and follows AWS (Amazon Web Services) cloud security protocols
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
