import { Link } from 'react-router-dom'
import { Menu, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { businessInfo } from '@/data/businessInfo'
import { cn } from '@/lib/utils'

interface HeaderProps {
  transparent?: boolean
}

export function Header({ transparent = false }: HeaderProps) {
  return (
    <header className={cn("w-full", transparent ? "bg-transparent absolute top-0 left-0 right-0 z-50" : "bg-white")}>
      {/* Top Navigation Bar */}
      <div 
        className="w-full py-4"
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <div className="container mx-auto px-4 md:px-20">
          <div className="flex justify-between items-center">
            {/* Left Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                to="/sobre"
                className="px-4 py-2 rounded-md font-medium transition-colors"
                style={{ 
                  backgroundColor: '#7FC2B4',
                  color: '#FFFFFF'
                }}
              >
                Conheça
              </Link>
              <Link
                to="/servicos"
                className="font-medium transition-colors hover:opacity-70"
                style={{ color: '#212020' }}
              >
                Serviços
              </Link>
              <Link
                to="/depoimentos"
                className="font-medium transition-colors hover:opacity-70"
                style={{ color: '#212020' }}
              >
                Depoimentos
              </Link>
              <Link
                to="/contato"
                className="font-medium transition-colors hover:opacity-70"
                style={{ color: '#212020' }}
              >
                Marque sua consulta
              </Link>
            </nav>

            {/* Right Phone */}
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" style={{ color: '#212020' }} />
              <a 
                href={`tel:${businessInfo.phones.main.replace(/\D/g, '')}`}
                className="font-medium transition-colors hover:opacity-70"
                style={{ color: '#212020' }}
              >
                {businessInfo.phones.main}
              </a>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" style={{ color: '#212020' }}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    to="/sobre"
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    Conheça
                  </Link>
                  <Link
                    to="/servicos"
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    Serviços
                  </Link>
                  <Link
                    to="/depoimentos"
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    Depoimentos
                  </Link>
                  <Link
                    to="/contato"
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    Marque sua consulta
                  </Link>
                  <a 
                    href={`tel:${businessInfo.phones.main.replace(/\D/g, '')}`}
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <Phone className="h-5 w-5" />
                    {businessInfo.phones.main}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
