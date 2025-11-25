import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section 
      className="relative flex items-center"
      style={{ backgroundColor: '#7FC2B4' }}
    >
      <div className="container mx-auto px-4 md:px-8 xl:px-20 relative z-10 w-full pt-8 lg:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center min-h-[60vh] lg:min-h-[65vh] xl:min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 flex flex-col justify-center">
            {/* Nome - Dividido em 3 linhas */}
            <div className="mb-4 lg:mb-5">
              <h1 className="font-bold leading-none" style={{ color: '#FFFFFF' }}>
                <span className="block text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">Dr.</span>
                <span className="block text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Alexandre</span>
                <span className="block text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Santos</span>
              </h1>
            </div>

            {/* Especialização */}
            <div className="mb-4 lg:mb-5">
              <p 
                className="leading-relaxed" 
                style={{ 
                  color: '#FFFFFF',
                  fontWeight: 100,
                  lineHeight: '1.2'
                }}
              >
                <span className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">Odontologia</span><br />
                <span className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">avançada e</span><br />
                <span className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">Estética Facial</span>
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 lg:pt-4">
              <Link
                to="/contato"
                className="relative inline-flex items-center justify-between transition-all hover:opacity-90 overflow-hidden mb-0"
                style={{ 
                  backgroundColor: '#212020',
                  color: '#FFFFFF',
                  padding: '0 20px',
                  borderRadius: '8px'
                }}
              >
                <div className="flex flex-col py-4 lg:py-6">
                  <span className="text-2xl lg:text-3xl xl:text-4xl leading-tight font-normal">
                    Quero me
                  </span>
                  <span className="text-2xl lg:text-3xl xl:text-4xl leading-tight font-normal">
                    consultar
                  </span>
                </div>
                
                {/* SVG Lines - Canto inferior direito */}
                <svg 
                  className="absolute w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                  viewBox="0 0 60 60" 
                  fill="none" 
                  style={{ 
                    pointerEvents: 'none',
                    bottom: '12px',
                    right: '12px'
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

          {/* Right Content - Espaço reservado para imagem (será posicionada absolutamente no wrapper) */}
          <div className="hidden lg:block relative h-full"></div>
        </div>
        
        {/* Imagem na base do Hero - apenas em telas < 1024px (mobile) */}
        <div className="block lg:hidden mt-8 pb-6">
          <div className="flex justify-center items-end">
            <div className="relative w-full max-w-sm">
              {/* <img
                src={alexandreImage}
                alt="Dr. Alexandre Santos"
                className="w-full h-auto object-contain"
                style={{ 
                  filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))',
                  maxHeight: '80vh'
                }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
