import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <ADDLogo />
        <span className="text-lg font-semibold text-white">
          ADD CLAN<sup className="text-xs">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          О клане
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Достижения <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Участники
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Правила
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-red-500 text-red-400 hover:bg-red-500/10 hover:text-red-300 bg-transparent"
      >
        Вступить в клан
      </Button>
    </header>
  )
}

function ADDLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="16" height="16" stroke="#EF4444" strokeWidth="2" fill="none" />
      <path d="M8 12 L12 8 L16 12 L12 16 Z" fill="#EF4444" />
    </svg>
  )
}