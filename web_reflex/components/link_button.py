import reflex as rx


def link_button(text:str, url: str) -> rx.Component:
    return rx.link(
        rx.chakra.button(
            rx.chakra.hstack(
                rx.icon("link"),
                rx.chakra.vstack(
                    rx.text(text),
                    rx.text(text),
                ),
            ),
        ),
        href=url,
        is_external=True,
        width = "100%"
    )