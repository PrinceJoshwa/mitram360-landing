import Header from "../home/components/header"
import Footer from "../home/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { DollarSign, Users, Shield, Database, BookOpen, Video, Users2, Headphones } from "lucide-react"

export default function ForCAsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="for-cas" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Launching Mitram360's Channel Partner Program for Chartered Accountants
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                For all the lending needs of your clients (Home Loans, LAP, Business Loans, Personal Loans, Gold Loans
                and more....)
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
                BECOME A PARTNER TODAY
              </Button>
            </div>
            <div className="relative">
              {/* CA Hero Background Image */}
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-32 h-32 bg-blue-500 rounded-lg mb-4 mx-auto opacity-80 flex items-center justify-center">
                      <span className="text-4xl font-bold">CA</span>
                    </div>
                    <div className="text-lg font-semibold">Chartered Accountants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with India's leading Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-orange-500 mb-8">
                Partner with India's leading digital lending marketplace today
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mitram360 is a one-stop shop for all your client's lending needs covering secured & unsecured loan
                products. We have partnered with 65+ banks and NBFCs and more than 5000+ Channel Partner network across
                the country.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">How it works:</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-semibold text-orange-500 mr-3">1.</span>
                    Just share the lead via Mitram360 App
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-orange-500 mr-3">2.</span>
                    Our team takes care of the entire loan journey
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-orange-500 mr-3">4.</span>
                    Your client gets the best lender match @ best interest rates
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-orange-500 mr-3">3.</span>
                    After loan disbursement, get instant payouts.
                  </li>
                </ol>
              </div>
              <p className="text-xl font-semibold text-gray-800 mb-6">
                The more leads you generate, the more money you make.
              </p>
              <p className="text-gray-600 mb-8">Download our App "Mitram360" and get started:</p>
              <div className="flex space-x-4 mb-8">
                <Image
                  src="/placeholder.svg?height=60&width=180"
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                />
                <Image
                  src="/placeholder.svg?height=60&width=180"
                  alt="Download on App Store"
                  width={180}
                  height={60}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Join Mitram360's Channel Partner Program
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First name *</label>
                      <Input className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last name *</label>
                      <Input className="h-12" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <Input type="email" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Firm/Organization Name</label>
                      <Input className="h-12" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone number *</label>
                      <Input className="h-12" />
                    </div>
                    <div className="flex items-center space-x-3 pt-8">
                      <Checkbox id="callback" />
                      <label htmlFor="callback" className="text-sm text-gray-600 font-medium">
                        Request call back
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                    <label className="flex items-center space-x-3">
                      <input type="radio" name="partner-type" className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-medium">Chartered Accountant (CA)</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="radio" name="partner-type" className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-medium">Lending Partner (Banks & NBFCs)</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="radio" name="partner-type" className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium">Direct Selling Agent (DSA)</span>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <Textarea className="min-h-[100px]" rows={4} />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="recaptcha" />
                    <label htmlFor="recaptcha" className="text-sm text-gray-600 font-medium">
                      I'm not a robot
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 italic text-center">
                    Fields marked with an asterisk (*) are required.
                  </p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg font-semibold">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mitram360 offers the best partner benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-orange-500 text-center mb-16">
            Mitram360 offers the best partner benefits to CAs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Attractive And Timely Payouts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get highest payout in the industry with real time visibility of accrued payouts with shortest TAT
                  across the industry
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">More Than 100+ Lending Partners</h3>
                <p className="text-gray-600 leading-relaxed">
                  Have configured 100+ lender policies in Mitram360's recommendation engine, matching file for highest
                  approval rate.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Best Client Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  With Mitram360, just in single click you can send your lead and rest is taken care of by us.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Highest Data Privacy And Data Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  Allows real time visibility of accrued payouts with shortest TAT across the industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download the App & Get Started Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-orange-500 text-center mb-16">Download the App & Get Started!</h2>

          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-orange-500 mb-8">Step 1</h3>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Go to <strong>Play store/App store</strong> and search <strong>Mitram360</strong>.
                <br />
                Click on install to download the app in your phone.
              </p>
              <div className="flex space-x-4">
                <Image
                  src="/placeholder.svg?height=60&width=180"
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                />
                <Image
                  src="/placeholder.svg?height=60&width=180"
                  alt="Download on App Store"
                  width={180}
                  height={60}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-[600px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Mobile mockup with app store */}
                <div className="absolute inset-4 bg-white rounded-2xl overflow-hidden">
                  <div className="h-8 bg-gray-100 flex items-center justify-center">
                    <div className="text-xs text-gray-600">12:30</div>
                  </div>
                  <div className="p-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">S</span>
                    </div>
                    <h4 className="font-bold text-lg mb-2">Mitram360</h4>
                    <p className="text-sm text-gray-600 mb-4">Digital Lending Platform</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="h-16 bg-blue-100 rounded-lg"></div>
                      <div className="h-16 bg-blue-100 rounded-lg"></div>
                      <div className="h-16 bg-blue-100 rounded-lg"></div>
                      <div className="h-16 bg-blue-100 rounded-lg"></div>
                    </div>
                    <Button className="w-full bg-green-600 text-white">Install</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="flex justify-center lg:order-1">
              <div className="w-80 h-[600px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Mobile mockup with login form */}
                <div className="absolute inset-4 bg-white rounded-2xl overflow-hidden">
                  <div className="h-12 bg-blue-600 flex items-center px-4">
                    <span className="text-white font-semibold">Welcome to Mitram360</span>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-6">Let's start with entering a few details</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-600">First Name</label>
                        <div className="h-10 bg-gray-100 rounded mt-1"></div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Last Name</label>
                        <div className="h-10 bg-gray-100 rounded mt-1"></div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Date of Birth</label>
                        <div className="h-10 bg-gray-100 rounded mt-1"></div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                          <span className="text-sm">Male</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                          <span className="text-sm">Female</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                          <span className="text-sm">Other</span>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 text-white mt-8">Next</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-2">
              <h3 className="text-3xl font-bold text-orange-500 mb-8">Step 2</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                After installing Mitram360, login with your number and <strong>fill in your basic details</strong> to
                start using the app.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-orange-500 mb-8">Step 3</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Start uploading your documents as required and <strong>complete your KYC</strong> automatically.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-[600px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Mobile mockup with KYC form */}
                <div className="absolute inset-4 bg-white rounded-2xl overflow-hidden">
                  <div className="h-12 bg-blue-600 flex items-center px-4">
                    <span className="text-white font-semibold">My KYC</span>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-6">Let's start with your Personal PAN</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-sm">I do not have PAN</span>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Name</label>
                        <div className="h-10 bg-gray-100 rounded mt-1"></div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">PAN Number</label>
                        <div className="h-10 bg-gray-100 rounded mt-1"></div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Select Another Proof</label>
                        <div className="h-10 bg-gray-100 rounded mt-1 flex items-center px-3">
                          <span className="text-sm text-gray-500">Aadhar Card</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Proof Image</label>
                        <div className="h-20 bg-gray-100 rounded mt-1 flex items-center justify-center">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 text-white mt-6">Save and Next</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="flex justify-center lg:order-1">
              <div className="w-80 h-[600px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Mobile mockup with loan application */}
                <div className="absolute inset-4 bg-white rounded-2xl overflow-hidden">
                  <div className="h-12 bg-blue-600 flex items-center px-4">
                    <span className="text-white font-semibold">Home Loan</span>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium">Basic Details</span>
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium">Employment Details</span>
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium">Residence Details</span>
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium">Financial Documents</span>
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h5 className="font-semibold mb-3">Other / Optional Information</h5>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm">Co - Applicant Details</span>
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm">Detailed Profiling</span>
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 text-white mt-6">Share the lead</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-2">
              <h3 className="text-3xl font-bold text-orange-500 mb-8">Step 4</h3>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                After selecting the loan product, start entering your customer details.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                We have <strong>250+ API integrations</strong> for you to create a completely verified file.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-orange-500 mb-8">Step 5</h3>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Now, you have created a <strong>fully verified digital loan file</strong> with ITR, GST, banking
                integrations.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Share the file along with <strong>credit analysis</strong> with Mitram360{" "}
                <strong>recommended lenders</strong>.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-[600px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Mobile mockup with loan summary */}
                <div className="absolute inset-4 bg-white rounded-2xl overflow-hidden">
                  <div className="h-12 bg-blue-600 flex items-center px-4">
                    <span className="text-white font-semibold">Loan Summary</span>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-gray-500">Loan Amount</div>
                          <div className="font-semibold">₹50,00,000</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Loan Type</div>
                          <div className="font-semibold">Home Loan</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-gray-500">Monthly Income</div>
                          <div className="font-semibold">₹1,25,000</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Loan Tenure</div>
                          <div className="font-semibold">20 Years</div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h5 className="font-semibold mb-3">Document Status</h5>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm">ITR Verified</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm">GST Verified</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm">Bank Statement</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-sm">Property Documents</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h5 className="font-semibold mb-3">Recommended Lenders</h5>
                        <div className="space-y-2">
                          <div className="p-2 bg-green-50 rounded flex items-center justify-between">
                            <span className="text-sm">HDFC Bank</span>
                            <span className="text-xs text-green-600">95% Match</span>
                          </div>
                          <div className="p-2 bg-green-50 rounded flex items-center justify-between">
                            <span className="text-sm">ICICI Bank</span>
                            <span className="text-xs text-green-600">92% Match</span>
                          </div>
                          <div className="p-2 bg-yellow-50 rounded flex items-center justify-between">
                            <span className="text-sm">SBI</span>
                            <span className="text-xs text-yellow-600">85% Match</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 text-white mt-6">Forward to Lender</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get to know more about us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-orange-500 text-center mb-16">Get to know more about us!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Training resources</h3>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Videos</h3>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Join Webinar</h3>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800">24/7 Support</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-orange-500 text-center mb-16">Latest Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Blog post thumbnail"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3 text-lg leading-tight">
                  From Traditional to Tech-Savvy: Redefining Loan Advisors in the Digital Lending Industry
                </h3>
                <a href="#" className="text-orange-500 text-sm hover:underline font-medium">
                  Read More...
                </a>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Blog post thumbnail"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3 text-lg leading-tight">
                  Understanding yet another DNA - The Financial One
                </h3>
                <a href="#" className="text-orange-500 text-sm hover:underline font-medium">
                  Read More...
                </a>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Blog post thumbnail"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3 text-lg leading-tight">
                  2030: A Sneak Peek into the Future of Indian Digital Lending
                </h3>
                <a href="#" className="text-orange-500 text-sm hover:underline font-medium">
                  Read More...
                </a>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Blog post thumbnail"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3 text-lg leading-tight">
                  Could AI Disrupt the Lending Industry as We Know It?
                </h3>
                <a href="#" className="text-orange-500 text-sm hover:underline font-medium">
                  Read More...
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
