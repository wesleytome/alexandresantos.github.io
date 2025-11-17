export interface BusinessInfo {
  name: string
  doctorName: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  phones: {
    main: string
    whatsapp: string
  }
  email: string
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
  description: string
  specialties: string[]
}

export const businessInfo: BusinessInfo = {
  name: 'Clínica Dr. Alexandre',
  doctorName: 'Dr. Alexandre',
  address: {
    street: 'Av. das Américas, 123',
    city: 'Rio de Janeiro',
    state: 'RJ',
    zipCode: '01234-567'
  },
  phones: {
    main: '(21) 98085-6000',
    whatsapp: '(21) 98085-6000'
  },
  email: 'contato@dralexandre.com.br',
  hours: {
    weekdays: 'Segunda a Sexta: 8:00 - 18:00',
    saturday: 'Sábado: 9:00 - 13:00',
    sunday: 'Domingo: Fechado'
  },
  socialMedia: {
    facebook: 'https://facebook.com/dralexandre',
    instagram: 'https://instagram.com/dralexandre',
    linkedin: 'https://linkedin.com/in/dralexandre'
  },
  description: 'Odontologia e Estética Facial com Excelência. Transformamos sorrisos e elevamos a autoestima com técnicas modernas e profissionais experientes.',
  specialties: [
    'Odontologia Estética',
    'Implantes Dentários',
    'Harmonização Orofacial',
    'Toxina Botulínica',
    'Preenchimento Facial'
  ]
}

