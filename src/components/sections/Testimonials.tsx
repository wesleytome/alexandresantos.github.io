import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { testimonials } from '@/data/testimonials'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section 
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-amber-50"
    >
      {/* Elemento decorativo sutil no canto inferior direito */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <div className="text-9xl text-foreground/10">D</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header alinhado à esquerda */}
          <div className="max-w-3xl mb-12">
            <p className="text-sm text-foreground/70 mb-3">Uma boa palavra vale muito</p>
            <h2 className="section-heading mb-3">
              <span className="section-heading-primary">Depoimentos de</span>{' '}
              <span className="section-heading-accent">clientes</span>
            </h2>
            {/* Linha horizontal curta embaixo de "Depoimentos de" */}
            <div className="section-heading-divider"></div>
            <p className="text-base text-foreground/80 leading-relaxed">
              Sempre é o boca a boca que traz o melhor conselho. Aqui estão alguns depoimentos dos nossos clientes.
            </p>
          </div>

          {/* Carrossel com um depoimento por vez */}
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: 'center',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="basis-full">
                    <div className="flex flex-col items-center text-center px-8 md:px-16 py-12">
                      {/* Foto opcional do depoente */}
                      {testimonial.avatar && (
                        <div className="mb-4">
                          <Avatar className="h-24 w-24 border-2 border-sage-green/20">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback className="bg-natural-beige text-foreground text-xl">
                              {testimonial.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')
                                .toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      )}

                      {/* Nome logo abaixo da foto */}
                          <p className="text-sm md:text-base text-foreground/60 italic mb-8">
                        - {testimonial.name} -
                      </p>

                      {/* Citação em itálico */}
                          <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground/80 italic leading-relaxed max-w-3xl px-4">
                        "{testimonial.text}"
                      </blockquote>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Setas de navegação */}
              <CarouselPrevious className="left-0 md:-left-16 bg-transparent border-0 hover:bg-transparent shadow-none">
                <ChevronLeft className="h-8 w-8 text-foreground/80 hover:text-foreground" />
                <span className="sr-only">Depoimento anterior</span>
              </CarouselPrevious>
              <CarouselNext className="right-0 md:-right-16 bg-transparent border-0 hover:bg-transparent shadow-none">
                <ChevronRight className="h-8 w-8 text-foreground/80 hover:text-foreground" />
                <span className="sr-only">Próximo depoimento</span>
              </CarouselNext>
            </Carousel>

            {/* Pontos de paginação */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === current
                      ? 'bg-foreground w-8'
                      : 'bg-foreground/20 hover:bg-foreground/40'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Botão CTA centralizado */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              asChild
              variant="outline"
              className="border-foreground/20 hover:bg-foreground/5 text-foreground"
            >
              <Link to="/depoimentos">
                Ver Todos os Depoimentos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

