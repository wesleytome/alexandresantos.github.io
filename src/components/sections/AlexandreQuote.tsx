export function AlexandreQuote() {
  return (
    <section 
      className="py-16"
      style={{ backgroundColor: '#e9e0cd' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Citação */}
          <blockquote className="text-center">
            <p 
              className="text-xl md:text-2xl lg:text-3xl font-display italic leading-relaxed mb-8"
              style={{ color: '#34353a' }}
            >
              "Acredito que cada sorriso conta uma história única. Minha missão é transformar essa história em algo ainda mais especial, combinando a excelência técnica da odontologia com a arte da harmonização facial, sempre priorizando o bem-estar e a satisfação de cada paciente."
            </p>
            
            {/* Assinatura */}
            <div className="flex justify-center">
              <span 
                className="font-tangerine text-4xl md:text-5xl"
                style={{ color: '#c1a280' }}
              >
                Alexandre Santos
              </span>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

