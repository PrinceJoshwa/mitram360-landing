// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Checkbox } from "@/components/ui/checkbox"
// import { ChevronLeft, ChevronRight, ChevronDown, MapPin, Phone, Mail } from "lucide-react"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation Header */}
//       <header className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <Image
//                 src="/placeholder.svg?height=40&width=120"
//                 alt="Mitram360 Logo"
//                 width={120}
//                 height={40}
//                 className="h-8 w-auto"
//               />
//             </div>
//             <nav className="hidden md:flex space-x-8">
//               <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
//                 Home
//               </a>
//               <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
//                 About Us
//               </a>
//               <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
//                 For DSAs
//               </a>
//               <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
//                 For CAs
//               </a>
//               <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
//                 For Lending Partners
//               </a>
//               <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
//                 Help Center
//               </a>
//             </nav>
//             <div className="flex space-x-4">
//               <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">Mitram360</Button>
//               <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full">
//                 BECOME OUR PARTNER
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section - Home1 */}
//       <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 min-h-screen flex items-center overflow-hidden">
//         {/* Network Background Pattern */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full"></div>
//           <div className="absolute top-32 left-40 w-1 h-1 bg-cyan-300 rounded-full"></div>
//           <div className="absolute top-40 right-60 w-2 h-2 bg-cyan-400 rounded-full"></div>
//           <div className="absolute bottom-40 left-60 w-1 h-1 bg-cyan-300 rounded-full"></div>
//           <div className="absolute bottom-60 right-40 w-2 h-2 bg-cyan-400 rounded-full"></div>
//           {/* Connection Lines */}
//           <svg className="absolute inset-0 w-full h-full">
//             <line x1="80" y1="80" x2="160" y2="128" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" />
//             <line x1="160" y1="128" x2="400" y2="160" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" />
//             <line x1="240" y1="240" x2="400" y2="160" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" />
//           </svg>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center">
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
//               THE FUTU
//               <span className="relative">
//                 <span className="text-orange-500">R</span>
//                 <div className="absolute -top-2 -right-2 w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center">
//                   <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
//                 </div>
//               </span>
//               E OF LENDING
//             </h1>
//             <div className="mt-16">
//               <ChevronDown className="w-8 h-8 text-white mx-auto animate-bounce" />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Statistics Cards */}
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-100 to-transparent p-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h2 className="text-4xl font-bold text-orange-500 mb-4">Digital</h2>
//                 <h3 className="text-3xl font-bold text-gray-800 mb-6">way to lend</h3>
//                 <p className="text-gray-600 mb-8 max-w-md">
//                   We are a digital lending marketplace connecting lenders with offline channels looking to serve their
//                   customer's credit needs.
//                 </p>
//                 <div className="grid grid-cols-3 gap-4">
//                   <Card className="text-center p-4">
//                     <CardContent className="p-0">
//                       <div className="text-2xl font-bold text-blue-600">
//                         ₹14000<span className="text-sm">Cr+</span>
//                       </div>
//                       <div className="text-xs text-orange-500 font-semibold">LOAN DISBURSED</div>
//                     </CardContent>
//                   </Card>
//                   <Card className="text-center p-4">
//                     <CardContent className="p-0">
//                       <div className="text-2xl font-bold text-blue-600">10000+</div>
//                       <div className="text-xs text-orange-500 font-semibold">CHANNEL PARTNERS</div>
//                     </CardContent>
//                   </Card>
//                   <Card className="text-center p-4">
//                     <CardContent className="p-0">
//                       <div className="text-2xl font-bold text-blue-600">100+</div>
//                       <div className="text-xs text-orange-500 font-semibold">LENDING PARTNERS</div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//               <div className="relative">
//                 <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg relative overflow-hidden">
//                   {/* 3D Isometric Illustration Placeholder */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-white text-center">
//                       <div className="w-32 h-32 bg-blue-500 rounded-lg mb-4 mx-auto opacity-80"></div>
//                       <div className="w-24 h-24 bg-cyan-400 rounded-lg mx-auto opacity-60"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* For Channel Partners & Lending Partners Section - Home2 */}
//       <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* For Channel Partners */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
//             <div className="relative">
//               <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg relative overflow-hidden">
//                 {/* Mobile Interface Mockup */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-48 h-80 bg-white rounded-2xl shadow-2xl relative">
//                     <div className="absolute top-4 left-4 right-4 h-8 bg-blue-600 rounded"></div>
//                     <div className="absolute top-16 left-4 right-4 space-y-2">
//                       <div className="h-3 bg-gray-200 rounded"></div>
//                       <div className="h-3 bg-gray-200 rounded w-3/4"></div>
//                       <div className="h-3 bg-gray-200 rounded w-1/2"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-orange-500 mb-6">For Channel Partners</h2>
//               <p className="text-gray-600 mb-8">
//                 You run your business. We empower you with digital tools and banking integrations, with 100% data
//                 security.
//               </p>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <div className="w-6 h-6 bg-orange-500 rounded"></div>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800 mb-2">Drive Business Digitally</h3>
//                     <p className="text-gray-600 text-sm">
//                       Completely digital loan journeys with digital operations management suite to grow you lending
//                       business
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <div className="w-6 h-6 bg-orange-500 rounded"></div>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800 mb-2">Strong Lenders Portfolio</h3>
//                     <p className="text-gray-600 text-sm">
//                       Never let your customer go without credit. 100+ banks and NBFCs offer loans through Mitram360
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <div className="w-6 h-6 bg-orange-500 rounded"></div>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800 mb-2">Dedicated Customer Support</h3>
//                     <p className="text-gray-600 text-sm">
//                       Get instant help from our Customer Success Managers in every step of your digital transformation
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <div className="w-6 h-6 bg-orange-500 rounded"></div>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800 mb-2">Fastest Payout in Industry</h3>
//                     <p className="text-gray-600 text-sm">
//                       Trusted by large banks, our payout management system shortens your payout cycle by 50%
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <Button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
//                 KNOW MORE
//               </Button>
//             </div>
//           </div>

//           {/* For Lending Partners */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-orange-500 mb-8">For Lending Partners</h2>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <div className="w-6 h-6 bg-blue-500 rounded"></div>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800 mb-2">Cutting Edge CAM</h3>
//                     <p className="text-gray-600 text-sm">
//                       Our extensive and ever-growing range of APIs provides in-depth file analysis
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <div className="w-6 h-6 bg-blue-500 rounded"></div>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800 mb-2">Marketing Engine</h3>
//                     <p className="text-gray-600 text-sm">
//                       Allows you to create and communicate offers to your channels easily
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <div className="w-6 h-6 bg-blue-500 rounded"></div>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800 mb-2">Expand Channel Partner Reach</h3>
//                     <p className="text-gray-600 text-sm">
//                       Mitram360 has 1000+ verified channels in over 25+ cities and expanding rapidly
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <div className="w-6 h-6 bg-blue-500 rounded"></div>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800 mb-2">Payout Management System</h3>
//                     <p className="text-gray-600 text-sm">
//                       Allows you to configure and change channel payouts with enormous flexibility
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <Button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
//                 KNOW MORE
//               </Button>
//             </div>
//             <div className="relative">
//               <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg relative overflow-hidden">
//                 {/* Laptop Interface Mockup */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-80 h-48 bg-white rounded-lg shadow-2xl relative">
//                     <div className="absolute top-2 left-2 right-2 h-6 bg-blue-600 rounded"></div>
//                     <div className="absolute top-10 left-2 right-2 bottom-2 bg-gray-100 rounded"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* In the Media & Our Offerings Section - Home3 */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* In the Media */}
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-orange-500 mb-12">In the Media</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-400">Entrepreneur</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-xl font-bold text-gray-400">BW BUSINESSWORLD</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-xl font-bold text-gray-400">Outlook MONEY</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-xl font-bold text-gray-400">YOURSTORY</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-xl font-bold text-gray-400">The Economic Times</div>
//               </div>
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto flex items-center justify-center">
//                   <span className="text-white font-bold text-xs">ZEE</span>
//                 </div>
//                 <div className="text-sm text-gray-400 mt-1">BUSINESS</div>
//               </div>
//             </div>
//           </div>

//           {/* Our Offerings */}
//           <div className="mb-16">
//             <h2 className="text-3xl font-bold text-orange-500 text-center mb-12">Our Offerings</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <Card className="p-6 hover:shadow-lg transition-shadow">
//                 <CardContent className="p-0">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                     <div className="w-6 h-6 bg-blue-500 rounded"></div>
//                   </div>
//                   <h3 className="font-semibold text-gray-800 mb-2">Credit Analysis</h3>
//                   <p className="text-gray-600 text-sm">
//                     Get automated CAM in under 1 hour with more than 250+ API integrations including ITR, GST,
//                     financials etc. giving you complete file analysis in real time
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card className="p-6 hover:shadow-lg transition-shadow">
//                 <CardContent className="p-0">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                     <div className="w-6 h-6 bg-blue-500 rounded"></div>
//                   </div>
//                   <h3 className="font-semibold text-gray-800 mb-2">Lender Integrations</h3>
//                   <p className="text-gray-600 text-sm">
//                     Directly share file in bank's system with zero manual intervention. Mitram360 has direct Loan
//                     Origination System (LOS) integrations with all large Indian banks
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card className="p-6 hover:shadow-lg transition-shadow">
//                 <CardContent className="p-0">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                     <div className="w-6 h-6 bg-blue-500 rounded"></div>
//                   </div>
//                   <h3 className="font-semibold text-gray-800 mb-2">Mitram360 App</h3>
//                   <p className="text-gray-600 text-sm">
//                     Create completely digital loan journeys and get rid of your paper files. Mitram360 property documents
//                     easily on web and mobile
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card className="p-6 hover:shadow-lg transition-shadow">
//                 <CardContent className="p-0">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                     <div className="w-6 h-6 bg-blue-500 rounded"></div>
//                   </div>
//                   <h3 className="font-semibold text-gray-800 mb-2">Channel Portal</h3>
//                   <p className="text-gray-600 text-sm">
//                     A web portal to manage your entire business operations and team's performance. Mitram360 enables you
//                     to drive business growth through complete digitization
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card className="p-6 hover:shadow-lg transition-shadow">
//                 <CardContent className="p-0">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                     <div className="w-6 h-6 bg-blue-500 rounded"></div>
//                   </div>
//                   <h3 className="font-semibold text-gray-800 mb-2">Lender Portal</h3>
//                   <p className="text-gray-600 text-sm">
//                     Lender Portal allows Banks and NBFCs to receive digital files allowing lenders to manage their
//                     entire sourcing and credit operations in a complete digital manner
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card className="p-6 hover:shadow-lg transition-shadow">
//                 <CardContent className="p-0">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                     <div className="w-6 h-6 bg-blue-500 rounded"></div>
//                   </div>
//                   <h3 className="font-semibold text-gray-800 mb-2">Data Security</h3>
//                   <p className="text-gray-600 text-sm">
//                     Your data and customers will always be yours with 360 degree protection. Our platform is ISO
//                     27001:2013 certified and follows AWS (Amazon Web Services) cloud security protocols
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* Customer Success Stories */}
//           <div className="bg-orange-500 rounded-2xl p-8 md:p-12 text-white">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h2 className="text-4xl font-bold mb-8">Our Customer Success Stories</h2>
//                 <div className="flex items-center space-x-4 mb-8">
//                   <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
//                     <ChevronLeft className="w-6 h-6" />
//                   </Button>
//                   <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
//                     <ChevronRight className="w-6 h-6" />
//                   </Button>
//                 </div>
//                 <blockquote className="text-lg mb-6">
//                   "I've been associated with Mitram360 for more than 6 months. I could never see the{" "}
//                   <span className="font-bold">transparency</span> with other corporate channels the way I've seen with
//                   Mitram360 as far as login files and other detailed information goes. It is also helping us{" "}
//                   <span className="font-bold">bridge the gap with the timely payment of payouts.</span>"
//                 </blockquote>
//                 <div className="text-sm">
//                   <div className="font-semibold">Mr. Bharat, Channel Partner</div>
//                 </div>
//               </div>
//               <div className="flex justify-center">
//                 <div className="w-48 h-48 rounded-full overflow-hidden">
//                   <Image
//                     src="/placeholder.svg?height=200&width=200"
//                     alt="Customer testimonial"
//                     width={200}
//                     height={200}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="mt-12">
//               <h3 className="text-2xl font-bold text-center mb-8">Let's hear from them</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative">
//                   <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
//                     <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
//                   </div>
//                   <div className="absolute bottom-2 left-2 text-white text-xs">
//                     Mr. Vikas Giri, Delhi keeps track...
//                   </div>
//                 </div>
//                 <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative">
//                   <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
//                     <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
//                   </div>
//                   <div className="absolute bottom-2 left-2 text-white text-xs">Jatin, Financial Adviser & Partn...</div>
//                 </div>
//                 <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative">
//                   <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
//                     <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
//                   </div>
//                   <div className="absolute bottom-2 left-2 text-white text-xs">Channel Partner Testimonial | P...</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Presence & Contact Section - Home4 */}
//       <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Our Presence */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
//             <div className="relative">
//               <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg relative overflow-hidden">
//                 {/* Isometric Map Illustration */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="relative">
//                     <div className="w-64 h-48 bg-blue-400 rounded-lg transform rotate-12 opacity-80"></div>
//                     <div className="absolute top-4 left-8 w-4 h-4 bg-red-500 rounded-full"></div>
//                     <div className="absolute bottom-8 right-12 w-3 h-3 bg-red-400 rounded-full"></div>
//                   </div>
//                 </div>
//                 {/* City Icons */}
//                 <div className="absolute bottom-4 left-4 right-4 flex justify-between">
//                   <div className="text-center text-white">
//                     <div className="w-8 h-8 bg-white/20 rounded mb-1 mx-auto"></div>
//                     <div className="text-xs">Bengaluru</div>
//                   </div>
//                   <div className="text-center text-white">
//                     <div className="w-8 h-8 bg-white/20 rounded mb-1 mx-auto"></div>
//                     <div className="text-xs">Hyderabad</div>
//                   </div>
//                   <div className="text-center text-white">
//                     <div className="w-8 h-8 bg-white/20 rounded mb-1 mx-auto"></div>
//                     <div className="text-xs">Pune</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-orange-500 mb-6">Our Presence</h2>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">Mitram360 is now 25+ cities strong!</h3>
//               <p className="text-gray-600 mb-6">
//                 We have now partnered with 100+ Banks & NBFCs with initial presence in Delhi NCR region i.e. Delhi,
//                 Greater Noida, Gurgaon, Ghaziabad, Faridabad. Now we are in Mumbai, Thane, Navi Mumbai, Ahmedabad, Pune,
//                 Hyderabad, Chennai, Bengaluru, Dehradun, Jaipur, Lucknow and more
//               </p>
//             </div>
//           </div>

//           {/* Latest Blogs */}
//           <div className="mb-16">
//             <h2 className="text-3xl font-bold text-orange-500 text-center mb-12">Latest Blogs</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <Card className="overflow-hidden hover:shadow-lg transition-shadow">
//                 <div className="aspect-video bg-gray-200"></div>
//                 <CardContent className="p-4">
//                   <h3 className="font-semibold text-gray-800 mb-2 text-sm">
//                     From Traditional to Tech-Savvy: Redefining Loan Advisors in the Digital Lending Industry
//                   </h3>
//                   <a href="#" className="text-orange-500 text-xs hover:underline">
//                     Read More
//                   </a>
//                 </CardContent>
//               </Card>
//               <Card className="overflow-hidden hover:shadow-lg transition-shadow">
//                 <div className="aspect-video bg-gray-200"></div>
//                 <CardContent className="p-4">
//                   <h3 className="font-semibold text-gray-800 mb-2 text-sm">
//                     Understanding yet another DNA - The Financial One
//                   </h3>
//                   <a href="#" className="text-orange-500 text-xs hover:underline">
//                     Read More
//                   </a>
//                 </CardContent>
//               </Card>
//               <Card className="overflow-hidden hover:shadow-lg transition-shadow">
//                 <div className="aspect-video bg-gray-200"></div>
//                 <CardContent className="p-4">
//                   <h3 className="font-semibold text-gray-800 mb-2 text-sm">
//                     2030: A Sneak Peek into the Future of Indian Digital Lending
//                   </h3>
//                   <a href="#" className="text-orange-500 text-xs hover:underline">
//                     Read More
//                   </a>
//                 </CardContent>
//               </Card>
//               <Card className="overflow-hidden hover:shadow-lg transition-shadow">
//                 <div className="aspect-video bg-gray-200"></div>
//                 <CardContent className="p-4">
//                   <h3 className="font-semibold text-gray-800 mb-2 text-sm">
//                     Could AI Disrupt the Lending Industry as We Know It?
//                   </h3>
//                   <a href="#" className="text-orange-500 text-xs hover:underline">
//                     Read More
//                   </a>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* Join Mitram360 & Contact Form */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold text-orange-500 mb-4">Join Mitram360 Now!</h2>
//               <p className="text-gray-800 font-semibold mb-6">and become a part of the lending revolution</p>
//               <p className="text-gray-600 mb-4">
//                 We are at the center of lending revolution in India and delivering at scale.
//               </p>
//               <p className="text-gray-600 mb-6">
//                 The lending industry is undergoing a transformation and continues to present new and untapped
//                 possibilities.
//               </p>
//               <p className="text-gray-600 mb-8">
//                 Much exciting work lies ahead. Download Mitram360 now and supercharge your business!
//               </p>

//               <div className="flex space-x-4 mb-6">
//                 <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
//                   <div className="w-6 h-6 bg-white rounded"></div>
//                   <span className="text-sm">Google Play</span>
//                 </div>
//                 <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
//                   <div className="w-6 h-6 bg-white rounded"></div>
//                   <span className="text-sm">App Store</span>
//                 </div>
//               </div>

//               <div className="bg-green-500 text-white px-4 py-2 rounded-full inline-flex items-center space-x-2">
//                 <span className="text-sm">Join us on WhatsApp</span>
//               </div>
//             </div>

//             <Card className="p-6">
//               <CardContent className="p-0">
//                 <p className="text-gray-600 mb-6">Please fill the form below and we will give you a call back</p>
//                 <form className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="text-sm font-medium text-gray-700">First name *</label>
//                       <Input className="mt-1" />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium text-gray-700">Last name *</label>
//                       <Input className="mt-1" />
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="text-sm font-medium text-gray-700">Email *</label>
//                       <Input type="email" className="mt-1" />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium text-gray-700">Firm/Organization Name</label>
//                       <Input className="mt-1" />
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="text-sm font-medium text-gray-700">Phone number *</label>
//                       <Input className="mt-1" />
//                     </div>
//                     <div className="flex items-center space-x-2 pt-6">
//                       <Checkbox id="callback" />
//                       <label htmlFor="callback" className="text-sm text-gray-600">
//                         Request call back
//                       </label>
//                     </div>
//                   </div>
//                   <div className="flex space-x-4">
//                     <label className="flex items-center space-x-2">
//                       <input type="radio" name="partner-type" className="text-orange-500" />
//                       <span className="text-sm">Channel Partner</span>
//                     </label>
//                     <label className="flex items-center space-x-2">
//                       <input type="radio" name="partner-type" className="text-orange-500" />
//                       <span className="text-sm">Lending Partner</span>
//                     </label>
//                   </div>
//                   <div>
//                     <label className="text-sm font-medium text-gray-700">Message</label>
//                     <Textarea className="mt-1" rows={3} />
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Checkbox id="recaptcha" />
//                     <label htmlFor="recaptcha" className="text-sm text-gray-600">
//                       I'm not a robot
//                     </label>
//                   </div>
//                   <p className="text-xs text-gray-500">Fields marked with an asterisk (*) are required.</p>
//                   <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">SUBMIT</Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-blue-900 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <MapPin className="w-5 h-5" />
//                 <div>
//                   <div className="font-semibold">12th Floor, Tower - B,</div>
//                   <div>M3M Urbana Business Park</div>
//                   <div>Behind M3M Urbana, Sector 67, Gurugram,</div>
//                   <div>Haryana 122102</div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="mb-4">
//                 <div className="font-semibold mb-2">Give us a call at</div>
//                 <div className="flex items-center space-x-2">
//                   <Phone className="w-4 h-4" />
//                   <span>+91 78 27 870</span>
//                 </div>
//                 <div className="mt-2">
//                   <div className="font-semibold mb-1">or email us at</div>
//                   <div className="flex items-center space-x-2">
//                     <Mail className="w-4 h-4" />
//                     <span>care@Mitram360.ai</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="space-y-2">
//                 <a href="#" className="block hover:text-orange-300">
//                   Privacy Policy
//                 </a>
//                 <a href="#" className="block hover:text-orange-300">
//                   Blogs
//                 </a>
//                 <a href="#" className="block hover:text-orange-300">
//                   Grievance Redressal
//                 </a>
//               </div>
//             </div>
//             <div>
//               <div className="space-y-2">
//                 <a href="#" className="block hover:text-orange-300">
//                   Terms & Conditions
//                 </a>
//                 <a href="#" className="block hover:text-orange-300">
//                   FAQs
//                 </a>
//                 <a href="#" className="block hover:text-orange-300">
//                   Contact Us
//                 </a>
//                 <a href="#" className="block hover:text-orange-300">
//                   Promotional Offers
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-blue-800 mt-8 pt-8 text-center">
//             <p className="text-sm">Copyright 2024 Mitram360® Fintech Pvt Ltd</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

import AboutPage from "./about/page"
import BecomeOurPartnerPage from "./become-our-partner/page"
import ForCAsPage from "./for-cas/page"
import ForDSAsPage from "./for-dsas/page"
import ForLendingPartnersPage from "./for-lending-partners/page"
import HelpCenterPage from "./help-center/page"
import Home from "./home/page"


export default function Page() {
  return <>
  <Home />
  <AboutPage />
  <ForDSAsPage/>
  <ForCAsPage/>
  <ForLendingPartnersPage/>
  <HelpCenterPage/>
  <BecomeOurPartnerPage/>
  </>
}
