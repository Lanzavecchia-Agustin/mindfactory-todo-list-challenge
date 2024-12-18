"use client"

import { useState } from "react"
import { Home, CheckSquare, ChevronLeft, Menu as MenuIcon, Info } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  const toggleSidebar = () => setIsSidebarExpanded((prev) => !prev)

  return (
    <div
      className={cn(
        "bg-gray-900 flex flex-col items-center py-4 transition-all duration-300",
        isSidebarExpanded ? "w-64" : "w-16"
      )}
    >
      <nav className="flex flex-col gap-4 items-center w-full">
        <Button
          variant="link"
          size="icon"
          className="mt-auto text-gray-400 hover:text-white hidden xl:flex"
          onClick={toggleSidebar}
        >
          {isSidebarExpanded ? <ChevronLeft /> : <MenuIcon />}
        </Button>

        <SidebarIcon icon={Home} label="Inicio" href="/" isSidebarExpanded={isSidebarExpanded} />
        <SidebarIcon icon={CheckSquare} label="Tareas" href="/tasks" isSidebarExpanded={isSidebarExpanded} />
        <SidebarIcon icon={Info} label="Acerca" href="/about" isSidebarExpanded={isSidebarExpanded} />
      </nav>
    </div>
  )
}

function SidebarIcon({
  icon: Icon,
  label,
  href,
  isSidebarExpanded,
  isActive,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  label: string
  href: string
  isSidebarExpanded: boolean
  isActive?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center w-full px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors",
        isActive && "bg-gray-800",
        isSidebarExpanded ? "justify-start" : "justify-center"
      )}
    >
      <Icon className="h-5 w-5 text-gray-400" />
      {isSidebarExpanded && <span className="ml-3 text-gray-300">{label}</span>}
    </Link>
  )
}
