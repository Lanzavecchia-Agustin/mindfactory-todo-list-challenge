import { AboutContent } from "@/components/about/AboutContent"
import { Sidebar } from "@/components/tasks/Sidebar"
import FlickeringGrid from "@/components/ui/flickering-grid"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FlickeringGrid
        squareSize={4}
        gridGap={6}
        flickerChance={0.3}
        color="#12CFF7"
        maxOpacity={0.2}
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="relative z-10 flex dark:bg-gray-950 h-screen">
        <Sidebar />
        <AboutContent />
      </div>
    </div>
  )
}
