import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { TestimonialCard } from './TestimonialCard'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background: gradiente suave com tons da paleta elegante */}
      <div className="absolute inset-0 bg-gradient-to-r from-soft-blush via-pearl-white to-warm-beige/30"></div>
      
      {/* Elementos decorativos desfocados no lado direito */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-15 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-rose-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 w-64 h-64 bg-warm-beige/25 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-soft-blush/30 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-60 w-48 h-48 bg-rose-gold/15 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header alinhado à esquerda */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm text-foreground/70 mb-3 font-sans">Uma boa palavra vale muito</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-3">
            <span className="text-foreground">Depoimentos de</span>{' '}
            <span className="text-rose-gold">clientes</span>
          </h2>
          {/* Linha horizontal curta embaixo de "Depoimentos de" */}
          <div className="w-16 h-0.5 bg-foreground mb-4"></div>
          <p className="text-base text-foreground/80 font-sans leading-relaxed">
            Sempre é o boca a boca que traz o melhor conselho. Aqui estão alguns depoimentos dos nossos clientes.
          </p>
        </div>

        {/* Carrossel de depoimentos */}
        <div className="max-w-7xl mx-auto mb-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/80 hover:bg-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>

        {/* Botão CTA centralizado */}
        <div className="text-center">
          <Button 
            size="lg" 
            asChild
            className="bg-charcoal hover:bg-charcoal/90 text-white px-8 py-6 rounded-lg font-sans uppercase tracking-wide"
          >
            <Link to="/depoimentos">
              VER TODOS OS DEPOIMENTOS
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

