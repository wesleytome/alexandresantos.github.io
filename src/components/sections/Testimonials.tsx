import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { testimonials } from '@/data/testimonials'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section 
      className="py-24 bg-gradient-muted-to-light"
      // Estado anterior: bg-section-light → bg-section-muted (para reverter se necessário)
    >
      <div className="container mx-auto px-4 md:px-20">
        {/* Header - Alinhado à esquerda */}
        <div className="section-header">
          <p className="section-label">
            Uma boa palavra vale muito
          </p>
          <h2 className="section-title">
            Depoimentos de clientes
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Sempre é o boca a boca que traz o melhor conselho. Aqui estão alguns depoimentos dos nossos clientes.
          </p>
        </div>

        {/* Área de depoimento centralizada */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center px-8 md:px-16 py-12">
            {/* Foto do depoente */}
            {currentTestimonial.avatar && (
              <div className="mb-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                  <AvatarFallback 
                    className="text-xl"
                    style={{ 
                      backgroundColor: '#F7F7F7',
                      color: '#212020'
                    }}
                  >
                    {currentTestimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            )}

            {/* Nome em teal */}
            <p 
              className="mb-8"
              style={{ 
                color: '#7FC2B4',
                fontSize: '18px',
                fontWeight: 'normal'
              }}
            >
              - {currentTestimonial.name} -
            </p>

            {/* Citação */}
            <blockquote 
              className="max-w-3xl leading-relaxed"
              style={{ 
                color: '#212020',
                fontSize: '20px',
                lineHeight: '1.6'
              }}
            >
              "{currentTestimonial.text}"
            </blockquote>
          </div>

          {/* Seta esquerda */}
          <button
            onClick={prevTestimonial}
            className="btn-nav absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-20 w-12 h-12 flex items-center justify-center transition-opacity hover:opacity-80"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          {/* Seta direita */}
          <button
            onClick={nextTestimonial}
            className="btn-nav absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-20 w-12 h-12 flex items-center justify-center transition-opacity hover:opacity-80"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Pontos de paginação */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className="transition-all"
                style={{
                  backgroundColor: index === currentIndex ? '#212020' : '#D1D5DB',
                  width: index === currentIndex ? '24px' : '8px',
                  height: index === currentIndex ? '8px' : '8px',
                  borderRadius: index === currentIndex ? '4px' : '50%'
                }}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Botão CTA - Estilo do Hero */}
        <div className="text-center mt-12">
          <Link
            to="/depoimentos"
            className="relative inline-flex items-center justify-between transition-all hover:opacity-90 overflow-hidden mb-0"
            style={{ 
              backgroundColor: '#212020',
              color: '#FFFFFF',
              width: '300px',
              height: '125px',
              padding: '0 24px',
              borderRadius: '8px'
            }}
          >
            <div className="flex flex-col">
              <span style={{ 
                fontSize: '36px', 
                lineHeight: '38px',
                fontWeight: 400
              }}>
                Ver todos os
              </span>
              <span style={{ 
                fontSize: '36px', 
                lineHeight: '38px',
                fontWeight: 400
              }}>
                Depoimentos
              </span>
            </div>
            
            {/* SVG Lines - Canto inferior direito */}
            <svg 
              width="60" 
              height="60" 
              viewBox="0 0 60 60" 
              fill="none" 
              className="absolute"
              style={{ 
                pointerEvents: 'none',
                bottom: '15px',
                right: '15px'
              }}
            >
              {/* Linha horizontal inferior */}
              <line 
                x1="0" 
                y1="60" 
                x2="60" 
                y2="60" 
                stroke="#FFFFFF" 
                strokeWidth="1"
              />
              {/* Linha vertical direita */}
              <line 
                x1="60" 
                y1="0" 
                x2="60" 
                y2="60" 
                stroke="#FFFFFF" 
                strokeWidth="1"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

