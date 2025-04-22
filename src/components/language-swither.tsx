"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Language = {
  code: string
  name: string
  flag: React.ReactNode
}

export function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState<string>("pt-BR")
  const router = useRouter()  // Usando o roteador para navegação
  const pathname = usePathname()  // Obtendo o caminho atual da URL

  // Verifica o idioma da URL ao carregar o componente
  useEffect(() => {
    if (pathname.includes("/en")) {
      setCurrentLanguage("en-US")
    } else if (pathname.includes("/br")) {
      setCurrentLanguage("pt-BR")
    }
  }, [pathname])

  const languages: Language[] = [ 
    {
      code: "pt-BR",
      name: "Português",
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5">
          <path fill="#6DA544" d="M0 256c0 141.384 114.616 256 256 256s256-114.616 256-256L256 0L0 256z" />
          <path fill="#FFDA44" d="M256 0v512c141.384 0 256-114.616 256-256S397.384 0 256 0z" />
          <path fill="#F0F0F0" d="M256 100.174L467.478 256 256 411.826 44.522 256z" />
          <circle fill="#0052B4" cx="256" cy="256" r="89.043" />
          <path
            fill="#F0F0F0"
            d="M211.478 250.435c-15.484 0-30.427 2.355-44.493 6.725.623 48.64 40.227 87.884 89.015 87.884 30.168 0 56.812-15.017 72.919-37.968-27.557-34.497-69.958-56.641-117.441-56.641z"
          />
        </svg>
      ),
    },
    {
      code: "en-US",
      name: "English",
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5">
          <path
            fill="#F0F0F0"
            d="M0 256c0 141.384 114.616 256 256 256s256-114.616 256-256S397.384 0 256 0 0 114.616 0 256z"
          />
          <path
            fill="#0052B4"
            d="M52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178L52.92 100.142zM503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076h133.176zM8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075H8.819zM411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177l89.076-89.075zM100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102V370.005l-89.076 89.074zM189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075V8.819zM322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075v133.176zM370.005 322.784l89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076H370.005z"
          />
          <path
            fill="#D80027"
            d="M509.833 222.609H289.392V2.167A258.556 258.556 0 0 0 256 0c-11.319 0-22.461.744-33.391 2.167v220.441H2.167A258.556 258.556 0 0 0 0 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0 0 66.783 0V289.392h220.442A258.533 258.533 0 0 0 512 256c0-11.317-.744-22.461-2.167-33.391z"
          />
          <path
            fill="#D80027"
            d="M322.783 322.784L437.019 437.02a256.636 256.636 0 0 0 15.048-16.435l-97.802-97.802h-31.482v.001zM189.217 322.784h-.002L74.98 437.019a256.636 256.636 0 0 0 16.435 15.048l97.802-97.804v-31.479zM189.217 189.219v-.002L74.981 74.98a256.636 256.636 0 0 0-15.048 16.435l97.803 97.803h31.481zM322.783 189.219L437.02 74.981a256.328 256.328 0 0 0-16.435-15.047l-97.802 97.803v31.482z"
          />
        </svg>
      ),
    },
  ]

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode)

    // Navega para a página correta dependendo do idioma
    if (langCode === "en-US" && !pathname.includes("/en")) {
      router.push("/en/inicio")  // Redireciona para a página em inglês
    } else if (langCode === "pt-BR" && !pathname.includes("/br")) {
      router.push("/br/inicio")  // Redireciona para a página em português
    }

    console.log(`Idioma alterado para: ${langCode}`)
  }

  const currentLang = languages.find((lang) => lang.code === currentLanguage)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          {currentLang?.flag}
          <span className="sr-only">Mudar idioma</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="flex items-center gap-2 cursor-pointer"
          >
            {language.flag}
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
