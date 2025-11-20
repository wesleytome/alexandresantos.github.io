import { Hero } from './Hero'
import { TransformSection } from './TransformSection'
import alexandreImage from '@/images/alexandre-santos.png'

export function HeroWithTransform() {
  return (
    <div className="relative">
      <Hero />
      <TransformSection />
      
      {/* Imagem posicionada absolutamente para cobrir ambas as seções */}
      <div 
        className="hidden lg:block absolute top-0 right-0 bottom-0 z-20 pointer-events-none"
        style={{
          width: 'calc(100% - 40px)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          paddingRight: '0px',
          paddingTop: '69px',
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
              maxHeight: '102vh'
            }}
          />
        </div>
      </div>
    </div>
  )
}

