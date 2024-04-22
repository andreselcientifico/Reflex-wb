import reflex as rx
from web_reflex.styles.styles import Size as size
from web_reflex.styles.colors import *

def info_text(title : str, body : str):
    return rx.chakra.box(
        rx.chakra.span(
            title, 
            font_weight = "bold", 
            color = Color.PRIMARY.value,
        ),
        f' {body}', 
        fonr_size = size.MEDIUM.value,
        color = TextColor.BODY.value,
    )