import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section 
      className="relative min-h-[600px] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom left, #793446, #101111)'
      }}
    >
      {/* Background decorative elements - círculo escuro no canto superior direito */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
          style={{
            background: '#e2c41e29'
          }}
        ></div>
      </div>

      {/* Imagem posicionada à direita e no fundo */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-2/5 xl:w-1/3 pointer-events-none z-0">
        <div className="relative h-full w-full flex items-start justify-end pt-4">
          <img
            src="src/images/alexandre-santos-picture.png"
            alt="Dr. Alexandre"
            className="h-full w-auto object-contain object-right-top max-w-none"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Headline */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                <span className="text-warm-beige/90 text-2xl md:text-3xl lg:text-4xl block mb-2 font-normal">
                  Um Motivo
                </span>
                <span className="text-pearl-white text-5xl md:text-6xl lg:text-7xl block">
                  Para Sorrir
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-warm-beige max-w-xl leading-relaxed">
              Transforme seu sorriso com tratamentos de excelência e tecnologia de ponta. 
              Nossa equipe especializada está pronta para cuidar da sua saúde bucal e estética facial.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                asChild
                className="bg-rose-gold hover:bg-rose-gold/90 text-white text-lg px-8 py-6 rounded-lg font-medium"
              >
                <Link to="/servicos">
                  Ver Nossos Serviços
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent hover:bg-charcoal/50 text-warm-beige border-rose-gold text-lg px-8 py-6 rounded-lg"
              >
                <Link to="/depoimentos">
                  Depoimentos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
