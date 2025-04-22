"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"
import { usePathname } from "next/navigation"
import { locales } from "@//components/locales" // Importe o arquivo de traduções

export function SiteFooter() {
  const pathname = usePathname() // Para pegar o caminho atual da URL

  // Verifica se o caminho da URL contém /en ou /br
  const isEnglish = pathname.includes("/en")
  const isPortuguese = pathname.includes("/br")

  // Usa a tradução com base no idioma atual
  const currentLocale = isEnglish ? locales.en : isPortuguese ? locales.pt : locales.pt

  // Ajusta os links para prefixar com /en ou /br
  const adjustedLinks = (href: string) => {
    if (isEnglish) {
      return `/en${href}`
    } else if (isPortuguese) {
      return `/br${href}`
    }
    return href
  }

  return (
    <footer className="w-full bg-gray-900 text-white select-none">
      <div className="container px-4 md:px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <div className="flex justify-center md:justify-start items-center mb-4">
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
                className="h-6 w-6 text-sky-400"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              <span className="ml-2 text-xl font-bold">Acioli Climatização</span>
            </div>
            <p className="text-gray-400 mb-4">{currentLocale.descricao}</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="https://www.instagram.com/acioliclimatizacao/" target="_blank" className="text-gray-400 hover:text-sky-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{currentLocale.servicos}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={adjustedLinks("/servicos#instalacao")} className="text-gray-400 hover:text-sky-400">
                  {currentLocale.instalacao}
                </Link>
              </li>
              <li>
                <Link href={adjustedLinks("/servicos#manutencao")} className="text-gray-400 hover:text-sky-400">
                  {currentLocale.manutencao}
                </Link>
              </li>
              <li>
                <Link href={adjustedLinks("/servicos#limpeza")} className="text-gray-400 hover:text-sky-400">
                  {currentLocale.limpeza}
                </Link>
              </li>
              <li>
                <Link href={adjustedLinks("/servicos#reparo")} className="text-gray-400 hover:text-sky-400">
                  {currentLocale.reparo}
                </Link>
              </li>
              <li>
                <Link href={adjustedLinks("/servicos#diagnostico")} className="text-gray-400 hover:text-sky-400">
                  {currentLocale.diagnostico}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{currentLocale.linksRapidos}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={adjustedLinks("/inicio")} className="text-gray-400 hover:text-sky-400">
                  {currentLocale.inicio}
                </Link>
              </li>
              <li>
                <Link href={adjustedLinks("/sobre")} className="text-gray-400 hover:text-sky-400">
                  {currentLocale.sobreNos}
                </Link>
              </li>
              <li>
                <Link href={adjustedLinks("/galeria")} className="text-gray-400 hover:text-sky-400">
                  {currentLocale.galeria}
                </Link>
              </li>
              <li>
                <Link href={adjustedLinks("/contato")} className="text-gray-400 hover:text-sky-400">
                  {currentLocale.contato}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{currentLocale.contato}</h3>
            <ul className="space-y-4">
              <li className="flex justify-center md:justify-start items-start">
                <Phone className="mr-2 h-5 w-5 text-sky-400 flex-shrink-0" />
                <span className="text-gray-400">(81) 99753-4160</span>
              </li>
              <li className="flex justify-center md:justify-start items-start">
                <Mail className="mr-2 h-5 w-5 text-sky-400 flex-shrink-0" />
                <span className="text-gray-400">jarbasf.acioli@gmail.com</span>
              </li>
              <li className="flex justify-center md:justify-start items-start">
                <MapPin className="mr-2 h-5 w-5 text-sky-400 flex-shrink-0" />
                <span className="text-gray-400">Rua Exemplo, 123 - Cidade, Estado</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Acioli Climatização. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
