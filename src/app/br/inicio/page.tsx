import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen select-none">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center justify-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-sky-700">
                  Instalação e Manutenção de Ar Condicionado
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl mx-auto lg:mx-0">
                  Serviços profissionais de instalação, manutenção e reparo de ar condicionado para residências e empresas.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link href="/br/contato">
                  <Button size="lg" className="bg-sky-600 hover:bg-sky-700 cursor-pointer">
                    Solicitar Orçamento
                  </Button>
                </Link>
                <Link href="/br/servicos">
                  <Button size="lg" variant="outline" className="border-sky-600 text-sky-600 cursor-pointer">
                    Nossos Serviços
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/logo.jpg"
                alt="Técnico instalando ar condicionado"
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


      {/* Services Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-700">
                Nossos Serviços
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl">
                Oferecemos soluções completas para seu sistema de ar condicionado
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
              <h3 className="text-xl font-bold text-sky-700">Instalação</h3>
              <p className="text-gray-500 text-center">
                Instalação profissional de ar condicionado residencial e comercial de todas as marcas.
              </p>
              <div className="mt-auto">
                <Link
                  href="/br/servicos#instalacao"
                  className="text-sky-600 hover:underline inline-flex items-center"
                >
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
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
              <h3 className="text-xl font-bold text-sky-700">Manutenção</h3>
              <p className="text-gray-500 text-center">
                Manutenção preventiva e corretiva para garantir o funcionamento eficiente do seu equipamento.
              </p>
              <div className="mt-auto">
                <Link
                  href="/br/servicos#manutencao"
                  className="text-sky-600 hover:underline inline-flex items-center"
                >
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
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
              <h3 className="text-xl font-bold text-sky-700">Diagnóstico</h3>
              <p className="text-gray-500 text-center">
                Identificação precisa de problemas e soluções para seu sistema de ar condicionado.
              </p>
              <div className="mt-auto">
                <Link
                  href="/br/servicos#diagnostico"
                  className="text-sky-600 hover:underline inline-flex items-center"
                >
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Brands Section */}
      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-700">
                Marcas Credenciadas
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl">
                Somos técnicos autorizados e credenciados pelas principais marcas do mercado
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center mt-12">
            {["GREE", "Midea", "Hitachi", "TCL", "Samsung", "LG"].map((brand) => (
              <div key={brand} className="flex flex-col items-center justify-center p-4">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-lg font-bold text-sky-700">{brand}</span>
                </div>
                <span className="mt-2 text-sm text-gray-500">Autorizado</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center justify-center">
            <div className="flex justify-center">
              <Image
                src="/logo.jpg"
                alt="Técnico trabalhando em ar condicionado"
                width={550}
                height={550}
                className="rounded-lg object-cover"
                draggable="false"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-700">
                  Por que nos escolher?
                </h2>
                <p className="text-gray-500 md:text-xl">
                  Oferecemos serviços de qualidade com profissionais experientes e certificados
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Técnicos certificados e experientes",
                  "Atendimento rápido e eficiente",
                  "Garantia em todos os serviços",
                  "Peças originais de fábrica",
                  "Preços competitivos",
                  "Suporte pós-venda",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="mr-2 h-6 w-6 text-sky-600 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4 justify-center">
                <Link href="/br/contato">
                  <Button size="lg" className="bg-sky-600 hover:bg-sky-700 cursor-pointer">
                    Entre em Contato
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-sky-700 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Precisa de serviços de ar condicionado?
              </h2>
              <p className="max-w-[900px] md:text-xl">
                Entre em contato hoje mesmo para um orçamento gratuito
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/br/contato">
                <Button className="cursor-pointer" size="lg" variant="secondary">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
