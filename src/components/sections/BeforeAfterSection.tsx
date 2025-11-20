import { useState } from 'react'
import { BeforeAfterSlider } from './BeforeAfterSlider'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface BeforeAfterCase {
  id: string
  category: 'odontologia' | 'estetica' | 'combinados'
  treatmentType: string
  beforeImage: string
  afterImage: string
  treatmentTime?: string
  patientAge?: string
}

// Dados de exemplo - substituir por dados reais
const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: '1',
    category: 'odontologia',
    treatmentType: 'Lentes de Contato Dental',
    beforeImage: 'https://images.pexels.com/photos/3845557/pexels-photo-3845557.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/3779708/pexels-photo-3779708.jpeg?auto=compress&cs=tinysrgb&w=800',
    treatmentTime: '2-3 sessões',
    patientAge: '32'
  },
  {
    id: '2',
    category: 'estetica',
    treatmentType: 'Harmonização Orofacial',
    beforeImage: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
    treatmentTime: '1 sessão',
    patientAge: '28'
  },
  {
    id: '3',
    category: 'combinados',
    treatmentType: 'Lentes + Harmonização Labial',
    beforeImage: 'https://images.pexels.com/photos/3845556/pexels-photo-3845556.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/3779708/pexels-photo-3779708.jpeg?auto=compress&cs=tinysrgb&w=800',
    treatmentTime: '3-4 sessões',
    patientAge: '35'
  },
  {
    id: '4',
    category: 'odontologia',
    treatmentType: 'Clareamento Dental',
    beforeImage: 'https://images.pexels.com/photos/3845557/pexels-photo-3845557.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/3845556/pexels-photo-3845556.jpeg?auto=compress&cs=tinysrgb&w=800',
    treatmentTime: '2 sessões',
    patientAge: '29'
  },
  {
    id: '5',
    category: 'estetica',
    treatmentType: 'Toxina Botulínica',
    beforeImage: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800',
    treatmentTime: '1 sessão',
    patientAge: '42'
  },
  {
    id: '6',
    category: 'combinados',
    treatmentType: 'Implantes + Preenchimento',
    beforeImage: 'https://images.pexels.com/photos/3845557/pexels-photo-3845557.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
    treatmentTime: '4-6 meses',
    patientAge: '38'
  }
]

export function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterCases.length)
  }

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterCases.length) % beforeAfterCases.length)
  }

  const currentCase = beforeAfterCases[currentIndex]

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'odontologia':
        return 'Odontologia'
      case 'estetica':
        return 'Estética Facial'
      case 'combinados':
        return 'Combinados'
      default:
        return 'Odontologia'
    }
  }

  return (
    <section 
      className="py-24 bg-gradient-light-to-muted"
      // Estado anterior: bg-section-light (para reverter se necessário)
    >
      <div className="container mx-auto px-4 md:px-20">
        {/* Header - Alinhado à esquerda */}
        <div className="section-header">
          <p className="section-label">
            Antes e Depois
          </p>
          <h2 className="section-title">
            Resultados
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Resultados reais de nossos tratamentos. Veja a transformação de nossos pacientes.
          </p>
        </div>

        {/* Seção de imagem grande com navegação */}
        <div className="relative max-w-5xl mx-auto">
          {/* Seta esquerda */}
          <button
            onClick={prevCase}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-20 w-12 h-12 flex items-center justify-center transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#7FC2B4' }}
            aria-label="Caso anterior"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          {/* Container da imagem */}
          <div 
            className="bg-section-light relative rounded-t-2xl overflow-hidden"
          >
            {/* Label no topo */}
            <div 
              className="px-6 py-4"
              style={{ backgroundColor: '#7FC2B4' }}
            >
              <span 
                className="text-lg font-normal"
                style={{ color: '#FFFFFF' }}
              >
                {getCategoryLabel(currentCase.category)}
              </span>
            </div>

            {/* Slider de antes/depois */}
            <div className="relative">
              <BeforeAfterSlider
                beforeImage={currentCase.beforeImage}
                afterImage={currentCase.afterImage}
                treatmentType={currentCase.treatmentType}
                treatmentTime={currentCase.treatmentTime}
                patientAge={currentCase.patientAge}
              />
            </div>
          </div>

          {/* Seta direita */}
          <button
            onClick={nextCase}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-20 w-12 h-12 flex items-center justify-center transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#7FC2B4' }}
            aria-label="Próximo caso"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

