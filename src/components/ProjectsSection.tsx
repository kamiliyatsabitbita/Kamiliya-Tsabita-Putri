import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// IMPORT GAMBAR
import foto1 from '@/assets/foto.png';
import foto2 from '@/assets/foto2.png';
import foto3 from '@/assets/foto3.png';
import foto4 from '@/assets/foto4.png';
import foto5 from '@/assets/foto5.png';
import foto6 from '@/assets/foto6.png';

// TYPE (BIAR TIDAK MERAH)
type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  github?: string;
  demo?: string;
};

// DATA PROJECT
const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: foto1,
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Learning Management System',
    description:
      'Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC'],
    image: foto2,
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'Dashboard analytics untuk social media dengan real-time data visualization dan reporting.',
    tags: ['React', 'D3.js', 'Firebase', 'Tailwind'],
    image: foto3,
    color: 'from-orange-500/20 to-red-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Content Generator',
    description:
      'Tool untuk generate konten menggunakan AI dengan integrasi berbagai model language.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    image: foto4,
    color: 'from-green-500/20 to-teal-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Video Editing Tutorial',
    description:
      'Seri tutorial video editing dengan 100+ episode dan 10k+ subscribers.',
    tags: ['Premiere Pro', 'After Effects', 'YouTube'],
    image: foto5,
    color: 'from-red-500/20 to-orange-500/20',
    github: '#',
    demo: '#',
  },
  {
    title:'Coding Tips & Tricks',
    description:
      'Konten tips programming dan best practices untuk developer Indonesia.',
    tags: ['Instagram', 'TikTok', 'YouTube Shorts'],
    image: foto6,
    color: 'from-cyan-500/20 to-blue-500/20',
    github: '#',
    demo: '#',
  },
];

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-pink-200 via-blue-200 to-purple-200">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-medium mb-2 block">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Projects & Karya
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative max-w-7xl mx-auto">

          {/* NAV BUTTON */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md p-2 rounded-full"
          >
            <ChevronRight />
          </button>

          {/* VIEWPORT */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">

              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="min-w-[85%] sm:min-w-[45%] lg:min-w-[30%]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
                  >

                    {/* GAMBAR */}
                    <div className={`aspect-video rounded-xl mb-4 overflow-hidden bg-gradient-to-br ${project.color}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="space-y-3">
                      <h3 className="font-display text-lg font-bold">
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>

                      {/* TAGS */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* BUTTON */}
                      <div className="flex gap-2 pt-2">
                        {project.github && (
                          <Button variant="outline" size="sm" className="rounded-full" asChild>
                            <a href={project.github}>
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}

                        {project.demo && (
                          <Button size="sm" className="rounded-full" asChild>
                            <a href={project.demo}>
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                  </motion.div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}