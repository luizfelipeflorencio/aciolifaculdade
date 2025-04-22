import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function SobrePage() {
  const marcas = [
    { nome: "GREE", logo: "/gree.png" },
    { nome: "Midea", logo: "/midea.png" },
    { nome: "Hitachi", logo: "/hitachi.png" },
    { nome: "TCL", logo: "/tcl.png" },
    { nome: "Samsung", logo: "/samsung.png" },
    { nome: "LG", logo: "/lg.png" },
  ]

  return (
    <div className="flex flex-col min-h-screen select-none">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-700">Sobre Nós</h1>
          <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl">
            Conheça nossa história e nosso compromisso com a qualidade
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
                alt="Nossa equipe"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-sky-700">Nossa História</h2>
              <p className="text-gray-500 md:text-lg">
                Com mais de 10 anos de experiência no mercado, somos especializados em instalação e manutenção de ar
                condicionado para residências e empresas. Nossa equipe é formada por profissionais altamente
                qualificados e certificados, comprometidos em oferecer o melhor serviço aos nossos clientes.
              </p>
              <p className="text-gray-500 md:text-lg">
                Trabalhamos com as principais marcas do mercado e estamos sempre atualizados com as últimas tecnologias
                e técnicas para garantir a eficiência e durabilidade dos equipamentos.
              </p>
              <h3 className="text-xl font-bold text-sky-700 mt-4">Nossa Missão</h3>
              <p className="text-gray-500 md:text-lg">
                Proporcionar conforto térmico com qualidade, eficiência e responsabilidade, superando as expectativas
                dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-sky-700">Nossas Credenciais</h2>
            <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-lg">
              Somos técnicos autorizados e credenciados pelas principais marcas do mercado
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {marcas.map((marca) => (
              <div
                key={marca.nome}
                className="flex flex-col items-center justify-between bg-white p-6 rounded-lg shadow-sm min-h-[220px] text-center"
              >
                <div className="flex items-center justify-center h-[100px]">
                  <Image
                    src={marca.logo || "/logo.jpg"}
                    alt={`Logo ${marca.nome}`}
                    width={100}
                    height={100}
                    className="object-contain"
                    draggable="false"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-sky-700">{marca.nome}</h3>
                  <p className="text-sm text-gray-500">Autorizado</p>
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
            <h2 className="text-3xl font-bold tracking-tighter text-sky-700">Por que nos escolher?</h2>
            <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-lg">
              Oferecemos serviços de qualidade com profissionais experientes e certificados
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
              <h3 className="text-xl font-bold text-sky-700 mb-2">Garantia de Serviço</h3>
              <p className="text-gray-500">
                Todos os nossos serviços possuem garantia, proporcionando tranquilidade e segurança aos nossos clientes.
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
              <h3 className="text-xl font-bold text-sky-700 mb-2">Profissionais Certificados</h3>
              <p className="text-gray-500">
                Nossa equipe é formada por profissionais certificados e com ampla experiência no mercado.
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
              <h3 className="text-xl font-bold text-sky-700 mb-2">Peças Originais</h3>
              <p className="text-gray-500">
                Utilizamos apenas peças originais de fábrica, garantindo a qualidade e durabilidade dos equipamentos.
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
              <h3 className="text-xl font-bold text-sky-700 mb-2">Atendimento Rápido</h3>
              <p className="text-gray-500">
                Oferecemos atendimento rápido e eficiente, respeitando o tempo dos nossos clientes.
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
              <h3 className="text-xl font-bold text-sky-700 mb-2">Compromisso com o Cliente</h3>
              <p className="text-gray-500">
                Nosso compromisso é com a satisfação do cliente, oferecendo soluções personalizadas e de qualidade.
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
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-700 mb-2">Suporte Técnico</h3>
              <p className="text-gray-500">Oferecemos suporte técnico contínuo, mesmo após a conclusão do serviço.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-sky-700 text-white">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Clique no botão abaixo e solicite seu orçamento
              </h2>
              <p className="max-w-[900px] md:text-xl">Entre em contato hoje mesmo para um orçamento gratuito</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
