import { Task } from "@/types/task"
import { nanoid } from "nanoid"

export const tasksExamples: Task[] = [
    {
      id: nanoid(),
      title: "Rediseñar la página de inicio (tarea de ejemplo)",
      description: "Actualizar el layout y el contenido principal.",
      status: "pending",
    },
    {
      id: nanoid(),
      title: "Implementar login de usuario (tarea de ejemplo)",
      description: "Añadir autenticación y seguridad básica.",
      status: "inProgress",
    },
    {
      id: nanoid(),
      title: "Corregir bug en el footer (tarea de ejemplo)",
      description: "El footer se superpone al contenido en pantallas pequeñas.",
      status: "completed",
    },
    {
      id: nanoid(),
      title: "Reunión con el equipo de marketing (tarea de ejemplo)",
      description: "Discutir la estrategia de lanzamiento del nuevo producto.",
      status: "pending",
    },
    {
      id: nanoid(),
      title: "Refactorizar endpoints de la API (tarea de ejemplo)",
      description: "Limpiar código y mejorar la estructura de las rutas.",
      status: "inProgress",
    },
    {
      id: nanoid(),
      title: "Publicar notas de la última versión (tarea de ejemplo)",
      description: "Escribir el changelog y avisar a los clientes.",
      status: "completed",
    },
    {
      id: nanoid(),
      title: "Optimizar imágenes para la web (tarea de ejemplo)",
      description: "Reducir el tamaño de los archivos y mejorar el SEO.",
      status: "inProgress",
    },
    {
      id: nanoid(),
      title: "Crear tutorial de onboarding (tarea de ejemplo)",
      description: "Explicar a nuevos usuarios cómo usar la plataforma.",
      status: "pending",
    },
    {
      id: nanoid(),
      title: "Revisar pull requests pendientes (tarea de ejemplo)",
      description: "Aceptar o rechazar los cambios tras la revisión.",
      status: "completed",
    },
    {
      id: nanoid(),
      title: "Desplegar la app en staging (tarea de ejemplo)",
      description: "Preparar la versión para pruebas internas.",
      status: "pending",
    },
  ]