"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  const fotos = [
    { id: 1, src: "/logo.jpg", alt: "Instalação de ar condicionado split" },
    { id: 2, src: "/logo.jpg", alt: "Manutenção de ar condicionado" },
    { id: 3, src: "/logo.jpg", alt: "Limpeza de ar condicionado" },
    { id: 4, src: "/logo.jpg", alt: "Reparo de ar condicionado" },
    { id: 5, src: "/logo.jpg", alt: "Instalação comercial" },
    { id: 6, src: "/logo.jpg", alt: "Manutenção preventiva" },
    { id: 7, src: "/logo.jpg", alt: "Instalação residencial" },
    { id: 8, src: "/logo.jpg", alt: "Diagnóstico de problemas" },
  ]

  const videos = [
    { id: 1, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Como funciona a instalação de ar condicionado" },
    { id: 2, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Dicas de manutenção de ar condicionado" },
    { id: 3, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Como limpar seu ar condicionado" },
    { id: 4, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Problemas comuns em ar condicionado" },
  ]

  return (
    <div className="flex flex-col min-h-screen select-none">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-700">Galeria</h1>
          <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl">
            Confira fotos e vídeos dos nossos serviços de instalação e manutenção de ar condicionado
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className=" px-4 md:px-6">
          <Tabs defaultValue="fotos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger
                value="fotos"
                className="cursor-pointer data-[state=active]:cursor-default"
              >
                Fotos
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="cursor-pointer data-[state=active]:cursor-default"
              >
                Vídeos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="fotos">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {fotos.map((foto) => (
                  <Card key={foto.id} className="overflow-hidden cursor-pointer" onClick={() => setSelectedImage(foto)}>
                    <CardContent className="p-0">
                      <Image
                        src={foto.src || "/logo.jpg"}
                        alt={foto.alt}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-300"
                        draggable="false"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos.map((video) => (
                  <Card key={video.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video">
                        <iframe
                          src={video.src}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{video.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
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
                className="h-6 w-6"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage.src || "/logo.jpg"}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <p className="text-white text-center mt-2">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}
