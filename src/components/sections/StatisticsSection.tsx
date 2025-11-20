export function StatisticsSection() {
  const statistics = [
    {
      title: '+15',
      text: 'Anos de experiência'
    },
    {
      title: '+5000',
      text: 'Pacientes Atendidos'
    },
    {
      title: '32',
      text: 'Turmas de alunos formados'
    }
  ]

  return (
    <section 
      className="py-16 md:py-20 bg-dark"
    >
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 
                className="font-bold text-brand"
                style={{ fontSize: '2.7em' }}
              >
                {stat.title}
              </h3>
              <p 
                className="text-base md:text-lg text-light"
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

