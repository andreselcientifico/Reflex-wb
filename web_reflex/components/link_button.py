import reflex as rx
import web_reflex.styles.styles as styles

def link_button(title:str, body : str, url: str) -> rx.Component:
    return rx.link(
        rx.chakra.button(
            rx.chakra.hstack(
                rx.icon(
                    "link",
                    width= styles.Size.BIG.value,
                    height= styles.Size.DEFAULT.value,
                    ),
                rx.chakra.vstack(
                    rx.text(title, style=styles.button_title_style),
                    rx.text(body, style=styles.button_body_style),
                    align_items= 'start'
                ),
            ),
        ),
        href=url,
        is_external=True,
        width = "100%",
    )