import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Calendar, Navigation } from 'lucide-react'
import { businessInfo } from '@/data/businessInfo'
import { Link } from 'react-router-dom'

export function LocationMap() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${businessInfo.address.street}, ${businessInfo.address.city}, ${businessInfo.address.state}`
  )}`

  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: '#7FC2B4' }}>
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] h-[600px] rounded-lg overflow-hidden shadow-lg">
          {/* Mapa à esquerda - 70% */}
          <div className="relative w-full h-full">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(
                `${businessInfo.address.street}, ${businessInfo.address.city}, ${businessInfo.address.state}`
              )}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica"
            ></iframe>
          </div>

          {/* Painel de informações à direita - 30% */}
          <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
          <div className="space-y-8 max-w-md">
            {/* Horário de funcionamento */}
            <div>
              <h3 className="text-subtitle font-body mb-4 text-brand">Horário de funcionamento</h3>
              <div className="space-y-2 text-primary">
                <div className="flex items-center">
                  <span className="font-medium">SEG - QUA:</span>
                  <span className="ml-1">8h - 19h</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">QUI:</span>
                  <span className="ml-1">8h - 17h</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">SEX:</span>
                  <span className="ml-1">8h - 17h</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">SÁB - DOM:</span>
                  <span className="ml-1">Fechado</span>
                </div>
              </div>
              
              {/* Agendar consulta */}
              <div className="mt-6">
                <Button 
                  asChild
                  className="bg-dark text-light hover:opacity-90 w-full"
                >
                  <Link to="/contato" className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Agendar Consulta
                  </Link>
                </Button>
              </div>
            </div>

            {/* Detalhes de contato */}
            <div>
              <h3 className="text-subtitle font-body mb-4 text-brand">Detalhes de contato</h3>
              <div className="space-y-4 text-primary">
                {/* Telefone */}
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 icon-brand" />
                  <a 
                    href={`tel:${businessInfo.phones.main.replace(/\D/g, '')}`}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {businessInfo.phones.main}
                  </a>
                </div>

                {/* E-mail */}
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0 icon-brand" />
                  <a 
                    href={`mailto:${businessInfo.email}`}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {businessInfo.email}
                  </a>
                </div>

                {/* Endereço */}
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 icon-brand" />
                  <span>
                    {businessInfo.address.street}, {businessInfo.address.city}
                  </span>
                </div>
              </div>

              {/* Obter rotas */}
              <div className="mt-6">
                <Button 
                  asChild
                  className="bg-dark text-light hover:opacity-90 w-full"
                >
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Navigation className="h-4 w-4" />
                    Obter Rotas
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

