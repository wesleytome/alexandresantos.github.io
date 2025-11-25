export function AlexandreQuote() {
  return (
    <section 
      className="py-20 bg-section-muted"
    >
      <div className="container mx-auto px-4 md:px-20">
        <div className="max-w-3xl mx-auto">
          {/* Citação */}
          <blockquote className="text-center">
            <p 
              className="text-lg font-light leading-[1.79] mb-5"
            >
              "Acredito que cada sorriso conta uma história única. Minha missão é transformar essa história em algo ainda mais especial, combinando a excelência técnica da odontologia com a arte da harmonização facial, sempre priorizando o bem-estar e a satisfação de cada paciente."
            </p>
            
            {/* Assinatura */}
            <div className="flex justify-center">
              <span 
                className="text-brand text-3xl md:text-3xl font-bold"
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

