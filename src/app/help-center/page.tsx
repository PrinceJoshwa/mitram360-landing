import Header from "../home/components/header"
import Footer from "../home/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Phone, Mail, MessageCircle, FileText, Users, CreditCard, Settings } from "lucide-react"

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Help Center</h1>
          <p className="text-xl text-white mb-8">Find answers to your questions and get the support you need</p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for help articles, FAQs, and more..."
              className="pl-12 pr-4 py-4 text-lg rounded-full border-0 shadow-lg"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Quick Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Call Support</h3>
                <p className="text-gray-600 mb-6">Speak directly with our support team</p>
                <p className="text-2xl font-bold text-green-600 mb-4">82-87-870-870</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM</p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Support</h3>
                <p className="text-gray-600 mb-6">Send us your questions via email</p>
                <p className="text-lg font-semibold text-blue-600 mb-4">care@mitram360.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Live Chat</h3>
                <p className="text-gray-600 mb-6">Chat with our support agents</p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer border-2 border-gray-100 hover:border-orange-200">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Getting Started</h3>
                <p className="text-sm text-gray-600">Account setup, app installation</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer border-2 border-gray-100 hover:border-orange-200">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Loan Process</h3>
                <p className="text-sm text-gray-600">Application, approval, disbursement</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer border-2 border-gray-100 hover:border-orange-200">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Partner Program</h3>
                <p className="text-sm text-gray-600">DSA, CA partnership queries</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer border-2 border-gray-100 hover:border-orange-200">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Technical Support</h3>
                <p className="text-sm text-gray-600">App issues, troubleshooting</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">How do I become a Mitram360 partner?</h3>
                <p className="text-gray-600">
                  You can become a partner by downloading our app, completing the registration process, and submitting
                  the required documents for verification.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">What types of loans are available?</h3>
                <p className="text-gray-600">
                  We offer Home Loans, Business Loans, Personal Loans, Loan Against Property, Working Capital, and Loan
                  Against Securities through our network of 100+ lenders.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  How long does the loan approval process take?
                </h3>
                <p className="text-gray-600">
                  With our digital platform and automated CAM system, loan processing is significantly faster. Most
                  applications receive initial approval within 24-48 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">How do payouts work for partners?</h3>
                <p className="text-gray-600">
                  Partners receive competitive payouts upon successful loan disbursement. Our payout management system
                  ensures timely and transparent payments with real-time tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Is my data secure with Mitram360?</h3>
                <p className="text-gray-600">
                  Yes, we follow ISO 27001:2013 certification standards and AWS cloud security protocols to ensure 100%
                  data security and privacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
