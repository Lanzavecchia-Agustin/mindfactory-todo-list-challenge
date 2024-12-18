"use client"

import React, { useState } from "react"
import { useTaskContext } from "@/context/TaskContext"
import { cn } from "@/lib/utils"
import { AnimatedList } from "../ui/animated-list"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, CheckCircle, Clock, RotateCcw, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast" 
import { TaskStatus } from "@/types/task"

export function TaskList() {
  const {
    filteredTasks,
    selectedTaskId,
    filter,
    setFilter,
    setSelectedTaskId,
    updateTask,
  } = useTaskContext()

  const { toast } = useToast() 
  const [textFilter, setTextFilter] = useState("")

  const statusES: Record<TaskStatus, string> = {
    completed: "Completada",
    inProgress: "En Progreso",
    pending: "Pendiente",
  }

  const statusColors: Record<TaskStatus, string> = {
    completed: "bg-green-500",
    inProgress: "bg-blue-500",
    pending: "bg-yellow-500",
  }

  const filteredTasksByText = filteredTasks.filter((task) =>
    task.title.toLowerCase().includes(textFilter.toLowerCase()) ||
    task.description.toLowerCase().includes(textFilter.toLowerCase())
  )

  const handleUpdateStatus = (taskId: string, newStatus: TaskStatus) => {
    const task = filteredTasks.find(t => t.id === taskId)
    if (!task) return
    updateTask(taskId, { status: newStatus })

    if (newStatus === "completed") {
      toast({
        title: "Tarea Completada",
        description: `La tarea "${task.title}" se marcó como completada.`,
        style: {
          backgroundColor: "rgb(34 197 94)", 
          color: "white",
        },
      })
    } else {
      const bgColor = newStatus === "inProgress" ? "rgb(59 130 246)" : "rgb(234 179 8)" 
      toast({
        title: "Estado Actualizado",
        description: `La tarea "${task.title}" ahora está ${statusES[newStatus]}.`,
        style: {
          backgroundColor: bgColor,
          color: "white",
        },
      })
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4">
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Buscar tareas..."
            value={textFilter}
            onChange={(e) => setTextFilter(e.target.value)}
            className="pl-10 w-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>

        <div className="grid grid-cols-2 lg:flex gap-2 flex-wrap">
          {["all", "completed", "inProgress", "pending"].map((filterOption) => (
            <Button
              key={filterOption}
              onClick={() => setFilter(filterOption as TaskStatus | "all")}
              variant={filter === filterOption ? "default" : "outline"}
              size="sm"
              className="w-full lg:w-auto"
            >
              {filterOption === "all" ? "Todas" : statusES[filterOption as TaskStatus]}
            </Button>
          ))}
        </div>
      </div>

      <AnimatedList delay={0.5}>
        {filteredTasksByText.map((task) => (
          <div
            key={task.id}
            onClick={() => setSelectedTaskId(task.id)}
            className={cn(
              "rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer",
              selectedTaskId === task.id && "ring-2 ring-blue-500 dark:ring-blue-400",
              task.status === "completed" && "bg-green-50 dark:bg-green-950/20",
              task.status === "inProgress" && "bg-blue-50 dark:bg-blue-950/20",
              task.status === "pending" && "bg-yellow-50 dark:bg-yellow-950/20"
            )}
          >
            <div className="border-b border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 lg:mb-0 lg:mr-2">
                  Estado actual: {statusES[task.status]}
                </span>

                <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-auto">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 lg:mb-0 lg:mr-2 flex items-center">
                    Cambiar estado:
                  </div>

                  <div className="hidden lg:flex gap-2">
                    {task.status !== "completed" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleUpdateStatus(task.id, "completed")
                        }}
                        className="text-green-600 hover:text-green-700 hover:bg-green-50"
                      >
                        <CheckCircle size={16} className="mr-1" />
                        Completar
                      </Button>
                    )}
                    {task.status !== "inProgress" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleUpdateStatus(task.id, "inProgress")
                        }}
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        <Clock size={16} className="mr-1" />
                        En Progreso
                      </Button>
                    )}
                    {task.status !== "pending" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleUpdateStatus(task.id, "pending")
                        }}
                        className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                      >
                        <RotateCcw size={16} className="mr-1" />
                        Pendiente
                      </Button>
                    )}
                  </div>

                  <div className="xl:hidden">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full lg:hidden" size="sm">
                          Cambiar estado <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {task.status !== "completed" && (
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation()
                              handleUpdateStatus(task.id, "completed")
                            }}
                          >
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>Completar</span>
                          </DropdownMenuItem>
                        )}
                        {task.status !== "inProgress" && (
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation()
                              handleUpdateStatus(task.id, "inProgress")
                            }}
                          >
                            <Clock className="mr-2 h-4 w-4 text-blue-500" />
                            <span>En Progreso</span>
                          </DropdownMenuItem>
                        )}
                        {task.status !== "pending" && (
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation()
                              handleUpdateStatus(task.id, "pending")
                            }}
                          >
                            <RotateCcw className="mr-2 h-4 w-4 text-yellow-500" />
                            <span>Pendiente</span>
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "h-4 w-4 rounded-full transition-all duration-200 mt-1.5",
                    statusColors[task.status],
                    "transform hover:scale-110"
                  )}
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 text-lg truncate">
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mt-1">
                    {task.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </AnimatedList>
    </div>
  )
}
