import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicosPage() {
  const servicos = [
    {
      id: "instalacao",
      title: "Instalação",
      description: "Instalação profissional de ar condicionado para residências e empresas.",
      features: [
        "Instalação de ar condicionado split",
        "Instalação de ar condicionado janela",
        "Instalação de ar condicionado cassete",
        "Instalação de ar condicionado piso-teto",
        "Instalação de ar condicionado multi-split",
        "Instalação de ar condicionado VRF/VRV",
      ],
      image: "/logo.jpg",
    },
    {
      id: "manutencao",
      title: "Manutenção",
      description: "Manutenção preventiva e corretiva para garantir o funcionamento eficiente do seu equipamento.",
      features: [
        "Limpeza de filtros",
        "Verificação de gás refrigerante",
        "Limpeza de serpentinas",
        "Verificação de componentes elétricos",
        "Verificação de drenagem",
        "Verificação de ruídos e vibrações",
      ],
      image: "/logo.jpg",
    },
    {
      id: "limpeza",
      title: "Limpeza",
      description:
        "Limpeza completa do seu ar condicionado para melhorar a qualidade do ar e a eficiência do equipamento.",
      features: [
        "Limpeza de filtros",
        "Limpeza de serpentinas",
        "Limpeza de turbinas",
        "Limpeza de bandejpgas",
        "Limpeza de gabinetes",
        "Aplicação de bactericida",
      ],
      image: "/logo.jpg",
    },
    {
      id: "reparo",
      title: "Reparo",
      description: "Reparo de problemas em seu ar condicionado com rapidez e eficiência.",
      features: [
        "Reparo de vazamentos",
        "Reparo de componentes elétricos",
        "Reparo de compressores",
        "Reparo de placas eletrônicas",
        "Reparo de motores",
        "Substituição de peças",
      ],
      image: "/logo.jpg",
    },
    {
      id: "diagnostico",
      title: "Diagnóstico",
      description: "Identificação precisa de problemas em seu ar condicionado.",
      features: [
        "Diagnóstico de problemas elétricos",
        "Diagnóstico de problemas mecânicos",
        "Diagnóstico de vazamentos",
        "Diagnóstico de eficiência",
        "Diagnóstico de ruídos",
        "Diagnóstico de capacidade",
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
              Nossos Serviços
            </h1>
            <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl">
              Oferecemos uma ampla gama de serviços para atender todas as suas necessidades de ar condicionado
            </p>
          </div>
        </div>
      </section>


      {/* Services Detail */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className=" px-4 md:px-6">
          <div className="space-y-24">
            {servicos.map((servico, index) => (
              <div
                key={servico.id}
                id={servico.id}
                className={`grid gap-6 lg:grid-cols-2 lg:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className="flex justify-center">
                  <Image
                    src={servico.image || "/logo.jpg"}
                    alt={servico.title}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col justify-center items-center space-y-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter text-sky-700">
                    {servico.title}
                  </h2>
                  <p className="text-gray-500 md:text-lg">{servico.description}</p>
                  <ul className="space-y-2 mt-4">
                    {servico.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-sky-600 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link href="/br/contato">
                      <Button className="bg-sky-600 hover:bg-sky-700 cursor-pointer">
                        Solicitar Orçamento
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
                Pronto para melhorar o seu conforto?
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
