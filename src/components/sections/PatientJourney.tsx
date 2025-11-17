import { CheckCircle2, Calendar, ClipboardList, Stethoscope, Heart } from 'lucide-react'

interface JourneyStep {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

const journeySteps: JourneyStep[] = [
  {
    number: 1,
    title: 'Consulta e Avaliação',
    description: 'Análise facial e dentária integrada',
    icon: <Stethoscope className="h-6 w-6" />
  },
  {
    number: 2,
    title: 'Planejamento Personalizado',
    description: 'Simulação digital dos resultados',
    icon: <ClipboardList className="h-6 w-6" />
  },
  {
    number: 3,
    title: 'Tratamento',
    description: 'Procedimentos com tecnologia avançada',
    icon: <Calendar className="h-6 w-6" />
  },
  {
    number: 4,
    title: 'Acompanhamento',
    description: 'Suporte contínuo pós-tratamento',
    icon: <Heart className="h-6 w-6" />
  }
]

export function PatientJourney() {
  return (
    <section 
      className="py-20 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">
            <span className="section-heading-primary">Jornada do</span>{' '}
            <span className="section-heading-accent">Paciente</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Desmistificamos os processos para reduzir ansiedade e garantir sua tranquilidade em cada etapa
          </p>
        </div>

        {/* Grid: Resumo à esquerda e Timeline à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Coluna Esquerda: Resumo */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-body font-semibold text-foreground">
                Seu Caminho para o Sorriso Perfeito
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                Entendemos que cada paciente é único e merece um atendimento personalizado. Nossa jornada foi cuidadosamente planejada para garantir que você se sinta confortável e informado em cada etapa do processo.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                Desde a primeira consulta até o acompanhamento pós-tratamento, nossa equipe está comprometida em oferecer excelência, transparência e resultados que superem suas expectativas.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-3" style={{ color: '#2d4440' }}>
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">Processo transparente e descomplicado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Timeline Vertical */}
          <div className="relative">
            {/* Linha vertical conectora */}
            <div 
              className="absolute left-8 top-0 bottom-0 w-0.5"
              style={{
                background: 'linear-gradient(to bottom, rgba(45, 68, 64, 0.3), rgba(90, 114, 93, 0.5), rgba(45, 68, 64, 0.3))'
              }}
            ></div>

            {/* Etapas da timeline */}
            <div className="space-y-12">
              {journeySteps.map((step) => (
                <div key={step.number} className="relative flex items-start gap-6">
                  {/* Círculo com ícone */}
                  <div className="relative flex-shrink-0 z-10">
                    <div 
                      className="w-16 h-16 rounded-full border-4 shadow-lg flex items-center justify-center"
                      style={{ 
                        backgroundColor: '#f5f3f0',
                        borderColor: '#5a725d'
                      }}
                    >
                      <div style={{ color: '#2d4440' }}>
                        {step.icon}
                      </div>
                    </div>
                    {/* Número da etapa */}
                    <div 
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white flex items-center justify-center font-bold text-xs shadow-md"
                      style={{ backgroundColor: '#2d4440' }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Conteúdo da etapa */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-subtitle font-body text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

