import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-2">
        <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-400">НОВОЕ</span>
        <span className="text-gray-300">Турнир по Simple Sandbox 2 — набор открыт</span>
        <ArrowUpRight className="h-4 w-4 text-gray-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
        Клан <span className="text-red-500">ADD</span> — твоя команда победителей
      </h1>

      <p className="mb-8 max-w-xl text-gray-400">От эпических рейдов до доминирования на турнирах — мы покоряем Simple Sandbox 2 вместе.</p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button className="rounded-full bg-red-600 px-6 hover:bg-red-700 text-white">
          Вступить в ADD <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800">
          <Play className="mr-2 h-4 w-4 fill-red-500 text-red-500" /> Наши достижения
        </Button>
      </div>
    </section>
  )
}