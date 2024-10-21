import reflex as rx

# Función para contar tareas por estado
def contar_tareas_por_estado(tareas):
    contadores = {}
    for tarea in tareas:
        estado = tarea["estado"]
        if estado in contadores:
            contadores[estado] += 1
        else:
            contadores[estado] = 1
    return contadores

# Componente principal del tablero Kanban
def index():
    # Supongamos que 'todas_las_tareas' es una lista de diccionarios con las tareas
    todas_las_tareas = [
        {"nombre": "Tarea 1", "estado": "Pendiente"},
        {"nombre": "Tarea 2", "estado": "En Progreso"},
        {"nombre": "Tarea 3", "estado": "Completada"},
        {"nombre": "Tarea 4", "estado": "Pendiente"},
    ]
    
    contadores = contar_tareas_por_estado(todas_las_tareas)

    return rx.card(
        # Aquí irían las columnas del Kanban
        rx.heading("Columnas Kanban Aquí"),  # Placeholder para las columnas

        # Mostrar contadores
        rx.heading(f"Pendientes: {contadores.get('Pendiente', 0)}"),
        rx.heading(f"En Progreso: {contadores.get('En Progreso', 0)}"),
        rx.heading(f"Completadas: {contadores.get('Completada', 0)}")
    )

# Esto se llamaría en el entorno de Reflex para renderizar el componente

app = rx.App()
app.add_page(index)
