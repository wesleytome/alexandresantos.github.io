import { Link } from 'react-router-dom'
import { Menu, Clock, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { businessInfo } from '@/data/businessInfo'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'

interface HeaderProps {
  transparent?: boolean
}

export function Header({ transparent = false }: HeaderProps) {
  return (
    <header className={cn("w-full", transparent ? "bg-transparent" : "bg-cream-white")}>
      {/* Top Bar */}
      <div className="text-sm py-2 border-b border-border/20" style={{ backgroundColor: 'rgb(52, 53, 58)', color: '#9bbda4' }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2" style={{ color: '#9bbda4' }}>
              <Clock className="h-4 w-4" />
              <span>{businessInfo.hours.weekdays}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: '#9bbda4' }}>
              <MapPin className="h-4 w-4" />
              <span>
                {businessInfo.address.street}, {businessInfo.address.city}, {businessInfo.address.state}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div style={{ backgroundColor: 'rgb(45 68 64)' }}>
        <div className="container mx-auto px-4">
          <div className="relative flex h-20 items-center">
            {/* Desktop Navigation - Lado esquerdo */}
            <NavigationMenu className="hidden lg:flex flex-1">
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className="transition-colors font-medium px-3 py-2 rounded-md"
                    style={{ color: '#f5f3f0' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#c1a280'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#f5f3f0'}
                  >
                    Início
                  </Link>
                </NavigationMenuItem>
                
                {/* Menu Serviços com submenus Odontologia e Estética Facial */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent data-[state=open]:bg-transparent transition-colors font-medium px-3 py-2 rounded-md"
                    style={{ color: '#f5f3f0' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#c1a280'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#f5f3f0'}
                  >
                    Serviços
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-6 bg-white rounded-lg shadow-lg border">
                      <div className="grid grid-cols-2 gap-8">
                        {/* Coluna Odontologia */}
                        <div>
                          <div className="mb-4">
                            <Link
                              to="/odontologia"
                              className="text-lg font-semibold text-foreground hover:text-sage-green transition-colors"
                            >
                              Odontologia
                            </Link>
                          </div>
                          <div className="space-y-2">
                            {services
                              .filter(s => s.category === 'odontologia')
                              .map((service) => (
                                <NavigationMenuLink key={service.id} asChild>
                                  <Link
                                    to={`/odontologia/${service.id}`}
                                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {service.title}
                                    </div>
                                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                      {service.shortDescription}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            <NavigationMenuLink asChild>
                              <Link
                                to="/odontologia"
                                className="block select-none rounded-md p-2 text-sm font-medium leading-none text-sage-green hover:bg-accent hover:text-sage-green focus:bg-accent mt-4"
                              >
                                Ver Todos os Tratamentos →
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>

                        {/* Coluna Estética Facial */}
                        <div>
                          <div className="mb-4">
                            <Link
                              to="/estetica-facial"
                              className="text-lg font-semibold text-foreground hover:text-sage-green transition-colors"
                            >
                              Estética Facial
                            </Link>
                          </div>
                          <div className="space-y-2">
                            {services
                              .filter(s => s.category === 'estetica')
                              .map((service) => (
                                <NavigationMenuLink key={service.id} asChild>
                                  <Link
                                    to={`/estetica-facial/${service.id}`}
                                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {service.title}
                                    </div>
                                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                      {service.shortDescription}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            <NavigationMenuLink asChild>
                              <Link
                                to="/estetica-facial"
                                className="block select-none rounded-md p-2 text-sm font-medium leading-none text-sage-green hover:bg-accent hover:text-sage-green focus:bg-accent mt-4"
                              >
                                Ver Todos os Procedimentos →
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/sobre-dr-alexandre"
                    className="transition-colors font-medium px-3 py-2 rounded-md"
                    style={{ color: '#f5f3f0' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#c1a280'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#f5f3f0'}
                  >
                    Quem sou eu
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link
                    to="/depoimentos"
                    className="transition-colors font-medium px-3 py-2 rounded-md"
                    style={{ color: '#f5f3f0' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#c1a280'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#f5f3f0'}
                  >
                    Depoimentos
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link
                    to="/contato"
                    className="transition-colors font-medium px-3 py-2 rounded-md"
                    style={{ color: '#f5f3f0' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#c1a280'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#f5f3f0'}
                  >
                    Contato
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Logo - Centralizado */}
            <Link to="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="relative flex items-center justify-center w-64 h-64">
                {/* Forma de escudo bege com fade de 30% */}
                <div className="absolute inset-0 logo-shield opacity-90"></div>
                {/* Logo */}
                <img 
                  src="src/images/logo-as.png" 
                  alt="Logo Alexandre Santos" 
                  className="relative h-60 w-auto z-10"
                />
              </div>
            </Link>
            
            {/* Botões lado a lado do lado direito */}
            <div className="hidden lg:flex items-center gap-3 flex-1 justify-end">
              <Button
                asChild
                className="btn-primary font-medium"
              >
                <Link to="/agendar">
                  AGENDAR
                </Link>
              </Button>
              <Button
                asChild
                className="btn-primary"
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
                    to="/"
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary"
                    )}
                  >
                    Início
                  </Link>
                  
                  <div className="space-y-3">
                    <div className="text-lg font-semibold text-foreground">Serviços</div>
                    
                    {/* Odontologia */}
                    <div className="pl-4 space-y-2">
                      <Link
                        to="/odontologia"
                        className={cn(
                          "block text-base font-semibold text-foreground transition-colors hover:text-sage-green"
                        )}
                      >
                        Odontologia
                      </Link>
                      <div className="pl-4 space-y-1">
                        {services
                          .filter(s => s.category === 'odontologia')
                          .map((service) => (
                            <Link
                              key={service.id}
                              to={`/odontologia/${service.id}`}
                              className={cn(
                                "block text-sm text-muted-foreground transition-colors hover:text-primary"
                              )}
                            >
                              {service.title}
                            </Link>
                          ))}
                        <Link
                          to="/odontologia"
                          className={cn(
                            "block text-sm text-sage-green font-medium transition-colors hover:text-sage-green/80 mt-2"
                          )}
                        >
                          Ver Todos →
                        </Link>
                      </div>
                    </div>

                    {/* Estética Facial */}
                    <div className="pl-4 space-y-2">
                      <Link
                        to="/estetica-facial"
                        className={cn(
                          "block text-base font-semibold text-foreground transition-colors hover:text-sage-green"
                        )}
                      >
                        Estética Facial
                      </Link>
                      <div className="pl-4 space-y-1">
                        {services
                          .filter(s => s.category === 'estetica')
                          .map((service) => (
                            <Link
                              key={service.id}
                              to={`/estetica-facial/${service.id}`}
                              className={cn(
                                "block text-sm text-muted-foreground transition-colors hover:text-primary"
                              )}
                            >
                              {service.title}
                            </Link>
                          ))}
                        <Link
                          to="/estetica-facial"
                          className={cn(
                            "block text-sm text-sage-green font-medium transition-colors hover:text-sage-green/80 mt-2"
                          )}
                        >
                          Ver Todos →
                        </Link>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/sobre-dr-alexandre"
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary"
                    )}
                  >
                    Quem sou eu
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
                  <Button asChild className="mt-4 btn-primary">
                    <Link to="/agendar">
                      AGENDAR
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="mt-2">
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
