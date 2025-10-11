import React, { useState } from "react";
import { MapPin, Phone, Mail, SendHorizontal, MessageCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [selectedBranch, setSelectedBranch] = useState(null);

  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative overflow-hidden">
      {/* 🌌 Dark Blue-Gray Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(30,47,57,0.4), transparent 70%)`,
        }}
      />

      {/* 📨 Contact Section */}
      <section id="contact" className="relative z-10 py-30">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white font-orbitron">
              Contact Us
            </h2>
            <p className="text-gray-300 mt-2 max-w-xl mx-auto">
              We’d love to hear from you. Reach out through our branches or send us a message below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              {/* Main Office */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-md text-gray-200">
                <CardHeader className="flex flex-row items-center gap-2">
                  <MapPin className="text-indigo-400 w-5 h-5" />
                  <CardTitle className="text-lg font-semibold">Main Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://maps.google.com/?q=KM+27+Aguinaldo+Highway+Salitran+1+Dasmariñas+City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    KM 27 Aguinaldo Highway, <br />
                    Salitran 1, <br /> Dasmariñas City
                  </a>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-md text-gray-200">
                <CardHeader className="flex flex-row items-center gap-2">
                  <Phone className="text-indigo-400 w-5 h-5" />
                  <CardTitle className="text-lg font-semibold">Phone Numbers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  <p><b>Marketing & Sales:</b> (046) 471-6868</p>
                  <p><b>Accounting:</b> (046) 471-6562</p>
                  <p><b>HRD:</b> (046) 471-4969</p>
                </CardContent>
              </Card>

              {/* Emails */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-md text-gray-200">
                <CardHeader className="flex flex-row items-center gap-2">
                  <Mail className="text-indigo-400 w-5 h-5" />
                  <CardTitle className="text-lg font-semibold">Emails</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  <p><b>Marketing & Sales:</b> gjaro29@yahoo.com</p>
                  <p><b>Operations:</b> gjaro29@yahoo.com</p>
                  <p><b>Accounting:</b> grjjaro529@gmail.com</p>
                  <p><b>HRD:</b> grjjaro529@gmail.com</p>
                </CardContent>
              </Card>
            </div>

            {/* RIGHT SIDE - Contact Form */}
           <Card className="shadow-md bg-white/5 border-white/10 backdrop-blur-md text-gray-200">
            <CardHeader className="mb-10 flex flex-col items-center justify-center space-y-3">
              <MessageCircle className="w-10 h-10 text-indigo-400" />
              <CardTitle className="text-2xl font-bold text-center font-orbitron">
                Send us a Message
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="bg-white/10 border-white/20 text-gray-100 placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-gray-100 placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message..."
                    rows={5}
                    className="bg-white/10 border-white/20 text-gray-100 placeholder:text-gray-400"
                  />
                </div>

                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-2">
                  Send Message
                  <SendHorizontal className="w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
