import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
    
  ];

  const accordionData = [
    {
      title: 'Passionate Developer',
      content:
        'Saya adalah seorang Fullstack Web Developer dengan passion yang kuat dalam menciptakan solusi digital yang inovatif. Saya senang membangun aplikasi modern yang cepat, responsif, dan user-friendly.',
    },
    {
      title: 'Creative Content Creator',
      content:
        'Saya juga aktif sebagai Content Creator yang berbagi ilmu tentang coding, UI/UX, dan teknologi. Saya percaya belajar terbaik adalah dengan mengajar.',
    },
    
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-pink-200 via-blue-200 to-purple-200">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center mb-16"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-primary font-medium mb-2 block"
          >
            Tentang Saya
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-display text-3xl md:text-5xl font-bold mb-4"
          >
            Mengenal Lebih Dekat
          </motion.h2>

          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1 },
            }}
            transition={{ duration: 0.6 }}
            className="w-24 h-1 bg-primary mx-auto rounded-full origin-left"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <span className="text-8xl animate-pulse">👨‍💻</span>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card"
              >
                <p className="font-display font-bold text-2xl text-gradient">
                  5+
                </p>
                <p className="text-sm text-muted-foreground">Tahun</p>
              </motion.div>
            </div>
          </motion.div>

          {/* TEXT + ACCORDION */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Passionate Developer & Creator
            </h3>

            {/* ACCORDION */}
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <motion.div
                  key={index}
                  layout
                  className={`border rounded-xl overflow-hidden glass transition-all duration-300 ${
                    activeIndex === index
                      ? 'shadow-lg border-primary'
                      : 'hover:border-primary/50'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center p-4 text-left"
                  >
                    <span className="font-semibold">{item.title}</span>

                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="px-4 pb-4 text-muted-foreground"
                      >
                        <motion.p
                          initial={{ y: 10 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {item.content}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.08 }}
                  className="p-4 glass rounded-xl text-center hover:shadow-xl transition cursor-pointer"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}