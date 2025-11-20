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
      className="py-24 bg-gradient-muted-to-light"
      // Estado anterior: bg-section-muted (para reverter se necessário)
    >
      <div className="container mx-auto px-4 md:px-20">
        {/* Header - Alinhado à esquerda */}
        <div className="section-header">
          <p className="section-label">
            O que nos torna únicos
          </p>
          <h2 className="section-title">
            Diferenciais da Clínica
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Reforçamos nossa credibilidade e estrutura para oferecer o melhor atendimento
          </p>
        </div>

        {/* Layout: Grid 3 colunas - Imagem (1) e Conteúdo (2 mergeadas) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Coluna 1: Imagem */}
          <div className="relative lg:col-span-1">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src="https://amaisd.com.br/wp-content/uploads/2023/04/2_4.png"
                alt="Consultório médico moderno"
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover', objectPosition: '60% center' }}
              />
            </div>
          </div>

          {/* Colunas 2 e 3 mergeadas: Grid 2x3 com diferenciais */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {differentials.map((differential, index) => {
                // Verifica se está na última linha completa ou é o último item
                const totalItems = differentials.length
                const isLastItem = index === totalItems - 1
                
                // Última linha completa: se ímpar, são os 2 itens antes do último; se par, são os últimos 2
                const lastCompleteRowStart = totalItems % 2 === 0 
                  ? totalItems - 2
                  : totalItems - 3
                const isInLastCompleteRow = index >= lastCompleteRowStart && index < totalItems - (totalItems % 2 === 0 ? 0 : 1)
                
                // Verifica se há item abaixo na mesma coluna
                const hasItemBelow = isLastItem ? false : (index + 2 < totalItems)
                
                // Deve ter borda inferior se:
                // 1. Está na última linha completa E não tem item abaixo na mesma coluna, OU
                // 2. É o último item
                const shouldHaveBottomBorder = (isInLastCompleteRow && !hasItemBelow) || isLastItem
                
                return (
                  <div
                    key={differential.id}
                    className="relative"
                  >
                    {/* Borda superior de 2px em todos os itens */}
                    <div 
                      className="absolute top-0 left-0 right-0"
                      style={{ 
                        height: '2px',
                        backgroundColor: '#E5E7EB'
                      }}
                    ></div>
                    
                    {/* Borda inferior de 2px nos itens da última linha completa e no último item */}
                    {shouldHaveBottomBorder && (
                      <div 
                        className="absolute bottom-0 left-0 right-0"
                        style={{ 
                          height: '2px',
                          backgroundColor: '#E5E7EB'
                        }}
                      ></div>
                    )}

                    {/* Conteúdo com espaçamento adequado */}
                    <div className="p-4">
                      <div className="flex flex-col gap-2">
                        {/* Ícone */}
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center icon-brand">
                          {differential.icon}
                        </div>

                        {/* Conteúdo */}
                        <div className="flex-1">
                          <h3 
                            className="font-semibold mb-2"
                      className="text-primary"
                      style={{ 
                        fontSize: '19px',
                        lineHeight: '1.4'
                      }}
                          >
                            {differential.title}
                          </h3>
                          <p 
                            className="leading-relaxed"
                      className="text-primary"
                      style={{ 
                        fontSize: '15px',
                        lineHeight: '1.5'
                      }}
                          >
                            {differential.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

