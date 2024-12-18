"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTaskContext } from "@/context/TaskContext"
import { useToast } from "@/hooks/use-toast"

export function NewTaskModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { addTask } = useTaskContext()
  const { toast } = useToast()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addTask({ title, description, status: "pending" })
    toast({
      title: "Tarea Agregada",
      description: `Se agregó la tarea "${title}" exitosamente.`,
      style: {
        backgroundColor: "rgb(14 165 233)",
        color: "white",
      },
    })
    setTitle("")
    setDescription("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar Nueva Tarea</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Descripción</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Button type="submit">Agregar</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
