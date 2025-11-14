import { Link } from 'react-router-dom'
import { Menu, Clock, MapPin, ShoppingBag, Search, Phone } from 'lucide-react'
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

export function Header() {
  return (
    <header className="w-full bg-pearl-white">
      {/* Top Bar */}
      <div className="bg-pearl-white text-foreground text-sm py-2 border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-foreground/80">
              <Clock className="h-4 w-4" />
              <span>{businessInfo.hours.weekdays}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <MapPin className="h-4 w-4" />
              <span>
                {businessInfo.address.street}, {businessInfo.address.city}, {businessInfo.address.state}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-pearl-white">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-gold text-charcoal">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <span className="text-2xl font-heading font-bold text-foreground">
                DentiCare
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/sobre"
                className="text-foreground hover:text-rose-gold transition-colors font-medium"
              >
                Sobre nós
              </Link>
              <Link
                to="/servicos"
                className="text-foreground hover:text-rose-gold transition-colors font-medium"
              >
                Serviços
              </Link>
              <Link
                to="/depoimentos"
                className="text-foreground hover:text-rose-gold transition-colors font-medium"
              >
                Depoimentos
              </Link>
              <Link
                to="/contato"
                className="text-foreground hover:text-rose-gold transition-colors font-medium"
              >
                Contato
              </Link>
            </nav>

            {/* Right Side Icons and Button */}
            <div className="hidden md:flex items-center gap-4">
              <button
                className="text-foreground hover:text-rose-gold transition-colors p-2 relative"
                aria-label="Carrinho"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute top-0 right-0 text-xs bg-rose-gold text-charcoal rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  0
                </span>
              </button>
              <button
                className="text-foreground hover:text-rose-gold transition-colors p-2"
                aria-label="Buscar"
              >
                <Search className="h-5 w-5" />
              </button>
              <Button
                asChild
                className="bg-rose-gold hover:bg-rose-gold/90 text-white"
              >
                <a href={`tel:${businessInfo.phones.main.replace(/\D/g, '')}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  {businessInfo.phones.main}
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-foreground">
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
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary"
                    )}
                  >
                    Sobre nós
                  </Link>
                  <Link
                    to="/servicos"
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary"
                    )}
                  >
                    Serviços
                  </Link>
                  <Link
                    to="/depoimentos"
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary"
                    )}
                  >
                    Depoimentos
                  </Link>
                  <Link
                    to="/contato"
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary"
                    )}
                  >
                    Contato
                  </Link>
                  <Button asChild className="mt-4">
                    <a href={`tel:${businessInfo.phones.main.replace(/\D/g, '')}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      {businessInfo.phones.main}
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
