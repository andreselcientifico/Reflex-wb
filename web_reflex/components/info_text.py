import reflex as rx
from web_reflex.styles.styles import Size as size

def info_text(title : str, body : str):
    return rx.chakra.box(
        rx.chakra.span(title, font_weight = "bold", color = "blue"),
        f' {body}', fonr_size = size.MEDIUM.value, color = "black"
    )