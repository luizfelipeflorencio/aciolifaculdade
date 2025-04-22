"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  const photos = [
    { id: 1, src: "/logo.jpg", alt: "Split air conditioning installation" },
    { id: 2, src: "/logo.jpg", alt: "Air conditioning maintenance" },
    { id: 3, src: "/logo.jpg", alt: "Air conditioning cleaning" },
    { id: 4, src: "/logo.jpg", alt: "Air conditioning repair" },
    { id: 5, src: "/logo.jpg", alt: "Commercial installation" },
    { id: 6, src: "/logo.jpg", alt: "Preventive maintenance" },
    { id: 7, src: "/logo.jpg", alt: "Residential installation" },
    { id: 8, src: "/logo.jpg", alt: "Problem diagnosis" },
  ]

  const videos = [
    { id: 1, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "How air conditioning installation works" },
    { id: 2, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Air conditioning maintenance tips" },
    { id: 3, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "How to clean your air conditioning" },
    { id: 4, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Common air conditioning problems" },
  ]

  return (
    <div className="flex flex-col min-h-screen select-none">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-700">Gallery</h1>
          <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl">
            Check out photos and videos of our air conditioning installation and maintenance services
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className=" px-4 md:px-6">
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger
                value="photos"
                className="cursor-pointer data-[state=active]:cursor-default"
              >
                Photos
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="cursor-pointer data-[state=active]:cursor-default"
              >
                Videos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="photos">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo) => (
                  <Card key={photo.id} className="overflow-hidden cursor-pointer" onClick={() => setSelectedImage(photo)}>
                    <CardContent className="p-0">
                      <Image
                        src={photo.src || "/logo.jpg"}
                        alt={photo.alt}
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
