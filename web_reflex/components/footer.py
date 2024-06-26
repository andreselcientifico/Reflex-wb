import reflex as rx
import datetime
from web_reflex.styles.styles import Size as size
from web_reflex.styles.colors import *


def footer() -> rx.Component:
    return rx.chakra.vstack(
        rx.image(src='favicon.ico'),
        rx.link(
                f'© 2022-{datetime.date.today().year} with help and thanks to MoureDev.',
                href= 'https://moure.dev/',
                is_external=True,
                font_size = size.MEDIUM.value,
            ),
        rx.text(
                'This website is made with ❤️ and ☕ by Andres Perez.', 
                font_size = size.MEDIUM.value,
                margin_top = size.ZERO.value,
            ),
        margin_bottom = size.BIG.value,
        padding_bottom = size.BIG.value,
        color = TextColor.FOOTER.value,
    )