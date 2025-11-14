import { SEO } from '@/components/SEO'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Award, Heart, Users } from 'lucide-react'
import { businessInfo } from '@/data/businessInfo'

export function About() {
  return (
    <>
      <SEO
        title={`Sobre | ${businessInfo.name} - Odontologia e Estética`}
        description="Conheça a história e experiência do Dr. Alexandre em odontologia e estética facial."
        canonical="/sobre"
      />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">
                Nossa História
              </Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Sobre o Dr. Alexandre
              </h1>
              <p className="text-xl text-muted-foreground">
                Profissionalismo, dedicação e excelência em cada tratamento
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com mais de 10 anos de experiência em odontologia estética e harmonização facial,
                o Dr. Alexandre dedica-se a transformar sorrisos e elevar a autoestima de seus pacientes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Formado pelas melhores instituições do país e com especializações em técnicas
                avançadas de implantes, estética dental e harmonização orofacial, o Dr. Alexandre
                combina conhecimento técnico com um atendimento humanizado e personalizado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <GraduationCap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Formação</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Graduado em Odontologia com especializações em Implantodontia,
                    Estética Dental e Harmonização Orofacial.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Experiência</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Mais de 10 anos de experiência e mais de 5000 pacientes atendidos
                    com excelência e resultados comprovados.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Proporcionar tratamentos de excelência que transformem sorrisos
                    e elevem a autoestima, sempre com cuidado e atenção personalizada.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Compromisso</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprometido com a satisfação e bem-estar de cada paciente,
                    utilizando sempre as melhores técnicas e tecnologias disponíveis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

