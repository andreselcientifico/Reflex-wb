import reflex as rx
from web_reflex.styles.styles  import Size as size

def navbar() -> rx.Component:
    return rx.hstack(
        rx.text(
            "TheScientific",
        ),
        position = "sticky",
        bg="lightgray",
        padding_x=size.DEFAULT.value,
        padding_y=size.SMALL.value,
        z_index="999",
        top = "0",
    )