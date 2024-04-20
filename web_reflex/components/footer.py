import reflex as rx
import datetime


def footer() -> rx.Component:
    return rx.chakra.vstack(
        rx.image(src='favicon.ico'),
        rx.link(f'© 2022-{datetime.date.today().year} by Andres Perez, with help and thanks to MoureDev.'),
        align='center',
    )