import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Menu } from './components/layout/Menu'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { ServiceDetail } from './pages/ServiceDetail'
import { Contact } from './pages/Contact'
import { TestimonialsPage } from './pages/TestimonialsPage'

function AppContent() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#212020' }}>
      {!isHome && (
        <div className="w-full mx-auto px-0 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: '#FFFFFF' }}>
          <Menu />
        </div>
      )}
      {/* Container global com margens laterais - fundo cinza nas margens */}
      <div className="w-full mx-auto px-0 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex-grow" style={{ backgroundColor: '#212020' }}>
        <div className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/servicos/:slug" element={<ServiceDetail />} />
              <Route path="/depoimentos" element={<TestimonialsPage />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

function App() {
  // Para GitHub Pages: se o repositório não for username.github.io, 
  // o base path será o nome do repositório
  const basePath = import.meta.env.BASE_URL || '/'
  
  return (
    <BrowserRouter basename={basePath}>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
