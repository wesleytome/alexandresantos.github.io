import { useState } from 'react'
import { BeforeAfterSlider } from './BeforeAfterSlider'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

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
  const [activeFilter, setActiveFilter] = useState<string>('todos')

  const filteredCases =
    activeFilter === 'todos'
      ? beforeAfterCases
      : beforeAfterCases.filter((case_) => case_.category === activeFilter)

  return (
    <section 
      className="py-20 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">
            <span className="section-heading-primary">Antes e</span>{' '}
            <span className="section-heading-accent">Depois</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Resultados reais de nossos tratamentos. Veja a transformação de nossos pacientes.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center mb-12">
          <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-auto">
            <TabsList className="bg-muted/50">
              <TabsTrigger
                value="todos"
                className="data-[state=active]:bg-white data-[state=active]:text-foreground"
              >
                Todos
              </TabsTrigger>
              <TabsTrigger
                value="odontologia"
                className="data-[state=active]:bg-white data-[state=active]:text-foreground"
              >
                Odontologia
              </TabsTrigger>
              <TabsTrigger
                value="estetica"
                className="data-[state=active]:bg-white data-[state=active]:text-foreground"
              >
                Estética Facial
              </TabsTrigger>
              <TabsTrigger
                value="combinados"
                className="data-[state=active]:bg-white data-[state=active]:text-foreground"
              >
                Combinados
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Grid de casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((case_) => (
            <div key={case_.id} className="group">
              <BeforeAfterSlider
                beforeImage={case_.beforeImage}
                afterImage={case_.afterImage}
                treatmentType={case_.treatmentType}
                treatmentTime={case_.treatmentTime}
                patientAge={case_.patientAge}
              />
            </div>
          ))}
        </div>

        {/* Mensagem quando não há casos */}
        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60">
              Nenhum caso encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

