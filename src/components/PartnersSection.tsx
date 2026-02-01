import { Trophy, Target, Crown, Swords, Shield, Zap, Flame } from "lucide-react"

const partners = [
  { name: "1-е место SS2", icon: Trophy },
  { name: "50+ побед", icon: Target },
  { name: "TOP клан", icon: Crown },
  { name: "PVP мастера", icon: Swords },
  { name: "Легендарные", icon: Shield },
  { name: "Быстрая тактика", icon: Zap },
  { name: "Непобедимые", icon: Flame },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {partners.map((partner) => (
        <div key={partner.name} className="flex items-center gap-2 text-gray-500">
          <partner.icon className="h-4 w-4" />
          <span className="text-sm font-medium">{partner.name}™</span>
        </div>
      ))}
    </section>
  )
}