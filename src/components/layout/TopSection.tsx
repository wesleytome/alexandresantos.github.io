import { ReactNode } from 'react'

interface TopSectionProps {
  children: ReactNode
}

export function TopSection({ children }: TopSectionProps) {
  return (
    <section className="w-full gradient-top-section">
      {children}
    </section>
  )
}

