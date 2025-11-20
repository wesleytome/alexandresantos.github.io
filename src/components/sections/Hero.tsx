import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section 
      className="relative flex items-center"
      style={{ backgroundColor: '#7FC2B4' }}
    >
      <div className="container mx-auto px-4 md:px-20 relative z-10 w-full pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[65vh]">
          {/* Left Content */}
          <div className="space-y-8 flex flex-col justify-center ">
            {/* Nome - Dividido em 3 linhas */}
            <div className="mb-5">
              <h1 className="font-bold leading-none" style={{ color: '#FFFFFF', fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
                <span className="block" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Dr.</span>
                <span className="block">Alexandre</span>
                <span className="block">Santos</span>
              </h1>
            </div>

            {/* Especialização */}
            <div className="mb-5">
              <p 
                className="leading-relaxed" 
                style={{ 
                  color: '#FFFFFF',
                  fontWeight: 100,
                  fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
                  lineHeight: '1.2'
                }}
              >
                Odontologia<br />avançada e<br />Estética Facial
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
                  width: '300px',
                  height: '125px',
                  padding: '0 24px',
                  borderRadius: '8px'
                }}
              >
                <div className="flex flex-col">
                  <span style={{ 
                    fontSize: '36px', 
                    lineHeight: '38px',
                    fontWeight: 400
                  }}>
                    Quero me
                  </span>
                  <span style={{ 
                    fontSize: '36px', 
                    lineHeight: '38px',
                    fontWeight: 400
                  }}>
                    consultar
                  </span>
                </div>
                
                {/* SVG Lines - Canto inferior direito */}
                <svg 
                  width="60" 
                  height="60" 
                  viewBox="0 0 60 60" 
                  fill="none" 
                  className="absolute"
                  style={{ 
                    pointerEvents: 'none',
                    bottom: '15px',
                    right: '15px'
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
      </div>
    </section>
  )
}
