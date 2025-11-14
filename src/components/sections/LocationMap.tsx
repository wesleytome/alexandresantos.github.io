import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Calendar, Navigation } from 'lucide-react'
import { businessInfo } from '@/data/businessInfo'
import { Link } from 'react-router-dom'

export function LocationMap() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${businessInfo.address.street}, ${businessInfo.address.city}, ${businessInfo.address.state}`
  )}`

  return (
    <section className="py-0 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-[600px]">
        {/* Mapa à esquerda */}
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

        {/* Painel de informações à direita - fundo escuro elegante */}
        <div className="bg-charcoal text-pearl-white p-8 lg:p-12 flex flex-col justify-center">
          <div className="space-y-8 max-w-md">
            {/* Horário de funcionamento */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-pearl-white">Horário de funcionamento</h3>
              <div className="space-y-2 text-pearl-white/90">
                <div className="flex justify-between">
                  <span className="font-medium">SEG - QUA:</span>
                  <span>8h - 19h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">QUI:</span>
                  <span>8h - 17h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">SEX:</span>
                  <span>8h - 17h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">SÁB - DOM:</span>
                  <span>Fechado</span>
                </div>
              </div>
              
              {/* Agendar consulta */}
              <div className="mt-6">
                <Button 
                  asChild
                  variant="outline"
                  className="bg-transparent border-pearl-white/30 text-pearl-white hover:bg-rose-gold/20 hover:border-rose-gold/50"
                >
                  <Link to="/contato" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Agendar Consulta
                  </Link>
                </Button>
              </div>
            </div>

            {/* Detalhes de contato */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-pearl-white">Detalhes de contato</h3>
              <div className="space-y-4 text-pearl-white/90">
                {/* Telefone */}
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a 
                    href={`tel:${businessInfo.phones.main.replace(/\D/g, '')}`}
                    className="hover:text-rose-gold transition-colors"
                  >
                    {businessInfo.phones.main}
                  </a>
                </div>

                {/* E-mail */}
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <a 
                    href={`mailto:${businessInfo.email}`}
                    className="hover:text-rose-gold transition-colors"
                  >
                    {businessInfo.email}
                  </a>
                </div>

                {/* Endereço */}
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>
                    {businessInfo.address.street}, {businessInfo.address.city}
                  </span>
                </div>
              </div>

              {/* Obter rotas */}
              <div className="mt-6">
                <Button 
                  asChild
                  variant="outline"
                  className="bg-transparent border-pearl-white/30 text-pearl-white hover:bg-rose-gold/20 hover:border-rose-gold/50"
                >
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
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
    </section>
  )
}

