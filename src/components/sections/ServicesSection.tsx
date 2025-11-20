import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { services } from '@/data/services'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import type { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <>
      <style>{`
        .service-card-wrapper:hover .service-card-title,
        .service-card-wrapper:hover .service-card-description {
          color: #FAFAFA !important;
        }
      `}</style>
      <div className="service-card-wrapper card-hover group h-full rounded-lg overflow-hidden flex flex-col">
        {/* Imagem com badge sobreposta */}
        <div className="relative w-full overflow-hidden">
          <AspectRatio ratio={4 / 3}>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </AspectRatio>
          {/* Badge sobre a imagem */}
          <div className="absolute top-4 right-4 z-10">
            <Badge
              className={service.category === 'odontologia' ? 'badge-odontologia' : 'badge-hof'}
            >
              {service.category === 'odontologia' ? 'Odontologia' : 'Estética Facial'}
            </Badge>
          </div>
        </div>
        
        {/* Conteúdo */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Título */}
          <h3 
            className="service-card-title card-text text-subtitle font-body mb-3" 
          >
            {service.title}
          </h3>
          
          {/* Descrição breve */}
          <p 
            className="service-card-description card-text text-sm leading-relaxed mb-6 flex-grow" 
          >
            {service.shortDescription}
          </p>
        
        {/* Botão com ícone */}
        <Button
          asChild
          className="w-full btn-primary border-0 group/btn"
        >
          <Link to={
            service.category === 'odontologia'
              ? `/odontologia/${service.id}`
              : `/estetica-facial/${service.id}`
          }>
            Saiba Mais
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
    </>
  )
}

function ServiceCategoryBlock({ 
  category, 
  services, 
  categoryName 
}: { 
  category: 'odontologia' | 'estetica'
  services: Service[]
  categoryName: string
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToService = (serviceId: string) => {
    const cardElement = document.getElementById(`service-${serviceId}`)
    if (cardElement && scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardLeft = cardElement.offsetLeft
      const cardWidth = cardElement.offsetWidth
      const containerWidth = container.offsetWidth
      const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2)
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 mt-12">
      {/* Lista vertical à esquerda */}
      <div className="bg-dark p-6 rounded-lg">
        <h3 className="text-xl font-bold text-brand mb-6">{categoryName}</h3>
        <ul className="space-y-3 mb-6">
          {services.map((service) => (
            <li key={service.id}>
              <button
                onClick={() => scrollToService(service.id)}
                className="text-left w-full text-light hover:text-brand transition-colors text-sm"
              >
                {service.title}
              </button>
            </li>
          ))}
        </ul>
        <Button 
          asChild 
          className="w-full btn-primary border-0"
        >
          <Link to={category === 'odontologia' ? '/odontologia' : '/estetica-facial'}>
            Ver todos os serviços
          </Link>
        </Button>
      </div>

      {/* Cards horizontais à direita */}
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto pb-4 scrollbar-hide"
      >
        <div className="flex gap-6" style={{ width: 'max-content' }}>
          {services.map((service) => (
            <div 
              key={service.id} 
              id={`service-${service.id}`}
              className="flex-shrink-0" 
              style={{ width: '320px' }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const odontologiaServices = services.filter(s => s.category === 'odontologia')
  const esteticaServices = services.filter(s => s.category === 'estetica')

  return (
    <section 
      className="py-24 bg-gradient-muted-to-light"
      // Estado anterior: bg-section-muted (para reverter se necessário)
    >
      <div className="container mx-auto px-4 md:px-20">
        {/* Header - Alinhado à esquerda */}
        <div className="section-header">
          <p className="section-label">
            Nossos serviços
          </p>
          <h2 className="section-title">
            Descubra um novo você
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Quando se trata de escolher uma clínica estética, não confie seu corpo a qualquer pessoa. Escolha qualquer um de nossos serviços de procedimentos estéticos e reconstrutivos.
          </p>
        </div>

        {/* Bloco Odontologia */}
        <ServiceCategoryBlock 
          category="odontologia"
          services={odontologiaServices}
          categoryName="Odontologia"
        />

        {/* Bloco Estética Facial */}
        <ServiceCategoryBlock 
          category="estetica"
          services={esteticaServices}
          categoryName="Estética Facial"
        />
      </div>
    </section>
  )
}

