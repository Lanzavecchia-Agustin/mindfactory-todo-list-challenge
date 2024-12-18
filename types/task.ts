export type TaskStatus = "completed" | "inProgress" | "pending"

export interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
}

export type TaskFilter = "all" | "completed" | "inProgress" | "pending"


export interface TaskContextType {
    tasks: Task[]
    filteredTasks: Task[]
    filter: TaskFilter
    setFilter: (filter: TaskFilter) => void
    selectedTaskId: string | null
    setSelectedTaskId: (id: string | null) => void
    addTask: (task: Omit<Task, "id">) => void
    updateTask: (id: string, updates: Partial<Task>) => void
    deleteTask: (id: string) => void
  }
