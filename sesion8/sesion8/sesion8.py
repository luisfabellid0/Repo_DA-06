import reflex as rx

# Estado global que almacena la lista de tareas
class EstadoTareas(rx.State):
    tareas = ["Tarea 1", "Tarea 2"]

    # Método asíncrono para agregar una nueva tarea a la lista
    async def agregar_tarea(self, nueva_tarea: str):
        if nueva_tarea:  # Verificar que no esté vacía la nueva tarea
            self.tareas.append(nueva_tarea)  # Agregar la nueva tarea a la lista

# Componente para mostrar la lista de tareas
def ListaTareas():
    return rx.fragment(
        rx.heading("Lista de Tareas"),
        # Usamos rx.foreach para iterar sobre la lista de tareas y creamos elementos <li> y <ul>
        rx.el(tag="ul",  # Usamos el tag "ul" para definir una lista no ordenada
            rx.foreach(EstadoTareas.tareas, lambda tarea: rx.el(tag="li", children=[tarea]))  # Cada tarea será un <li>
        )
    )

# Componente para agregar nuevas tareas
def AgregarTarea():
    # Input donde el usuario escribirá la nueva tarea
    nueva_tarea_input = rx.input(placeholder="Agregar tarea...", id="nueva_tarea")

    return rx.fragment(
        nueva_tarea_input,  # Campo de entrada para la nueva tarea
        rx.button(
            "Agregar", 
            on_click=lambda: EstadoTareas.agregar_tarea(nueva_tarea_input.value)  # Agregar tarea al hacer clic
        )
    )

# Crear la aplicación Reflex
app = rx.App()

# Añadir la página principal que muestra ambos componentes
app.add_page(
    lambda: rx.fragment(
        ListaTareas(),  # Componente que muestra la lista de tareas
        AgregarTarea()  # Componente que permite agregar nuevas tareas
    ), 
    route="/"
)

# Ejecutar la aplicación
app.run()
