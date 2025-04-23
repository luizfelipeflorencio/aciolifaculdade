"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Formulário enviado:", formData)
    // Aqui você pode adicionar a lógica para enviar o formulário
    // como um Server Action ou para um serviço externo
  }

  return (
    <div className="flex flex-col min-h-screen select-none">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-700">
            Entre em Contato
          </h1>
          <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl">
            Estamos prontos para atender suas necessidades de ar condicionado
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter text-sky-700 mb-4">
                  Informações de Contato
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  Entre em contato conosco por telefone, e-mail ou visite nosso escritório.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 text-left w-full">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="mr-4 h-6 w-6 text-sky-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Telefone</h3>
                      <p className="text-gray-500">(81) 99753-4160</p>
                      <p className="text-gray-500">(81) 98755-5202</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-4 h-6 w-6 text-sky-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">E-mail</h3>
                      <p className="text-gray-500">jarbasf.acioli@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="mr-4 h-6 w-6 text-sky-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Endereço</h3>
                      <p className="text-gray-500">Rua tuparetama 210 loja B</p>
                      {/* <p className="text-gray-500">Bairro, Cidade - Estado</p> */}
                      {/* <p className="text-gray-500">CEP: 00000-000</p> */}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sky-700 mb-4">Horário de Atendimento</h3>
                  <div className="space-y-2 bg-sky-50 p-6 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium">Segunda a Sexta</span>
                      <span className="text-gray-500">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sábado</span>
                      <span className="text-gray-500">08:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Domingo</span>
                      <span className="text-gray-500">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario De Serviço */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter text-sky-700 mb-4">Envie sua Mensagem</h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-sky-50 p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-sky-700">
                    Nome
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="border-sky-200 focus-visible:ring-sky-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sky-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-sky-200 focus-visible:ring-sky-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-sky-700">
                    Telefone
                  </Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="border-sky-200 focus-visible:ring-sky-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assunto" className="text-sky-700">
                    Assunto
                  </Label>
                  <Select
                    name="assunto"
                    value={formData.assunto}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, assunto: value }))}
                    required
                  >
                    <SelectTrigger className="border-sky-200 focus-visible:ring-sky-500 w-full cursor-pointer">
                      <SelectValue placeholder="Selecione o assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem className="cursor-pointer" value="Instalação">Instalação</SelectItem>
                      <SelectItem className="cursor-pointer" value="Manutenção">Manutenção</SelectItem>
                      <SelectItem className="cursor-pointer" value="Limpeza">Limpeza</SelectItem>
                      <SelectItem className="cursor-pointer" value="Reparo">Reparo</SelectItem>
                      <SelectItem className="cursor-pointer" value="Diagnóstico">Diagnóstico</SelectItem>
                      <SelectItem className="cursor-pointer" value="Outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-sky-700">
                  Mensagem
                </Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Informe mais detalhes sobre a sua socilitação de serviço..."
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] border-sky-200 focus-visible:ring-sky-500"
                />
              </div>
              <Button type="submit" className="w-full md:w-auto bg-sky-600 hover:bg-sky-700 text-white cursor-pointer">
                <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>

  )
}
