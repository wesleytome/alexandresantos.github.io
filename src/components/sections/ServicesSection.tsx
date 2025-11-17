import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { services } from '@/data/services'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group h-full bg-white rounded-lg overflow-hidden shadow-sm flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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
        <h3 className="text-subtitle font-body text-fg mb-3">
          {service.title}
        </h3>
        
        {/* Descrição breve */}
        <p className="text-sm text-foreground/80 leading-relaxed mb-6 flex-grow">
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
  )
}

export function ServicesSection() {
  const odontologiaServices = services.filter(s => s.category === 'odontologia')
  const esteticaServices = services.filter(s => s.category === 'estetica')

  return (
    <section 
      className="py-20 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="section-heading">
            <span className="section-heading-primary">Descubra um</span>{' '}
            <span className="section-heading-accent">novo você</span>
          </h2>
          {/* Linha horizontal curta embaixo de "Descubra um" */}
          <div className="section-heading-divider"></div>
          <p className="text-base text-foreground/80 leading-relaxed max-w-2xl">
            Quando se trata de escolher uma clínica estética, não confie seu corpo a qualquer pessoa. Escolha qualquer um de nossos serviços de procedimentos estéticos e reconstrutivos.
          </p>
        </div>

        {/* Tabs com serviços */}
        <Tabs defaultValue="odontologia" className="w-full">
          <TabsList className="services-tabs-list">
            <TabsTrigger 
              value="odontologia"
              className="services-tabs-trigger"
            >
              Odontologia
              <Badge 
                variant="secondary" 
                className="ml-2 h-5 min-w-5 px-1.5 text-xs font-semibold"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'inherit'
                }}
              >
                {odontologiaServices.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger 
              value="estetica"
              className="services-tabs-trigger"
            >
              Estética Facial
              <Badge 
                variant="secondary" 
                className="ml-2 h-5 min-w-5 px-1.5 text-xs font-semibold"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'inherit'
                }}
              >
                {esteticaServices.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          {/* Tab Odontologia */}
          <TabsContent 
            value="odontologia" 
            className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {odontologiaServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          {/* Tab Estética Facial */}
          <TabsContent 
            value="estetica" 
            className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {esteticaServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

