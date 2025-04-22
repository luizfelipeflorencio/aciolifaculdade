"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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
    console.log("Form submitted:", formData)
    // Here you can add the logic to send the form data
    // either to a Server Action or to an external service
  }

  return (
    <div className="flex flex-col min-h-screen select-none">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-700">
            Contact Us
          </h1>
          <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl">
            We are ready to assist with your air conditioning needs
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
                  Contact Information
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  Reach out to us by phone, email, or visit our office.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 text-left w-full">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="mr-4 h-6 w-6 text-sky-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-500">(81) 99753-4160</p>
                      <p className="text-gray-500">(81) 98755-5202</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-4 h-6 w-6 text-sky-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-500">jarbasf.acioli@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="mr-4 h-6 w-6 text-sky-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-gray-500">Rua Exemplo, 123</p>
                      <p className="text-gray-500">Bairro, City - State</p>
                      <p className="text-gray-500">ZIP: 00000-000</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sky-700 mb-4">Business Hours</h3>
                  <div className="space-y-2 bg-sky-50 p-6 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday to Friday</span>
                      <span className="text-gray-500">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday</span>
                      <span className="text-gray-500">08:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Form */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter text-sky-700 mb-4">Send Your Message</h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-sky-50 p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sky-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
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
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-sky-200 focus-visible:ring-sky-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sky-700">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-sky-200 focus-visible:ring-sky-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sky-700">
                    Subject
                  </Label>
                  <Select
                    name="subject"
                    value={formData.subject}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, subject: value }))}
                    required
                  >
                    <SelectTrigger className="border-sky-200 focus-visible:ring-sky-500 w-full cursor-pointer">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem className="cursor-pointer" value="Installation">Installation</SelectItem>
                      <SelectItem className="cursor-pointer" value="Maintenance">Maintenance</SelectItem>
                      <SelectItem className="cursor-pointer" value="Cleaning">Cleaning</SelectItem>
                      <SelectItem className="cursor-pointer" value="Repair">Repair</SelectItem>
                      <SelectItem className="cursor-pointer" value="Diagnosis">Diagnosis</SelectItem>
                      <SelectItem className="cursor-pointer" value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sky-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Provide more details about your service request..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] border-sky-200 focus-visible:ring-sky-500"
                />
              </div>
              <Button type="submit" className="w-full md:w-auto bg-sky-600 hover:bg-sky-700 text-white cursor-pointer">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
