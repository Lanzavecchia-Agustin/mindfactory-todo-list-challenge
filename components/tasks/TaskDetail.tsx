"use client"

import React, { useState, useEffect } from "react"
import { useTaskContext } from "@/context/TaskContext"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast" 
import { TaskStatus } from "@/types/task"

export function TaskDetails() {
  const { tasks, selectedTaskId, updateTask, deleteTask } = useTaskContext()
  const { toast } = useToast()

  const [isEditing, setIsEditing] = useState(false)
  const [tempTitle, setTempTitle] = useState("")
  const [tempDescription, setTempDescription] = useState("")
  const [tempStatus, setTempStatus] = useState<TaskStatus>("pending")

  const selectedTask = tasks.find((task) => task.id === selectedTaskId)

  useEffect(() => {
    if (selectedTask) {
      setTempTitle(selectedTask.title)
      setTempDescription(selectedTask.description)
      setTempStatus(selectedTask.status)
    }
  }, [selectedTask])

  if (!selectedTask) {
    return <div className="border-l dark:border-gray-800 p-6">Selecciona una tarea para ver sus detalles o editarla o eliminarla!</div>
  }

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault()
    updateTask(selectedTask.id, {
      title: tempTitle,
      description: tempDescription,
      status: tempStatus,
    })
    toast({
      title: "Cambios guardados",
      description: `La tarea "${tempTitle}" fue actualizada correctamente.`,
      style: {
        backgroundColor: "rgb(14 165 233)", 
        color: "white",
      },
    })
    setIsEditing(false)
  }

  const handleDeleteTask = () => {
    deleteTask(selectedTask.id)
    toast({
      title: "Tarea eliminada",
      description: `La tarea "${selectedTask.title}" se eliminó correctamente.`,
      variant: "destructive",
    })
  }

  if (isEditing) {
    return (
      <div className="border-l dark:border-gray-800 p-4 md:p-6 overflow-auto w-full md:max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Editar Tarea
        </h2>
        <form onSubmit={handleSaveChanges} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Título
            </label>
            <input
              id="title"
              className="border rounded w-full p-2 dark:bg-gray-800 dark:text-gray-100"
              value={tempTitle}
              onChange={(e) => setTempTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Descripción
            </label>
            <textarea
              id="description"
              rows={3}
              className="border rounded w-full p-2 dark:bg-gray-800 dark:text-gray-100"
              value={tempDescription}
              onChange={(e) => setTempDescription(e.target.value)}
            />
          </div>

          <div className="flex gap-2 mt-4">
            <Button type="submit">Guardar</Button>
            <Button variant="secondary" onClick={() => setIsEditing(false)}>
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    )
  }

  const statusES = {
    completed: "Completada",
    inProgress: "En Progreso",
    pending: "Pendiente",
  } as const

  return (
    <div className="border-l dark:border-gray-800 p-4 md:p-6 overflow-auto w-full md:max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {selectedTask.title}
      </h2>
      <p className="mb-2 text-gray-700 dark:text-gray-200">
        {selectedTask.description}
      </p>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        Estado: <span className="font-medium">{statusES[selectedTask.status]}</span>
      </p>

      <Button variant="outline" onClick={() => setIsEditing(true)} className="mr-2">
        Editar
      </Button>
      <Button variant="destructive" onClick={handleDeleteTask}>
        Eliminar
      </Button>
    </div>
  )
}
