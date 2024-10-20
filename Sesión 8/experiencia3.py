import reflex as rx

class FormState(rx.State):

    def submit(self, form_data):
        nombre = form_data.get("name", "")
        email = form_data.get("email", "")
        mensaje = form_data.get("message", "")

        mensajeToast = f"Formulario enviado correctamente!\nNombre: {nombre}\nEmail: {email}\nMensaje: {mensaje}"

        return rx.toast.success(mensajeToast, duration=5000, close_button=True)

def formularioContacto() -> rx.Component:
    return rx.card( 
        rx.form(
            rx.hstack( 
                rx.image(src="/animal.png",
                width="100px",
                height="auto",
                border_radius="15px 50px",
                border="5px solid #555",),
                rx.vstack(
                    rx.heading("Favor de enviar mensaje"),
                    rx.text("Llénalo y te responderemos ", rx.text.strong("lo más tarde posible."), as_="div"),
                ), align="center", justify="center",
            ),
            rx.vstack(
                rx.text(
                    "Nombre ",
                    rx.text.span("*", color="red"),
                ),
                rx.input(
                    name="name",
                    required=True,
                ), align="center", justify="center",
            ),
            rx.vstack(
                rx.text(
                    "Email ",
                    rx.text.span("*", color="red"),
                ),
                rx.input(
                    name="email",
                    type="email",
                    required=True,
                ), align="center", justify="center",
            ),
            rx.vstack(
                rx.text("Mensaje"),
                rx.text_area(
                    name="message",
                ), align="center", justify="center",
            ), 
            rx.hstack(
                rx.button("Enviar", type="submit"),
                justify="center",
            ),
            on_submit=FormState.submit, 
        )
    )

app = rx.App()
app.add_page(formularioContacto, route = "/")