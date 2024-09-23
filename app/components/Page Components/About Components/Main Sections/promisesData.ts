import { Cpu, DollarSign, Scan, Zap } from 'lucide-react'

export interface Promise {
  title: string
  description: string
  icon: React.ElementType
  color: string
}

export const promises: Promise[] = [
  {
    title: 'Tailored Solutions',
    description: "We understand that one size doesn't fit all. Our recommendations are based on your unique needs, not our preferences.",
    icon: Scan,
    color: 'from-[hsl(170,35%,54%)] to-[hsl(170,35%,44%)]'
  },
  {
    title: 'Cutting-Edge Expertise',
    description: 'As passionate tech enthusiasts, were always ahead of the curve on emerging trends and best practices.',
    icon: Cpu,
    color: 'from-[hsl(170,35%,44%)] to-[hsl(170,35%,34%)]'
  },
  {
    title: 'Agility and Speed',
    description: 'Our lean team structure means we can deliver results fast, without the bureaucratic slowdown.',
    icon: Zap,
    color: 'from-[hsl(170,35%,34%)] to-[hsl(170,35%,24%)]'
  },
  {
    title: 'Affordability',
    description: "We've optimized our processes to offer top-tier consulting at competitive rates.",
    icon: DollarSign,
    color: 'from-[hsl(170,35%,24%)] to-[hsl(170,35%,14%)]'
  }
]
