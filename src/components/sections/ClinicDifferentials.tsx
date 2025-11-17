import { Building2, Shield, Heart, Award, CreditCard } from 'lucide-react'

interface Differential {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const differentials: Differential[] = [
  {
    id: '1',
    title: 'Ambiente Moderno',
    description: 'Equipamentos de última geração',
    icon: <Building2 className="h-8 w-8" />
  },
  {
    id: '2',
    title: 'Biossegurança',
    description: 'Protocolos rigorosos de higiene',
    icon: <Shield className="h-8 w-8" />
  },
  {
    id: '3',
    title: 'Atendimento Humanizado',
    description: 'Conforto e acolhimento',
    icon: <Heart className="h-8 w-8" />
  },
  {
    id: '4',
    title: 'Produtos Premium',
    description: 'Materiais certificados (Anvisa/FDA)',
    icon: <Award className="h-8 w-8" />
  },
  {
    id: '5',
    title: 'Financiamento',
    description: 'Parcelamento facilitado',
    icon: <CreditCard className="h-8 w-8" />
  }
]

export function ClinicDifferentials() {
  return (
    <section 
      className="py-20 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">
            <span className="section-heading-primary">Diferenciais da</span>{' '}
            <span className="section-heading-accent">Clínica</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Reforçamos nossa credibilidade e estrutura para oferecer o melhor atendimento
          </p>
        </div>

        {/* Grid 2x3 */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentials.map((differential) => (
              <div
                key={differential.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50"
              >
                <div className="flex items-start gap-4">
                  {/* Ícone */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sage-green/10 flex items-center justify-center text-sage-green">
                    {differential.icon}
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1">
                    <h3 className="text-subtitle font-body text-foreground mb-2">
                      {differential.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {differential.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

