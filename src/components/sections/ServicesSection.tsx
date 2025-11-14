import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { services } from '@/data/services'
import { useState } from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import type { Service } from '@/data/services'

interface ServiceCarouselCardProps {
  service: Service
}

function ServiceCarouselCard({ service }: ServiceCarouselCardProps) {
  return (
    <div className="h-full bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
      {/* Imagem */}
      <div className="relative w-full">
        <AspectRatio ratio={4 / 3}>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </div>
      
      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Título com linha embaixo */}
        <div className="mb-4">
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
            {service.title}
          </h3>
          <div className="w-12 h-0.5 bg-foreground"></div>
        </div>
        
        {/* Descrição breve */}
        <p className="text-sm text-foreground/80 leading-relaxed mb-6 flex-grow">
          {service.shortDescription}
        </p>
        
        {/* Botão */}
        <Button
          asChild
          variant="outline"
          className="w-full border-rose-gold text-foreground hover:bg-rose-gold/10"
        >
          <Link to={`/servicos/${service.id}`}>
            SABER MAIS
          </Link>
        </Button>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-3">
            <span className="text-foreground">Descubra um</span>{' '}
            <span className="text-rose-gold">novo você</span>
          </h2>
          {/* Linha horizontal curta embaixo de "Descubra um" */}
          <div className="w-16 h-0.5 bg-foreground mb-4"></div>
          <p className="text-base text-foreground/80 font-sans leading-relaxed max-w-2xl">
            Quando se trata de escolher uma clínica estética, não confie seu corpo a qualquer pessoa. Escolha qualquer um de nossos serviços de procedimentos estéticos e reconstrutivos.
          </p>
        </div>

        {/* Grid: Lista à esquerda e Carrossel à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Lado esquerdo: Lista de serviços */}
          <div className="lg:col-span-1">
            <div className="bg-soft-blush rounded-lg p-6 h-full">
              <h3 className="text-lg font-heading font-semibold text-rose-gold mb-6">
                Todos os serviços
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <button
                      onClick={() => setSelectedService(service)}
                      className={`text-left text-sm font-sans transition-colors w-full ${
                        selectedService?.id === service.id
                          ? 'text-foreground font-semibold'
                          : 'text-foreground hover:text-foreground'
                      }`}
                    >
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Lado direito: Carrossel de serviços */}
          <div className="lg:col-span-3">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {services.map((service) => (
                  <CarouselItem key={service.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <ServiceCarouselCard service={service} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-white/80 hover:bg-white" />
              <CarouselNext className="hidden md:flex -right-12 bg-white/80 hover:bg-white" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

