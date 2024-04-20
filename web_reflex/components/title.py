import reflex as rx
import web_reflex.styles.styles as styles


def title(text : str) -> rx.Component:
    return rx.chakra.heading(
        text,
        size= "lg",
        style=styles.title_style,
    )