import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden py-20 bg-gradient-to-b from-pink-200 via-blue-200 to-purple-200">

      {/* 🔥 BACKGROUND GRADIENT UTAMA */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-blue-200/40 to-purple-200/40" />
      {/* 🔥 GLOW BACKGROUND (BLOB) */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-300 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-300 rounded-full blur-3xl opacity-40" />

      <div className="relative container mx-auto px-4 py-16">

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">,

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >

            {/* 🔥 GLOW DI BELAKANG FOTO */}
            <div className="absolute inset-0 rounded-full bg-cyan-300 blur-2xl opacity-40 scale-110" />

            {/* FOTO */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_50px_#22d3ee]">
              <img
                src="/foto.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

          </motion.div>

          {/* TEKS */}
          <div className="max-w-xl text-center md:text-left">

            <motion.span 
              className="inline-block px-4 py-2 rounded-full backdrop-blur-md bg-white/40 text-sm font-medium text-primary mb-6 shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              👋 Selamat datang di portfolio saya
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight"
            >
              <span className="block mt-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Hello I'm Tsabita 
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 mt-6"
            >
              Saya membangun aplikasi web yang indah dan fungsional, 
              serta membagikan pengetahuan melalui konten yang inspiratif.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4 mb-12"
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 shadow-lg"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Lihat Projects
              </Button>

              <Button 
                size="lg" 
                className="rounded-full px-8 shadow-lg"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center md:justify-start justify-center gap-6"
            >
              {[
                { icon: Github, href: "https://github.com/kamiliyatsabitbita", label: 'GitHub' },
                { icon: Linkedin, href: "#", label: 'LinkedIn' },
                { icon: Youtube, href: "#", label: 'YouTube' },
                { icon: Instagram, href: "#", label: 'Instagram' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full backdrop-blur-md bg-white/40 hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* SCROLL BUTTON */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full backdrop-blur-md bg-white/40 animate-bounce cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </div>
  )
}