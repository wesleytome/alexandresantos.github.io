export function TransformSection() {
  return (
    <section 
      className="relative py-16 md:py-19"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Área de conteúdo - metade da página */}
          <div className="w-full lg:w-md lg:pr-8">
            <h2 className="mb-6 leading-tight text-primary" style={{ fontSize: '2em', fontWeight: 'normal', lineHeight: '1.1' }}>
              Transforme-se na sua melhor versão
            </h2>
            <p className="leading-relaxed text-primary" style={{ fontSize: '1.2em', lineHeight: '1.4' }}>
              Tratamentos odontológicos e estéticos que elevam sua autoestima, transformam sua autoimagem e refletem diretamente na sua qualidade de vida. Sinta-se muito melhor, por dentro e por fora.
            </p>
          </div>
          {/* Espaço reservado para a imagem - metade da largura */}
          <div className="w-full lg:w-1/2"></div>
        </div>
      </div>
    </section>
  )
}

