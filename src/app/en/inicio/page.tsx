import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen select-none">
      {/* Seção Hero */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center justify-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-sky-700">
                  Installation and Maintenance of Air Conditioning
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl mx-auto lg:mx-0">
                  Professional installation, maintenance, and repair services for air conditioning systems for homes and businesses.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link href="/en/contato">
                  <Button size="lg" className="bg-sky-600 hover:bg-sky-700 cursor-pointer">
                    Request Budget
                  </Button>
                </Link>
                <Link href="/en/servicos">
                  <Button size="lg" variant="outline" className="border-sky-600 text-sky-600 cursor-pointer">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/logo.jpg"
                alt="Technician installing air conditioning"
                width={550}
                height={550}
                className="rounded-lg object-cover"
                priority
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-700">
                Our Services
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl">
                We offer complete solutions for your air conditioning system
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-items-center">
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-sky-100">
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
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-700">Installation</h3>
              <p className="text-gray-500 text-center">
                Professional air conditioning installation for residential and commercial use, for all brands.
              </p>
              <div className="mt-auto">
                <Link
                  href="/en/servicos#instalacao"
                  className="text-sky-600 hover:underline inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-sky-100">
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
                  <path d="M11 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8" />
                  <line x1="21" x2="15" y1="12" y2="12" />
                  <line x1="11" x2="11" y1="12" y2="12" />
                  <line x1="11" x2="11" y1="8" y2="16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-700">Maintenance</h3>
              <p className="text-gray-500 text-center">
                Preventive and corrective maintenance to ensure the efficient functioning of your equipment.
              </p>
              <div className="mt-auto">
                <Link
                  href="/en/servicos#manutencao"
                  className="text-sky-600 hover:underline inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-sky-100">
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
                  <path d="m8 2 4 4" />
                  <path d="m2 8 4 4" />
                  <path d="m14 2 4 4" />
                  <path d="M8 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
                  <path d="M22 22 16 16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-700">Diagnosis</h3>
              <p className="text-gray-500 text-center">
                Accurate identification of problems and solutions for your air conditioning system.
              </p>
              <div className="mt-auto">
                <Link
                  href="/en/servicos#diagnostico"
                  className="text-sky-600 hover:underline inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Marcas Credenciadas */}
      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-700">
                Authorized Brands
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl">
                We are certified technicians authorized by the leading brands in the market.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center mt-12">
            {["GREE", "Midea", "Hitachi", "TCL", "Samsung", "LG"].map((brand) => (
              <div key={brand} className="flex flex-col items-center justify-center p-4">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-lg font-bold text-sky-700">{brand}</span>
                </div>
                <span className="mt-2 text-sm text-gray-500">Authorized</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção "Por que nos escolher?" */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center justify-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-700">
                  Why Choose Us?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  We offer quality services with experienced and certified professionals
                </p>
              </div>
              <div className="space-y-4 mt-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-sky-600 h-6 w-6" />
                  <p className="text-lg text-gray-500">Certified and experienced technicians</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-sky-600 h-6 w-6" />
                  <p className="text-lg text-gray-500">Quick and efficient service</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-sky-600 h-6 w-6" />
                  <p className="text-lg text-gray-500">Warranty on all services</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-sky-600 h-6 w-6" />
                  <p className="text-lg text-gray-500">Genuine factory parts</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-sky-600 h-6 w-6" />
                  <p className="text-lg text-gray-500">Competitive pricing</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-sky-600 h-6 w-6" />
                  <p className="text-lg text-gray-500">Post-service support</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/logo.jpg"
                alt="Technician working"
                width={550}
                height={550}
                className="rounded-lg object-cover"
                priority
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="w-full py-12 md:py-24 bg-sky-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Need Air Conditioning Services?</h2>
              <p className="max-w-[900px] text-white text-lg">
                Get in touch today for a free estimate
              </p>
            </div>
            <div>
              <Link href="/en/contato">
                <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 cursor-pointer">
                  Request Budget
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
