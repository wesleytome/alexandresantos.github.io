import implanteImage from '@/images/services/implante-dentario.jpg'
import clareamentoImage from '@/images/services/clareamento-dental.jpg'
import lentesImage from '@/images/services/lentes-de-contato-dental.jpg'

export interface Service {
  id: string
  category: 'odontologia' | 'estetica'
  title: string
  shortDescription: string
  fullDescription: string
  benefits: string[]
  image: string
  icon: string
  price?: string
  duration?: string
  recovery?: string
}

export const services: Service[] = [
  {
    id: 'implantes-dentarios',
    category: 'odontologia',
    title: 'Implantes Dentários',
    shortDescription: 'Recupere seu sorriso com implantes de alta tecnologia e durabilidade excepcional.',
    fullDescription: 'Os implantes dentários são a solução mais moderna e eficaz para substituir dentes perdidos. Utilizamos tecnologia de ponta e materiais de alta qualidade para garantir resultados duradouros e naturais. O procedimento é realizado com anestesia local e oferece uma taxa de sucesso superior a 95%.',
    benefits: [
      'Durabilidade superior a 20 anos',
      'Estética natural e imperceptível',
      'Conforto e funcionalidade como dentes naturais',
      'Preserva a estrutura óssea facial',
      'Não compromete dentes adjacentes'
    ],
    image: implanteImage,
    icon: 'tooth',
    price: 'A partir de R$ 2.500',
    duration: '45-60 minutos',
    recovery: '3-6 meses'
  },
  {
    id: 'clareamento-dental',
    category: 'odontologia',
    title: 'Clareamento Dental',
    shortDescription: 'Sorriso mais branco e radiante em poucas sessões com tecnologia avançada.',
    fullDescription: 'O clareamento dental profissional oferece resultados visíveis e duradouros. Utilizamos técnicas modernas e produtos de alta qualidade para clarear seus dentes de forma segura e eficaz, respeitando a saúde bucal.',
    benefits: [
      'Resultados visíveis em poucas sessões',
      'Técnica segura e comprovada',
      'Durabilidade de até 2 anos',
      'Procedimento indolor',
      'Acompanhamento profissional'
    ],
    image: clareamentoImage,
    icon: 'sparkles',
    price: 'A partir de R$ 800',
    duration: '60-90 minutos',
    recovery: 'Imediato'
  },
  {
    id: 'lentes-de-contato-dental',
    category: 'odontologia',
    title: 'Lentes de Contato Dental',
    shortDescription: 'Transforme seu sorriso com lentes finas e personalizadas de porcelana.',
    fullDescription: 'As lentes de contato dental são uma solução estética revolucionária para corrigir imperfeições e criar um sorriso perfeito. Feitas de porcelana de alta qualidade, são extremamente finas e proporcionam resultados naturais e duradouros.',
    benefits: [
      'Correção de imperfeições',
      'Resultado natural e imperceptível',
      'Durabilidade superior a 15 anos',
      'Procedimento minimamente invasivo',
      'Personalização completa'
    ],
    image: lentesImage,
    icon: 'smile',
    price: 'A partir de R$ 1.500',
    duration: '2-3 sessões',
    recovery: '3-7 dias'
  },
  {
    id: 'ortodontia',
    category: 'odontologia',
    title: 'Ortodontia',
    shortDescription: 'Alinhamento dental com aparelhos modernos e discretos para um sorriso perfeito.',
    fullDescription: 'Tratamento ortodôntico completo com aparelhos fixos, móveis e alinhadores transparentes. Corrigimos problemas de alinhamento, mordida e espaçamento dental.',
    benefits: [
      'Aparelhos modernos e discretos',
      'Alinhadores transparentes disponíveis',
      'Correção de mordida e alinhamento',
      'Resultados duradouros',
      'Acompanhamento personalizado'
    ],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop',
    icon: 'tooth',
    price: 'A partir de R$ 1.800',
    duration: '12-24 meses',
    recovery: 'Contínuo'
  },
  {
    id: 'protese-dentaria',
    category: 'odontologia',
    title: 'Prótese Dentária',
    shortDescription: 'Reabilitação completa com próteses fixas e móveis de alta qualidade.',
    fullDescription: 'Fabricamos próteses dentárias personalizadas, tanto fixas quanto móveis, utilizando materiais de última geração para máxima durabilidade e estética.',
    benefits: [
      'Próteses fixas e móveis',
      'Materiais de alta qualidade',
      'Estética natural',
      'Conforto e funcionalidade',
      'Durabilidade superior'
    ],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop',
    icon: 'tooth',
    price: 'A partir de R$ 2.000',
    duration: '2-4 sessões',
    recovery: '7-14 dias'
  },
  {
    id: 'endodontia',
    category: 'odontologia',
    title: 'Endodontia',
    shortDescription: 'Tratamento de canal com técnicas modernas e indolores para preservar seus dentes.',
    fullDescription: 'Tratamento endodôntico (canal) realizado com técnicas modernas, equipamentos de última geração e anestesia eficaz, garantindo conforto e preservação do dente.',
    benefits: [
      'Técnicas modernas e indolores',
      'Preservação do dente natural',
      'Equipamentos de última geração',
      'Anestesia eficaz',
      'Alta taxa de sucesso'
    ],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop',
    icon: 'tooth',
    price: 'A partir de R$ 800',
    duration: '1-2 sessões',
    recovery: '2-3 dias'
  },
  {
    id: 'harmonizacao-orofacial',
    category: 'estetica',
    title: 'Harmonização Orofacial',
    shortDescription: 'Equilibre e harmonize os traços faciais com técnicas avançadas de estética.',
    fullDescription: 'A harmonização orofacial combina técnicas odontológicas e estéticas para criar um equilíbrio perfeito entre os traços faciais. Utilizamos toxina botulínica e preenchimentos para realçar sua beleza natural.',
    benefits: [
      'Resultado natural e harmonioso',
      'Procedimento rápido e seguro',
      'Sem necessidade de cirurgia',
      'Resultados imediatos',
      'Técnicas minimamente invasivas'
    ],
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: 'face',
    price: 'A partir de R$ 1.200',
    duration: '30-45 minutos',
    recovery: 'Imediato'
  },
  {
    id: 'toxina-botulinica',
    category: 'estetica',
    title: 'Toxina Botulínica',
    shortDescription: 'Suavize rugas e linhas de expressão com resultados naturais e duradouros.',
    fullDescription: 'A aplicação de toxina botulínica é um dos procedimentos estéticos mais procurados para suavizar rugas e linhas de expressão. Realizado por profissionais experientes, oferece resultados naturais e duradouros.',
    benefits: [
      'Suavização de rugas e linhas',
      'Resultados em 3-5 dias',
      'Duração de 4-6 meses',
      'Procedimento rápido e seguro',
      'Aspecto natural'
    ],
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: 'syringe',
    price: 'A partir de R$ 600',
    duration: '15-30 minutos',
    recovery: 'Imediato'
  },
  {
    id: 'preenchimento-facial',
    category: 'estetica',
    title: 'Preenchimento Facial',
    shortDescription: 'Recupere volume e juventude com preenchimentos de última geração.',
    fullDescription: 'O preenchimento facial utiliza ácido hialurônico de alta qualidade para restaurar volume, suavizar rugas e realçar traços faciais. Resultados imediatos e naturais com durabilidade de até 18 meses.',
    benefits: [
      'Restauração de volume facial',
      'Resultados imediatos',
      'Durabilidade de 12-18 meses',
      'Material biocompatível',
      'Procedimento seguro e testado'
    ],
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: 'droplet',
    price: 'A partir de R$ 1.000',
    duration: '30-45 minutos',
    recovery: '24-48 horas'
  }
]

