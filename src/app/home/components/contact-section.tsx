// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Checkbox } from "@/components/ui/checkbox"
// import Image from "next/image"

// export default function ContactSection() {
//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           <div>
//             <h2 className="text-4xl font-bold text-orange-500 mb-6">Join Mitram360 Now!</h2>
//             <p className="text-xl font-semibold text-gray-800 mb-8">and become a part of the lending revolution</p>
//             <p className="text-gray-600 mb-6 text-lg leading-relaxed">
//               We are at the center of lending revolution in India and delivering at scale.
//             </p>
//             <p className="text-gray-600 mb-6 text-lg leading-relaxed">
//               The lending industry is undergoing a transformation and continues to present new and untapped
//               possibilities.
//             </p>
//             <p className="text-gray-600 mb-10 text-lg leading-relaxed">
//               Much exciting work lies ahead. Download Mitram360 now and supercharge your business!
//             </p>

//             {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
//               <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 cursor-pointer hover:bg-gray-800 transition-colors">
//                 <Image
//                   src="/placeholder.svg?height=24&width=24"
//                   alt="Google Play"
//                   width={24}
//                   height={24}
//                   className="w-6 h-6"
//                 />
//                 <span className="font-medium">Google Play</span>
//               </div>
//               <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 cursor-pointer hover:bg-gray-800 transition-colors">
//                 <Image
//                   src="/placeholder.svg?height=24&width=24"
//                   alt="App Store"
//                   width={24}
//                   height={24}
//                   className="w-6 h-6"
//                 />
//                 <span className="font-medium">App Store</span>
//               </div>
//             </div>

//             <div className="bg-green-500 text-white px-6 py-3 rounded-full inline-flex items-center space-x-3 cursor-pointer hover:bg-green-600 transition-colors">
//               <Image
//                 src="/placeholder.svg?height=20&width=20"
//                 alt="WhatsApp"
//                 width={20}
//                 height={20}
//                 className="w-5 h-5"
//               />
//               <span className="font-medium">Join us on WhatsApp</span>
//             </div> */}
//           </div>

//           <Card className="shadow-2xl border-0">
//             <CardContent className="p-8">
//               <p className="text-gray-600 mb-8 text-lg">Please fill the form below and we will give you a call back</p>
//               <form className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">First name *</label>
//                     <Input className="h-12" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Last name *</label>
//                     <Input className="h-12" />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
//                     <Input type="email" className="h-12" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Firm/Organization Name</label>
//                     <Input className="h-12" />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Phone number *</label>
//                     <Input className="h-12" />
//                   </div>
//                   <div className="flex items-center space-x-3 pt-8">
//                     <Checkbox id="callback" />
//                     <label htmlFor="callback" className="text-sm text-gray-600 font-medium">
//                       Request call back
//                     </label>
//                   </div>
//                 </div>
//                 <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
//                   <label className="flex items-center space-x-3">
//                     <input type="radio" name="partner-type" className="w-4 h-4 text-orange-500" />
//                     <span className="text-sm font-medium">Channel Partner</span>
//                   </label>
//                   <label className="flex items-center space-x-3">
//                     <input type="radio" name="partner-type" className="w-4 h-4 text-orange-500" />
//                     <span className="text-sm font-medium">Lending Partner</span>
//                   </label>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
//                   <Textarea className="min-h-[100px]" rows={4} />
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Checkbox id="recaptcha" />
//                   <label htmlFor="recaptcha" className="text-sm text-gray-600 font-medium">
//                     I'm not a robot
//                   </label>
//                 </div>
//                 <p className="text-xs text-gray-500">Fields marked with an asterisk (*) are required.</p>
//                 <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg font-semibold">
//                   SUBMIT
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { submitContactForm } from "@/lib/actions/contact"
import toast, { Toaster } from "react-hot-toast"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    firmOrganizationName: "",
    partnerType: "",
    message: "",
    requestCallback: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)

    try {
      const result = await submitContactForm({
        ...formData,
        pageSource: "contact-section",
      })

      if (result.success) {
        toast.success(result.message || "Form submitted successfully!")
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          firmOrganizationName: "",
          partnerType: "",
          message: "",
          requestCallback: false,
        })
      } else {
        toast.error(result.error || "Failed to submit form. Please try again.")
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Join Mitram360 Now!</h2>
            <p className="text-xl font-semibold text-gray-800 mb-8">and become a part of the lending revolution</p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              We are at the center of lending revolution in India and delivering at scale.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              The lending industry is undergoing a transformation and continues to present new and untapped
              possibilities.
            </p>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Much exciting work lies ahead. Download Mitram360 now and supercharge your business!
            </p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <p className="text-gray-600 mb-8 text-lg">Please fill the form below and we will give you a call back</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First name *</label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last name *</label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="h-12"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Firm/Organization Name</label>
                    <Input
                      name="firmOrganizationName"
                      value={formData.firmOrganizationName}
                      onChange={handleInputChange}
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone number *</label>
                    <Input name="phone" value={formData.phone} onChange={handleInputChange} className="h-12" required />
                  </div>
                  <div className="flex items-center space-x-3 pt-8">
                    <Checkbox
                      id="callback"
                      checked={formData.requestCallback}
                      onCheckedChange={(checked) => handleCheckboxChange("requestCallback", checked as boolean)}
                    />
                    <label htmlFor="callback" className="text-sm text-gray-600 font-medium">
                      Request call back
                    </label>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="partnerType"
                      value="Channel Partner"
                      checked={formData.partnerType === "Channel Partner"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-orange-500"
                    />
                    <span className="text-sm font-medium">Channel Partner</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="partnerType"
                      value="Lending Partner"
                      checked={formData.partnerType === "Lending Partner"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-orange-500"
                    />
                    <span className="text-sm font-medium">Lending Partner</span>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="min-h-[100px]"
                    rows={4}
                  />
                </div>
                <p className="text-xs text-gray-500">Fields marked with an asterisk (*) are required.</p>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg font-semibold"
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  )
}
