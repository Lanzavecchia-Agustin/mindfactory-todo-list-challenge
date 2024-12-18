export const aboutCards = [
  {
    id: "challenge",
    title: "Challenge Front End - React",
    description: "Desarrollo de una To-Do List Interactiva",
    content: {
      paragraphs: [
        "Este proyecto fue desarrollado como parte de un desafío de front-end utilizando React. El objetivo era crear una aplicación de lista de tareas interactiva con funcionalidades específicas y un diseño responsivo.",
      ],
      subtitle: "Características principales:",
      bullets: [
        "Agregar, editar y eliminar tareas",
        "Filtrar tareas por estado (completadas, en progreso, pendientes)",
        "Persistencia de datos utilizando localStorage",
        "Diseño responsivo utilizando Flexbox y CSS Grid",
        "Implementación de rutas con Next.js App Router",
        "Gestión de estado global con Context API",
      ],
    },
  },
  {
    id: "experience",
    title: "Mi Experiencia",
    content: {
      paragraphs: [
        "Desarrollar esta aplicación fue una experiencia enriquecedora que me permitió poner en práctica mis habilidades en React y Next.js. Algunos aspectos destacados incluyen:",
      ],
      bullets: [
        "Implementación de componentes reutilizables para una mejor organización del código",
        "Uso de hooks como useState y useEffect para manejar el estado y los efectos secundarios",
        "Creación de un diseño intuitivo y atractivo utilizando Tailwind CSS y shadcn/ui",
        "Manejo de la persistencia de datos con localStorage",
        "Implementación de filtros para mejorar la experiencia del usuario",
      ],
      finalText:
        "Este proyecto me ha ayudado a mejorar mis habilidades en el desarrollo front-end y a comprender mejor las mejores prácticas en el desarrollo de aplicaciones React modernas.",
    },
  },
  {
    id: "techs",
    title: "Tecnologías Principales",
    content: {
      bullets: [
        "React: Biblioteca principal para construir la interfaz de usuario.",
        "Next.js: Framework que facilita el enrutamiento y la renderización de páginas, además de ofrecer una configuración mínima.",
        "Tailwind CSS: Librería utilitaria de CSS para un desarrollo rápido y diseño responsivo.",
        "lucide-react: Íconos usados en los componentes (Sidebar, botones de acción, etc.).",
        "Radix UI: Base para componentes accesibles (Accordion, Dialog, DropdownMenu, Toast).",
        "Shadcn UI: Componentes de UI de alta calidad (Button, Input, Label, etc.).",
        "nanoid: Generación de IDs únicas para las tareas.",
        "Framer Motion: Animaciones (usado en AnimatedList).",
      ],
      note: "Se eligieron estas librerías para aprovechar un setup moderno, con gestión de estado simple (Context API), animaciones suaves y componentes accesibles.",
    },
  },
  {
    id: "improvements",
    title: "Mejoras para el proyecto",
    content: {
      paragraphs: [
        "Aunque esta aplicación cumple con los requerimientos mínimos del reto, hay varios puntos que se podrían optimizar:",
      ],
      bullets: [
        `Redux vs Context API: El challenge sugería el uso de Redux o Context API para el manejo global del estado. Opté por Context API debido a que la complejidad de la aplicación no era tan alta y Context resultó suficiente para este caso. Sin embargo, Redux puede ser una mejora si el proyecto crece y se requiere una arquitectura más escalable.`,
        `Unit Testing: El challenge valora los tests unitarios, pero no los implementé principalmente por tiempo y prioridad en el diseño y la funcionalidad. Añadir tests con Jest o React Testing Library sería una excelente mejora para garantizar la calidad y estabilidad del código.`,
        `Optimización de Rendimiento: Para un proyecto de mayor escala, se podrían optimizar re-renders y uso de memo. Por ahora, la aplicación es ligera y el rendimiento es suficiente.`,
      ],
      finalText:
        "En resumen, Context API ha sido suficiente dada la complejidad y el tiempo disponible. Para un proyecto más extenso o con requerimientos avanzados, Redux podría aportar una arquitectura más robusta y escalable, y los Unit Tests harían el proyecto más confiable.",
    },
  },
  {
    id: "inspiration",
    title: "Inspiración en el Diseño",
    description: "Este proyecto se inspiró en un diseño de Dribbble",
    content: {
      paragraphs: [
        "La interfaz de esta aplicación tomó inspiración de un diseño encontrado en Dribbble:",
      ],
      image: "https://cdn.dribbble.com/users/15879/screenshots/2491838/media/169732c59005f4e06ad284527d9dfd9d.png",
      finalText:
        "A partir de esta referencia visual, se buscó adaptar la paleta de colores, la distribución de los elementos y la jerarquía tipográfica para crear una experiencia de usuario más agradable y coherente.",
    },
  },
]

  
  export const faqData = [
    {
      question: "¿Cómo se agregan nuevas tareas?",
      answer:
        "Para agregar una nueva tarea, simplemente haz clic en el botón 'Nueva tarea' en la página principal, ingresa los detalles de la tarea y guarda.",
    },
    {
      question: "¿Puedo editar una tarea existente?",
      answer:
        "Sí, puedes editar una tarea existente haciendo clic en la tarea que deseas modificar y luego seleccionando la opción 'Editar' en el panel de detalles.",
    },
    {
      question: "¿Cómo elimino una tarea?",
      answer:
        "Para eliminar una tarea, selecciona la tarea que deseas eliminar y haz clic en el botón 'Eliminar' en el panel de detalles de la tarea.",
    },
    {
      question: "¿Las tareas se guardan automáticamente?",
      answer:
        "Sí, todas las tareas se guardan automáticamente en el almacenamiento local del navegador, por lo que persistirán incluso después de cerrar la página.",
    },
    {
      question: "¿Cómo puedo filtrar las tareas?",
      answer:
        "Puedes filtrar las tareas utilizando los botones de filtro en la parte superior de la lista de tareas. Puedes ver todas las tareas, solo las completadas, en progreso o pendientes.",
    },
  ]
  