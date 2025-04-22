"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "./language-swither"
import { locales } from "@/components/locales" // Importe o arquivo de traduções

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // Para pegar o caminho atual da URL

  // Verifica se o caminho da URL contém /en ou /br
  const isEnglish = pathname.includes("/en")
  const isPortuguese = pathname.includes("/br")

  // Usa a tradução com base no idioma atual
  const currentLocale = isEnglish ? locales.en : isPortuguese ? locales.pt : locales.pt

  const navigation = [
    { name: currentLocale.inicio, href: "/inicio" },
    { name: currentLocale.servicos, href: "/servicos" },
    { name: currentLocale.galeria, href: "/galeria" },
    { name: currentLocale.sobre, href: "/sobre" },
    { name: currentLocale.contato, href: "/contato" },
  ]

  // Ajusta os links de navegação para prefixar com /en ou /br
  const adjustedNavigation = navigation.map((item) => ({
    ...item,
    href: isEnglish ? `/en${item.href}` : isPortuguese ? `/br${item.href}` : item.href,
  }))

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white h-16 select-none">
      {/* Navegação centralizada (fora do container) */}
      <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-6 items-center z-20">
        {adjustedNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-sky-600"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Container com logo e menu mobile */}
      <div className="container relative flex items-center justify-between h-full px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center z-10">
          <Link href={`/${isEnglish ? "en" : "br"}/inicio`} className="flex items-center">
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
              className="h-6 w-6 text-sky-600"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
            <span className="ml-2 text-xl font-bold text-sky-700">Acioli Climatização</span>
          </Link>
        </div>

        {/* Seletor de Idiomas */}
        <div className="absolute right-20 md:right-24 z-10 hidden sm:block">
          <LanguageSwitcher />
        </div>

        {/* Menu Mobile */}
        <div className="flex justify-end items-center z-10">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {adjustedNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-600 transition-colors hover:text-sky-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{currentLocale.idioma}:</span>
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
