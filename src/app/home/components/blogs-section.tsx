import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function BlogsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">Latest Blogs</h2>
        </div>
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
                Read More
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
                Read More
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
                Read More
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
                Read More
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
