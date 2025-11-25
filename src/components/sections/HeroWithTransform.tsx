import { Link } from 'react-router-dom'
import alexandreImage from '@/images/alexandre-santos.png'

export function HeroWithTransform() {
  return (
    <div className="relative">
      {/* Seção Hero - Fundo verde */}
      <section 
        className="relative flex items-center w-full overflow-hidden"
        style={{ backgroundColor: '#7FC2B4' }}
      >
        <div className="w-full relative z-10 pt-10">
          <div className="container mx-auto max-w-full px-20 xl:px-20">
          <div className="grid grid-cols-2 gap-8 xl:gap-12 items-center min-h-[58vh] max-h-[58vh]">
            {/* Left Content */}
            <div className="space-y-8 justify-center">
              {/* Nome - Dividido em 3 linhas */}
              <div className="mb-5 mt-8">
                <h1 className="font-bold leading-none" style={{ color: '#FFFFFF' }}>
                  <span className="block text-6xl ">Dr.</span>
                  <span className="block text-6xl  leading-[0.8]">Alexandre</span>
                  <span className="block text-6xl ">Santos</span>
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
                    padding: '0 12px',
                    borderRadius: '8px'
                  }}
                >
                  <div className="flex flex-col py-6 pl-2 pr-20">
                    <span className="text-3xl leading-tight font-normal">
                      Quero me
                    </span>
                    <span className="text-3xl leading-tight font-normal">
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

            {/* Right Content - Imagem ao lado do Hero (< 1024px) */}
            <div className="block lg:hidden relative h-full flex items-end justify-end overflow-visible -mr-3">
              <div className="relative flex items-end justify-end" style={{
                  width: '100%',
                  height: '100%',
                  paddingRight: '0px',
                  paddingTop: '0px',
                  paddingBottom: '0px'
                }}>
                <img
                  src={alexandreImage}
                  alt="Dr. Alexandre Santos"
                  className="object-contain"
                  style={{ 
                    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))',
                    height: '100%',
                    maxHeight: '90%',
                    width: 'auto',
                    maxWidth: 'calc(100% + 12px)',
                    objectPosition: 'bottom right'
                  }}
                />
              </div>
            </div>
            
            {/* Espaço reservado para imagem absoluta (>= 1024px) */}
            <div className="hidden lg:block relative h-full"></div>
          </div>
          </div>
        </div>
      </section>

      {/* Seção Transform - Fundo branco */}
      <section 
        className="relative py-16 xl:py-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="container mx-auto max-w-full px-20 xl:px-20">
          <div className="flex flex-row items-start">
            {/* Área de conteúdo - metade da página */}
            <div className="w-2/5 xl:w-1/2 pr-6 xl:pr-8">
              <h2 className="mb-6 leading-tight text-primary" style={{ fontWeight: 'normal', lineHeight: '1.1' }}>
                <span className="text-3xl xl:text-4xl">Transforme-se na <br /> sua melhor versão</span>
              </h2>
              <p className="leading-relaxed text-primary w-md xl:w-md " style={{ lineHeight: '1.4' }}>
                <span className="text-lg font-light xl:text-xl">
                  Tratamentos odontológicos e estéticos que elevam sua autoestima, transformam sua autoimagem e refletem diretamente na sua qualidade de vida. Sinta-se muito melhor, por dentro e por fora.
                </span>
              </p>
            </div>
            {/* Espaço reservado para a imagem - metade da largura */}
            <div className="w-1/2"></div>
          </div>
        </div>
      </section>

      {/* Imagem ÚNICA - Posicionamento responsivo */}
      {/* Tablet: Absoluta cobrindo ambas as seções (1024px - 1280px) */}
      <div 
        className="hidden lg:flex xl:hidden absolute top-0 right-0 bottom-0 z-20 pointer-events-none"
        style={{
          width: 'calc(100% - 40px)',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          paddingRight: '0px',
          paddingTop: '62px',
          paddingBottom: '0px'
        }}
      >
        <div className="relative w-full" style={{ maxWidth: '700px' }}>
          <img
            src={alexandreImage}
            alt="Dr. Alexandre Santos"
            className="w-full h-auto object-contain"
            style={{ 
              filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))',
              maxHeight: '98vh'
            }}
          />
        </div>
      </div>

      {/* Desktop: Absoluta cobrindo ambas as seções (>= 1280px) */}
      <div 
        className="hidden xl:flex absolute top-0 right-0 bottom-0 z-20 pointer-events-none"
        style={{
          width: 'calc(100% - 40px)',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          paddingRight: '60px',
          paddingTop: '64px',
          paddingBottom: '0px'
        }}
      >
        <div className="relative w-full" style={{ maxWidth: '740px' }}>
          <img
            src={alexandreImage}
            alt="Dr. Alexandre Santos"
            className="w-full h-auto object-contain"
            style={{ 
              filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))',
              maxHeight: '105vh'
            }}
          />
        </div>
      </div>
    </div>
  )
}
