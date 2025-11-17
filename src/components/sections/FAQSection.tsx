import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const odontologiaFAQs: FAQItem[] = [
  {
    id: '1',
    question: 'Implantes doem?',
    answer: 'O procedimento de implante é realizado com anestesia local, então você não sentirá dor durante o processo. Após o procedimento, pode haver um desconforto leve que é facilmente controlado com medicação prescrita. A maioria dos pacientes relata que a dor é muito menor do que esperavam.'
  },
  {
    id: '2',
    question: 'Quanto tempo dura o clareamento?',
    answer: 'O clareamento dental profissional pode durar de 1 a 2 anos, dependendo dos cuidados do paciente. Para manter os resultados por mais tempo, é importante evitar alimentos e bebidas que mancham os dentes, como café, chá, vinho tinto e fumo. Também recomendamos manutenções periódicas.'
  },
  {
    id: '3',
    question: 'Lentes danificam os dentes?',
    answer: 'Não, as lentes de contato dental são extremamente finas e o procedimento é minimamente invasivo. Apenas uma pequena camada do esmalte dental é removida (menos de 0,5mm), o que é necessário para a adesão das lentes. Quando realizadas por um profissional experiente, as lentes não danificam os dentes e podem durar mais de 15 anos.'
  }
]

const esteticaFAQs: FAQItem[] = [
  {
    id: '1',
    question: 'Harmonização é definitiva?',
    answer: 'A harmonização orofacial não é definitiva. Os resultados variam de acordo com o procedimento realizado. Toxina botulínica dura de 4 a 6 meses, enquanto preenchimentos com ácido hialurônico podem durar de 12 a 18 meses. O corpo absorve gradualmente os materiais, então é necessário fazer manutenções periódicas para manter os resultados.'
  },
  {
    id: '2',
    question: 'Toxina botulínica deixa o rosto "congelado"?',
    answer: 'Não, quando aplicada corretamente por um profissional experiente, a toxina botulínica não deixa o rosto "congelado". O objetivo é suavizar rugas e linhas de expressão mantendo a naturalidade dos movimentos faciais. Utilizamos técnicas precisas e doses adequadas para cada paciente, garantindo resultados naturais e harmoniosos.'
  },
  {
    id: '3',
    question: 'Qual a diferença entre preenchimento e botox?',
    answer: 'O Botox (toxina botulínica) relaxa os músculos faciais, suavizando rugas dinâmicas (de expressão) como pés de galinha e rugas da testa. O preenchimento facial utiliza ácido hialurônico para restaurar volume, preencher rugas estáticas (que aparecem mesmo sem fazer expressões) e realçar traços faciais como lábios e maçãs do rosto. Ambos podem ser combinados para resultados mais completos.'
  }
]

const geralFAQs: FAQItem[] = [
  {
    id: '1',
    question: 'Aceita convênio?',
    answer: 'Atualmente trabalhamos com alguns planos odontológicos selecionados. Para verificar se seu convênio é aceito, entre em contato conosco pelo telefone ou WhatsApp. Também oferecemos opções de parcelamento e financiamento para facilitar o acesso aos tratamentos.'
  },
  {
    id: '2',
    question: 'Tem estacionamento?',
    answer: 'Sim, nossa clínica possui estacionamento próprio e gratuito para nossos pacientes. O estacionamento está localizado nas dependências da clínica, oferecendo comodidade e segurança durante sua visita.'
  },
  {
    id: '3',
    question: 'Como agendar?',
    answer: 'Você pode agendar sua consulta de várias formas: pelo telefone durante nosso horário de funcionamento, através do WhatsApp para maior comodidade, ou preenchendo o formulário de contato em nosso site. Nossa equipe entrará em contato para confirmar o melhor horário disponível para você.'
  }
]

export function FAQSection() {
  return (
    <section 
      className="py-20 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">
            <span className="section-heading-primary">Perguntas</span>{' '}
            <span className="section-heading-accent">Frequentes</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos tratamentos e procedimentos
          </p>
        </div>

        {/* Tabs com Accordion */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="odontologia" className="w-full">
            <TabsList className="mb-8 bg-muted/50 w-full justify-start">
              <TabsTrigger
                value="odontologia"
                className="data-[state=active]:bg-white data-[state=active]:text-foreground"
              >
                Odontologia
              </TabsTrigger>
              <TabsTrigger
                value="estetica"
                className="data-[state=active]:bg-white data-[state=active]:text-foreground"
              >
                Estética Facial
              </TabsTrigger>
              <TabsTrigger
                value="geral"
                className="data-[state=active]:bg-white data-[state=active]:text-foreground"
              >
                Geral
              </TabsTrigger>
            </TabsList>

            {/* Tab Odontologia */}
            <TabsContent value="odontologia" className="mt-0">
              <Accordion type="single" collapsible className="w-full">
                {odontologiaFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            {/* Tab Estética Facial */}
            <TabsContent value="estetica" className="mt-0">
              <Accordion type="single" collapsible className="w-full">
                {esteticaFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            {/* Tab Geral */}
            <TabsContent value="geral" className="mt-0">
              <Accordion type="single" collapsible className="w-full">
                {geralFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

