import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const brands = [
    { name: "GREE", logo: "/gree.png" },
    { name: "Midea", logo: "/midea.png" },
    { name: "Hitachi", logo: "/hitachi.png" },
    { name: "TCL", logo: "/tcl.png" },
    { name: "Samsung", logo: "/samsung.png" },
    { name: "LG", logo: "/lg.png" },
  ]

  return (
    <div className="flex flex-col min-h-screen select-none">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-700">About Us</h1>
          <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl">
            Learn about our history and our commitment to quality
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/logo.jpg"
                alt="Our team"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-sky-700">Our History</h2>
              <p className="text-gray-500 md:text-lg">
                With over 10 years of experience in the market, we specialize in air conditioning installation and maintenance for homes and businesses. Our team is made up of highly qualified and certified professionals committed to providing the best service to our customers.
              </p>
              <p className="text-gray-500 md:text-lg">
                We work with the leading brands in the market and are always up to date with the latest technologies and techniques to ensure the efficiency and durability of the equipment.
              </p>
              <h3 className="text-xl font-bold text-sky-700 mt-4">Our Mission</h3>
              <p className="text-gray-500 md:text-lg">
                To provide thermal comfort with quality, efficiency, and responsibility, exceeding our customers' expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-sky-700">Our Credentials</h2>
            <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-lg">
              We are authorized and certified technicians for the leading brands in the market
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-between bg-white p-6 rounded-lg shadow-sm min-h-[220px] text-center"
              >
                <div className="flex items-center justify-center h-[100px]">
                  <Image
                    src={brand.logo || "/logo.jpg"}
                    alt={`Logo ${brand.name}`}
                    width={100}
                    height={100}
                    className="object-contain"
                    draggable="false"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-sky-700">{brand.name}</h3>
                  <p className="text-sm text-gray-500">Authorized</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-sky-700">Why Choose Us?</h2>
            <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-lg">
              We offer quality services with experienced and certified professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-sky-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sky-600 h-6 w-6"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-700 mb-2">Service Guarantee</h3>
              <p className="text-gray-500">
                All our services come with a guarantee, providing peace of mind and security to our customers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-sky-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sky-600 h-6 w-6"
                >
                  <path d="M2 3h20" />
                  <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                  <path d="m7 21 5-5 5 5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-700 mb-2">Certified Professionals</h3>
              <p className="text-gray-500">
                Our team is made up of certified professionals with extensive experience in the market.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-sky-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sky-600 h-6 w-6"
                >
                  <path d="M12 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v-4h2a2 2 0 0 0 0-4Z" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-700 mb-2">Original Parts</h3>
              <p className="text-gray-500">
                We only use original factory parts, ensuring the quality and durability of the equipment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-sky-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sky-600 h-6 w-6"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-700 mb-2">Quick Service</h3>
              <p className="text-gray-500">
                We offer fast and efficient service, respecting our customers' time.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-sky-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sky-600 h-6 w-6"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-700 mb-2">Customer Commitment</h3>
              <p className="text-gray-500">
                Our commitment is to customer satisfaction, providing personalized and high-quality solutions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-sky-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sky-600 h-6 w-6"
                >
                  <path d="M12 2v20" />
                  <path d="M5 15l7 7 7-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-700 mb-2">Affordable Prices</h3>
              <p className="text-gray-500">
                We offer fair and transparent prices for all our services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
