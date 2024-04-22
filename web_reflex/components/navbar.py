import reflex as rx
from web_reflex.styles.styles  import Size as size
import web_reflex.styles.styles  as styles
from web_reflex.styles.colors import *

def navbar() -> rx.Component:
    return rx.hstack(
        rx.chakra.box(
            rx.chakra.span(
                "TheScien",
                color = Color.PRIMARY.value,
            ),
            rx.chakra.span(
                "tific",
                color = Color.SECONDARY.value,
            ),
            style= styles.navbar_title_style,
        ),
        position = "sticky",
        bg=Color.CONTENT.value,
        padding_x=size.BIG.value,
        padding_y=size.DEFAULT.value,
        z_index="999",
        top = "0",
    )