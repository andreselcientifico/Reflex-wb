import reflex as rx
from web_reflex.styles.styles import Size as size
import web_reflex.styles.styles  as styles

def link_button(title:str, body : str, url: str) -> rx.Component:
    return rx.link(
        rx.chakra.button(
            rx.chakra.hstack(
                rx.icon(
                    "link",
                    width= size.BIG.value,
                    height= size.DEFAULT.value,
                    margin= size.MEDIUM.value,
                    ),
                rx.chakra.vstack(
                    rx.text(title, style=styles.button_title_style),
                    rx.text(body, style=styles.button_body_style),
                    spacing= size.SMALL.value,
                    align_items= 'start',
                    margin= size.ZERO.value,
                ),
            ),
        ),
        href=url,
        is_external=True,
        width = "100%",
    )