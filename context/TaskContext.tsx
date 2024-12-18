"use client"

import { tasksExamples } from "@/constants/tasksExamples"
import React, { createContext, useContext, useState, useEffect, useMemo } from "react"
import { nanoid } from "nanoid"
import { Task, TaskContextType, TaskFilter } from "@/types/task"



const TaskContext = createContext<TaskContextType | undefined>(undefined)

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(tasksExamples)

  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
  const [filter, setFilter] = useState<TaskFilter>("all")

  useEffect(() => {
    const storedData = window.localStorage.getItem("myapp.tasks")
    if (storedData) {
      setTasks(JSON.parse(storedData))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("myapp.tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task: Omit<Task, "id">) => {
    const newTask: Task = {id: nanoid(), ...task }
    setTasks((prev) => [...prev, newTask])
  }

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updates } : task))
    )
  }

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
    if (selectedTaskId === id) {
      setSelectedTaskId(null)
    }
  }

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "completed") return task.status === "completed"
      if (filter === "inProgress") return task.status === "inProgress"
      if (filter === "pending") return task.status === "pending"
      return true 
    })
  }, [tasks, filter])

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filteredTasks,
        filter,
        setFilter,
        selectedTaskId,
        setSelectedTaskId,
        addTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export function useTaskContext() {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider")
  }
  return context
}
