import { SEO } from '@/components/SEO'
import { businessInfo } from '@/data/businessInfo'

export function Services() {
  return (
    <>
      <SEO
        title={`Serviços | ${businessInfo.name} - Odontologia e Estética`}
        description="Conheça nossos serviços em odontologia e estética facial. Implantes, clareamento, harmonização e muito mais."
        canonical="/servicos"
      />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Nossos Serviços
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma gama completa de tratamentos em odontologia e estética facial
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

