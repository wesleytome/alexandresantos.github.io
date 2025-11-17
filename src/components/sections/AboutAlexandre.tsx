
interface Statistic {
  number: string
  label: string
  suffix?: string
}

const statistics: Statistic[] = [
  {
    number: '15',
    label: 'Anos de Experiência',
    suffix: '+'
  },
  {
    number: '5000',
    label: 'Pacientes Atendidos',
    suffix: '+'
  },
  {
    number: '98',
    label: 'Satisfação dos Pacientes',
    suffix: '%'
  }
]

// Especialidades para as tags ao redor da foto com posicionamento manual
const specialties = [
  {
    name: 'Odontologia Estética',
    position: { left: '-8%', top: '57%' },
    backgroundColor: 'rgb(193, 162, 128)',
    color: 'rgb(45, 68, 64)'
  },
  {
    name: 'Implantes Dentários',
    position: { left: '93%', top: '57%', transform: 'translateX(-50%)' },
    backgroundColor: 'rgb(45, 68, 64)',
    color: 'rgb(193, 162, 128)'
  },
  {
    name: 'Harmonização Orofacial',
    position: { top: '70%', right: '-1%' },
    backgroundColor: 'rgb(193, 162, 128)',
    color: 'rgb(45, 68, 64)'
  },
  {
    name: 'Toxina Botulínica',
    position: { bottom: '15%', right: '8%' },
    backgroundColor: 'rgb(45, 68, 64)',
    color: 'rgb(193, 162, 128)'
  },
  {
    name: 'Preenchimento Facial',
    position: { bottom: '8%', left: '50%', transform: 'translateX(-50%)' },
    backgroundColor: 'rgb(193, 162, 128)',
    color: 'rgb(45, 68, 64)'
  },
  {
    name: 'Lentes de Contato',
    position: { bottom: '12%', left: '8%' },
    backgroundColor: 'rgb(45, 68, 64)',
    color: 'rgb(193, 162, 128)'
  },
  {
    name: 'Clareamento Dental',
    position: { top: '73%', left: '-2%', transform: 'translateY(-50%)' },
    backgroundColor: 'rgb(193, 162, 128)',
    color: 'rgb(45, 68, 64)'
  }
]

export function AboutAlexandre() {
  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-b from-white to-amber-50"
    >
      <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
        {/* Lado esquerdo - Foto com círculo e tags */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-12 lg:py-16 px-4">
          <div className="relative w-full max-w-[500px] aspect-square">
            {/* Círculo grande de fundo */}
            <div 
              className="absolute inset-0 rounded-full flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: 'rgb(224, 215, 197)' }}
            >
              {/* Foto do Dr. Alexandre */}
              <img
                src="src/images/quem-e-alexandre-santos.jpeg"
                alt="Dr. Alexandre Santos"
                className="w-full h-full object-cover rounded-full "
              />
            </div>

            {/* Tags/Badges ao redor da foto - posicionamento manual */}
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="absolute px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium whitespace-nowrap z-10 shadow-sm"
                style={{
                  ...specialty.position,
                  backgroundColor: specialty.backgroundColor,
                  color: specialty.color,
                }}
              >
                {specialty.name}
              </div>
            ))}
          </div>
        </div>

        {/* Lado direito - Conteúdo */}
        <div className="w-full lg:w-1/2 flex items-center justify-center" style={{ backgroundColor: '#2d4440' }}>
          <div className="space-y-6 relative w-full max-w-2xl px-4 lg:px-8" style={{ paddingTop: '0', paddingBottom: '2rem' }}>
            {/* Badge pequeno */}
            <div>
              <span 
                className="inline-block px-3 py-1 text-xs font-medium"
                style={{ 
                  color: '#c1a280'
                }}
              >
                — Sobre o Dr. Alexandre
              </span>
            </div>

            {/* Título principal */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight">
              <span style={{ color: '#f5f3f0' }}>Quem é </span>
              <span className="italic" style={{ color: '#c1a280' }}>Dr. Alexandre Santos?</span>
            </h2>

            {/* Texto descritivo */}
            <p className="text-base leading-relaxed" style={{ color: '#f5f3f0', opacity: 0.9 }}>
              Com mais de 15 anos de experiência em odontologia estética e harmonização orofacial, 
              o Dr. Alexandre Santos é especialista certificado pelo IOA (Instituto de Odontologia Avançada) 
              e pelo CFO (Conselho Federal de Odontologia). Sua abordagem integrada combina técnicas 
              avançadas de odontologia com procedimentos estéticos faciais, proporcionando resultados 
              naturais e harmoniosos que elevam a autoestima dos pacientes.
            </p>

            <p className="text-base leading-relaxed" style={{ color: '#f5f3f0', opacity: 0.9 }}>
              Comprometido com a excelência e atualização constante, o Dr. Alexandre investe 
              continuamente em educação e tecnologia de ponta para oferecer o melhor tratamento 
              personalizado a cada paciente.
            </p>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6">
              {statistics.map((stat, index) => (
                <div key={index}>
                  <div className="flex items-baseline gap-1 mb-1 flex-wrap">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#c1a280' }}>
                      {stat.number}
                    </span>
                    {stat.suffix && (
                      <span className="text-lg md:text-xl font-semibold" style={{ color: '#c1a280' }}>
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="text-xs md:text-sm font-medium" style={{ color: '#f5f3f0' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
