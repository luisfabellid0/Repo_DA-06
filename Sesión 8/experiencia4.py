import reflex as rx
import requests as rq

class APIState(rx.State):
    listaDragones: list[dict] = []

    @rx.background
    async def getDragones(self):
        async with self:
            response = rq.get('https://dragondex-api.nrmnqdds.com/dragons')
            dragons = response.json()
            for dragon in dragons:
                dragon['dragonImageUrl'] = dragon['dragonImageUrl'].rsplit('/revision/', 1)[0] + '/' 
            self.listaDragones = dragons

    @rx.var
    def getDragonesACards(self) -> list[dict]:
        listarDragonACard: list[dict] = []
        for dragon in self.listaDragones:
            listarDragonACard.append(dragon)
        return listarDragonACard

@rx.page(route = "/", title='Wea', on_load=APIState.getDragones)
def dragones() -> rx.Component:
    return rx.vstack(
        rx.heading("Dragon City", size='8'),
        rx.grid(
            rx.foreach(APIState.getDragonesACards, cardDragon), columns="4", spacing="3", align="center", justify="center",
        ), 
        rx.button('Mostrar dragones', on_click=rx.console_log(APIState.getDragonesACards)), align="center", justify="center",
    ), 

def cardDragon(dragon : dict) -> rx.Component:
    return rx.card(
        rx.heading(dragon['dragonName'], align="center"), 
        rx.image(src=dragon['dragonImageUrl'], height="200px"),
    )

app = rx.App()