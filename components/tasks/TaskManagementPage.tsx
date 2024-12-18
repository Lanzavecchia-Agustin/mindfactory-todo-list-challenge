"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { Sidebar } from "./Sidebar"
import { TaskDetails } from "./TaskDetail"
import { TaskList } from "./TaskList"
import { NewTaskModal } from "./NewTaskModal"

export function TaskManagementPage() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false)

  return (
    <div className="h-screen flex dark:bg-gray-950">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header 
        className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-4xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-gray-100">
            Mis Tareas
        </h1>
            <Button onClick={() => setIsNewTaskModalOpen(true)}>
                <PlusIcon className="h-4 w-4 mr-2" />
                Nueva tarea
            </Button>
        </header>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr,400px] overflow-hidden">
          <main className="p-6 overflow-auto">
            <TaskList />
          </main>

            <TaskDetails />
        </div>
      </div>

      <NewTaskModal
        isOpen={isNewTaskModalOpen}
        onClose={() => setIsNewTaskModalOpen(false)}
      />
    </div>
  )
}
