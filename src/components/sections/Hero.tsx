import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-transparent">
      {/* Background decorative elements - círculo escuro no canto superior direito */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </div> */}

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
            {/* Nome e Especialização */}
            <div className="space-y-2">
              <h2 className="font-tangerine font-bold hero-name" style={{ color: '#c1a280' }}>
                Dr. Alexandre Santos
              </h2>
              <p className="hero-specialization font-body italic">
                Especialista em HOF pelo IOA
              </p>
            </div>

            {/* Headline */}
            <div>
              <h1 className="hero-main-title font-display" style={{ color: '#2d4440' }}>
                Odontologia Avançada e Estética Facial
              </h1>
              <p className="hero-subtitle font-body mt-4 font-normal" style={{ color: '#2d4440' }}>
                Transforme seu sorriso e harmonize sua beleza natural
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                asChild
                className="btn-primary text-base px-6 py-3 font-medium"
              >
                <Link to="/odontologia">
                  Odontologia
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="button-estetica-hero text-base px-6 py-3"
              >
                <Link to="/estetica-facial">
                  Estética Facial
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <svg 
          viewBox="0 0 224 12" 
          className="-mb-1 w-full" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="splitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" />
              <stop offset="50%" stopColor="white" />
              <stop offset="50%" stopColor="#2d4440" />
              <stop offset="100%" stopColor="#2d4440" />
            </linearGradient>
          </defs>
          
          <path 
            d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"
            fill="url(#splitGradient)"
          />
        </svg>

      </div>
      
    </section>
  )
}
