import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      id: "installation",
      title: "Installation",
      description: "Professional air conditioning installation for homes and businesses.",
      features: [
        "Split air conditioning installation",
        "Window air conditioning installation",
        "Cassette air conditioning installation",
        "Floor-ceiling air conditioning installation",
        "Multi-split air conditioning installation",
        "VRF/VRV air conditioning installation",
      ],
      image: "/logo.jpg",
    },
    {
      id: "maintenance",
      title: "Maintenance",
      description: "Preventive and corrective maintenance to ensure efficient operation of your equipment.",
      features: [
        "Filter cleaning",
        "Refrigerant gas check",
        "Coil cleaning",
        "Electrical component check",
        "Drainage check",
        "Noise and vibration check",
      ],
      image: "/logo.jpg",
    },
    {
      id: "cleaning",
      title: "Cleaning",
      description:
        "Complete cleaning of your air conditioning to improve air quality and equipment efficiency.",
      features: [
        "Filter cleaning",
        "Coil cleaning",
        "Turbine cleaning",
        "Drain pan cleaning",
        "Cabinet cleaning",
        "Bactericide application",
      ],
      image: "/logo.jpg",
    },
    {
      id: "repair",
      title: "Repair",
      description: "Fast and efficient repair of problems with your air conditioning.",
      features: [
        "Leak repair",
        "Electrical component repair",
        "Compressor repair",
        "Electronic board repair",
        "Motor repair",
        "Parts replacement",
      ],
      image: "/logo.jpg",
    },
    {
      id: "diagnostic",
      title: "Diagnostic",
      description: "Accurate identification of problems with your air conditioning.",
      features: [
        "Electrical problem diagnosis",
        "Mechanical problem diagnosis",
        "Leak diagnosis",
        "Efficiency diagnosis",
        "Noise diagnosis",
        "Capacity diagnosis",
      ],
      image: "/logo.jpg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen select-none">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="px-4 md:px-6 flex items-center justify-center text-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-700">
              Our Services
            </h1>
            <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl">
              We offer a wide range of services to meet all your air conditioning needs
            </p>
          </div>
        </div>
      </section>


      {/* Services Detail */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className=" px-4 md:px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid gap-6 lg:grid-cols-2 lg:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className="flex justify-center">
                  <Image
                    src={service.image || "/logo.jpg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col justify-center items-center space-y-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter text-sky-700">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 md:text-lg">{service.description}</p>
                  <ul className="space-y-2 mt-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-sky-600 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link href="/en/contato">
                      <Button className="bg-sky-600 hover:bg-sky-700 cursor-pointer">
                        Request Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-sky-700 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to improve your comfort?
              </h2>
              <p className="max-w-[900px] md:text-xl">
                Contact us today for a free quote
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/en/contato">
                <Button className="cursor-pointer" size="lg" variant="secondary">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
