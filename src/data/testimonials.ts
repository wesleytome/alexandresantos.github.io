export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  date: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    location: 'São Paulo, SP',
    rating: 5,
    text: 'Excelente atendimento! O Dr. Alexandre é muito profissional e atencioso. Meu tratamento com implantes foi perfeito, sem dor e com resultados incríveis. Recomendo muito!',
    date: '2024-01-15',
    avatar: '/images/avatar-maria.jpg'
  },
  {
    id: '2',
    name: 'João Santos',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    text: 'Fiz clareamento dental e fiquei muito satisfeito com o resultado. A equipe é muito competente e o ambiente da clínica é acolhedor. Voltarei para outros tratamentos!',
    date: '2024-02-20',
    avatar: '/images/avatar-joao.jpg'
  },
  {
    id: '3',
    name: 'Ana Costa',
    location: 'Belo Horizonte, MG',
    rating: 5,
    text: 'A harmonização orofacial que fiz com o Dr. Alexandre superou minhas expectativas. Resultado natural e profissionalismo de primeira. Estou muito feliz!',
    date: '2024-03-10',
    avatar: '/images/avatar-ana.jpg'
  },
  {
    id: '4',
    name: 'Carlos Oliveira',
    location: 'Curitiba, PR',
    rating: 5,
    text: 'Profissional excepcional! Fiz lentes de contato dental e o resultado foi perfeito. Meu sorriso ficou exatamente como eu queria. Muito obrigado!',
    date: '2024-03-25',
    avatar: '/images/avatar-carlos.jpg'
  },
  {
    id: '5',
    name: 'Patricia Lima',
    location: 'Porto Alegre, RS',
    rating: 5,
    text: 'O tratamento com toxina botulínica foi excelente. Resultado natural e duradouro. O Dr. Alexandre é muito cuidadoso e detalhista. Recomendo!',
    date: '2024-04-05',
    avatar: '/images/avatar-patricia.jpg'
  }
]

