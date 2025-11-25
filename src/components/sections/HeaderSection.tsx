import { Link } from 'react-router-dom'
import alexandreImage from '@/images/alexandre-santos.png'

export function HeaderSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Container com duas "linhas" */}
      <div className="flex flex-col">
        
        {/* Linha de cima - Header (fundo verde) */}
        <div 
          className="relative flex items-center"
          style={{ backgroundColor: '#7FC2B4', minHeight: '58vh' }}
        >
          <div className="w-full relative z-10 pt-4">
            <div className="container mx-auto max-w-full px-6">
              <div className="grid grid-cols-2 gap-8 xl:gap-12 items-center min-h-[40vh]">
                {/* Left Content */}
                <div className="space-y-8 justify-center">
                  {/* Nome - Dividido em 3 linhas */}
                  <div className="mb-5 ">
                    <h1 className="font-bold leading-none" style={{ color: '#FFFFFF' }}>
                      <span className="block text-4xl sm:text-6xl">Dr.</span>
                      <span className="block text-4xl sm:text-6xl leading-[0.8]">Alexandre</span>
                      <span className="block text-4xl sm:text-6xl">Santos</span>
                    </h1>
                  </div>

                  {/* Especialização */}
                  <div className="mb-5">
                    <p 
                      className="leading-relaxed" 
                      style={{ 
                        color: '#FFFFFF',
                        fontWeight: 100,
                        lineHeight: '1.2'
                      }}
                    >
                      <span className="text-lg text-xl">Odontologia</span><br />
                      <span className="text-lg text-xl">avançada e</span><br />
                      <span className="text-lg text-xl">Estética Facial</span>
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link
                      to="/contato"
                      className="relative inline-flex items-center justify-between transition-all hover:opacity-90 overflow-hidden mb-0"
                      style={{ 
                        backgroundColor: '#212020',
                        color: '#FFFFFF',
                        borderRadius: '8px'
                      }}
                    >
                      <div className="flex flex-col p-5 pr-20">
                        <span className="text-2xl leading-tight font-normal whitespace-nowrap">
                          Quero me
                        </span>
                        <span className="text-2xl leading-tight font-normal whitespace-nowrap">
                          consultar
                        </span>
                      </div>
                      
                      {/* SVG Lines - Canto inferior direito */}
                      <svg 
                        className="absolute w-14 h-14 xl:w-16 xl:h-16"
                        viewBox="0 0 60 60" 
                        fill="none" 
                        style={{ 
                          pointerEvents: 'none',
                          bottom: '8px',
                          right: '8px'
                        }}
                      >
                        {/* Linha horizontal inferior */}
                        <line 
                          x1="0" 
                          y1="60" 
                          x2="60" 
                          y2="60" 
                          stroke="#FFFFFF" 
                          strokeWidth="1"
                        />
                        {/* Linha vertical direita */}
                        <line 
                          x1="60" 
                          y1="0" 
                          x2="60" 
                          y2="60" 
                          stroke="#FFFFFF" 
                          strokeWidth="1"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Espaço reservado para imagem no grid (< 1024px) */}
                <div className="block lg:hidden relative h-full"></div>
              </div>
            </div>
          </div>

          {/* Imagem - Posicionada na linha de cima quando < 1024px */}
          <div 
            className="block lg:hidden absolute right-0 top-0 h-full flex items-end justify-end pointer-events-none"
            style={{ zIndex: 5 }}
          >
            <img
              src={alexandreImage}
              alt="Dr. Alexandre Santos"
              className="object-contain"
              style={{ 
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))',
                height: 'auto',
                maxHeight: '90%',
                width: 'auto',
                maxWidth: '150%',
                objectPosition: 'bottom right'
              }}
            />
          </div>
        </div>

        {/* Linha de baixo - Transform (fundo branco) */}
        <div 
          className="relative py-16 xl:py-15"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className="container mx-auto max-w-full px-6">
            <div className="flex flex-col lg:flex-row items-start">
              {/* Área de conteúdo - full width abaixo de 1024px, metade acima */}
              <div className="w-full lg:w-2/5 xl:w-1/2 lg:pr-6 xl:pr-8">
                <h2 className="mb-6 leading-tight text-primary" style={{ fontWeight: 'normal', lineHeight: '1.1' }}>
                  <span className="text-3xl xl:text-4xl">Transforme-se na <br /> sua melhor versão</span>
                </h2>
                <p className="leading-relaxed text-primary w-full lg:w-md xl:w-md " style={{ lineHeight: '1.4' }}>
                  <span className="text-lg font-light xl:text-xl">
                    Tratamentos odontológicos e estéticos que elevam sua autoestima, transformam sua autoimagem e refletem diretamente na sua qualidade de vida. Sinta-se muito melhor, por dentro e por fora.
                  </span>
                </p>
              </div>
              {/* Espaço reservado para a imagem - metade da largura (apenas acima de 1024px) */}
              <div className="hidden lg:block w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Imagem ÚNICA - Posicionamento responsivo */}
      {/* >= 1024px: Alinhada ao bottom da section (linha de baixo) */}
      <div 
        className="hidden lg:flex absolute right-0 top-0 bottom-0 pointer-events-none"
        style={{
          zIndex: 20,
          width: 'calc(100% - 40px)',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          paddingRight: '60px',
          paddingTop: '64px',
          paddingBottom: '0px'
        }}
      >
        <div className="relative flex items-end justify-end" style={{ maxWidth: '700px', width: '100%', height: '100%' }}>
          <img
            src={alexandreImage}
            alt="Dr. Alexandre Santos"
            className="object-contain"
            style={{ 
              filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))',
              height: 'auto',
              maxHeight: '100%',
              width: 'auto',
              maxWidth: '100%',
              objectPosition: 'bottom right'
            }}
          />
        </div>
      </div>
    </section>
  )
}

